<script setup>
import { onMounted, ref, watch } from "vue";
import { useMouse } from "../../lib/mouse";
import Counter from "./Counter.vue";
import EditorComponent from "../landing/Undangan/EditorComponent.vue";

const { x, y, height, width } = useMouse();
let name = ref("");
// const count = ref({ value: 0 });
const count = ref([0, 0, 0]);

const section_list = ref([
    {
        text: "Bg Head Color",
        value: "#11bbff",
        code: "$c1",
        type: "color",
    },
    {
        text: "Header",
        value: "Card",
        code: "<t1>",
        type: "text",
    },
    {
        text: "Body",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus ex felis. Fusce tristique, magna et ullamcorper luctus, ipsum lorem blandit ipsum, eu commodo justo lacus id nulla. ",
        code: "<t2>",
        type: "text-long",
    },
]);

function counter() {
    console.log(section_list.value);
}
watch(
    () => count.value,
    (e) => {
        console.log(e);
    },
    {
        deep: true,
    }
);
onMounted(() => {
    window.addEventListener("message", function (e) {
        // const data = JSON.parse(e.data);
        // console.log(e);
        // Where does the message come from
        // const channel = data.channel;
    });
});
</script>
<template>
    <div class="h-screen">
        Mouse position is at: X-{{ x }}, Y-{{ y }} <br />
        <br />
        <!-- <iframe
            id="frame1"
            class="w-32 h-32"
            src="http://fioep-shiny.test/preview"
        >
        </iframe> -->
        <br />
        <button @click="counter">CLICK</button>
        Windows Screen w:{{ width }} - h:{{ height }}
        <Counter :count="count" />
        <br />
        <EditorComponent :list="section_list" />
    </div>
</template>
