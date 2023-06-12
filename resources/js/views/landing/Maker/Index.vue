<script setup>
import { onMounted, ref } from "vue";
import EditorComponents from "./EditorComponents.vue";

const preview = ref("");
const isHide = ref(false);
const arr = ref([
    {
        data: "ea",
        id: 1,
    },
]);
const editor = ref([]);
onMounted(() => {
    axios.get("/preview").then((response) => {
        // console.log(e.data);
        preview.value = response.data;
    });
    window.addEventListener("message", iframeEvent, false);
});

function iframeEvent(event) {
    console.log("Parent received:  ");
    console.log(JSON.parse(event.data));
    editor.value = JSON.parse(event.data);
}

function renders() {
    let myIframe = document.getElementById("frame");
    // myIframe.contentWindow.postMessage(JSON.stringify(arr.value), "*");
    var conf = myIframe.contentWindow.document
        .getElementsByTagName("config")[0]
        .getElementsByTagName("div");
    for (let x in conf) {
        if (conf[x].innerHTML) {
            var pars = conf[x].innerHTML.split("||");
            console.log(pars);

            var tmp = myIframe.contentWindow.document.getElementById("app");
            tmp.innerHTML = tmp.innerHTML.replace(pars[0], pars[2]);

            var html =
                myIframe.contentWindow.document.getElementsByTagName("html")[0];
            console.log(html);
        }
    }
    console.log("render");
}

function send() {
    let myIframe = document.getElementById("frame");
    // myIframe.contentWindow.postMessage(JSON.stringify(arr.value), "*");
    console.log(
        myIframe.contentWindow.document.getElementsByTagName("config")[0]
    );
}
</script>
<template>
    <div
        class="w-full h-[50px] bg-white shadow-md dark:bg-gray-800 fixed top-0 left-0 flex items-center justify-between px-4"
    >
        <div>
            <button @click="send()">BTN</button>
        </div>
        <div>
            <button @click="renders()">BTE</button>
        </div>
    </div>
    <div class="h-screen overflow-hidden" :class="{ 'pt-[50px]': !isHide }">
        <EditorComponents
            :list="editor"
            @hide="editor = []"
            v-if="editor.length > 0"
        />
        <iframe id="frame" :srcdoc="preview" class="w-full h-full"></iframe>
    </div>
</template>
