<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/vue";
import { ColorPicker } from "vue-accessible-color-picker";
import Mobile from "../icon/Mobile.vue";
import Tablet from "../icon/Tablet.vue";
import Desktop from "../icon/Desktop.vue";
import { onMounted, ref, watch } from "vue";
import MenuRightBar from "./Undangan/MenuRightBar.vue";
import ListComponents from "./Undangan/ListComponents.vue";

let leftBar = ref(true);
let rightBar = ref(true);
let top = ref("");
let bot = ref("");

let isLoad = ref(false);
let pendingLoad = ref(0);

let color = ref(null);
let color_pick = ref({});

let sc = ref("");
let iframe_scroll_y = ref(0);
let view_mode = ref(0);
let section_list = ref([]);
let section_pick = ref({});
let component_pick = ref({});

let isOpen = ref(false);

onMounted(() => {
    getData();
    for (let x = 0; x < 3; x++) {
        section_list.value.push({
            name: "",
            code: '<div class="relative mb-10"><div class="bg-[$c1] pt-4 w-full h-[200px] z-0 absolute top-0 left-0"></div><div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pt-4"> <content> </div></div>',
            text: "Section " + x,
            config: [
                {
                    text: "Bg Head Color",
                    value: "#11bbff",
                    code: "$c1",
                    type: "color",
                },
                {
                    text: "Content",
                    value: [],
                    code: "<content>",
                    type: "hidden",
                },
            ],
        });
        for (let y = 0; y < 5; y++) {
            section_list.value[x].config[1].value.push({
                name: "",
                code:
                    " <div class='bg-white   min-h-[200px] rounded-lg shadow-lg   text-center p-4'>" +
                    "<div class='text-lg font-semibold'><t1></div>" +
                    "<div class='text-sm'><t2></div>" +
                    "</div> ",
                text: "Components " + y,
                config: [
                    {
                        text: "Header",
                        value: "Card" + y,
                        code: "<t1>",
                        type: "text",
                    },
                    {
                        text: "Body",
                        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus ex felis. Fusce tristique, magna et ullamcorper luctus, ipsum lorem blandit ipsum, eu commodo justo lacus id nulla. ",
                        code: "<t2>",
                        type: "text-long",
                    },
                ],
            });
        }
    }
});

watch(
    () => section_list.value,
    (first, second) => {
        if (isLoad.value) {
            renderList();
        }
        console.log(first);
        // else {
        //     pendingLoad.value = pendingLoad.value + 1;
        // }
    },
    { deep: true }
);

watch(
    () => section_pick.value.text,
    (first, second) => {
        color_pick.value = {};
        console.log(first);
    }
);

watch(
    () => pendingLoad.value,
    (first, second) => {
        color_pick.value = {};
    }
);

function saveColor() {
    //  color = eventData.cssColor;
    // console.log( color_pick);
    color_pick.value.value = color.value;
}
function updateColor(eventData) {
    //  color = eventData.cssColor;
    // console.log( color_pick);
    color.value = eventData.cssColor;
    color_pick.value.value = color.value;
}
function closeModal() {
    isOpen.value = false;
}
function openModal() {
    isOpen.value = true;
}
function removeThing(e, a) {
    const index = a.indexOf(e);
    if (index > -1) {
        a.splice(index, 1); // 2nd parameter means remove one item only
    }
}
function removeComponent(e) {
    for (let x in section_list.value) {
        if (section_list.value[x] == section_pick.value) {
            let a = getComponentList(section_list.value[x]);
            const index = a.indexOf(e);
            if (index > -1) {
                a.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    }
}
function reload_frame() {
    var _iframe = window.parent.document.getElementById("iframe");
    _iframe.contentWindow.scrollTo(0, iframe_scroll_y.value);
    isLoad.value = true;
    // _iframe.contentWindow.location.reload(true);
}
function save() {
    renderList();
    console.log(section_list.value);
}
function renderList() {
    let dat = "";
    dat = getCodeSection();
    var _iframe = window.parent.document.getElementById("iframe");
    iframe_scroll_y.value = _iframe.contentWindow.scrollY;
    console.log(section_list.value);
    sc.value = top.value + dat + bot.value;
    isLoad.value = false;
}
function getData() {
    axios.get("/get-template/1").then((e) => {
        top.value = e.data.data.top;
        bot.value = e.data.data.bot;
        // console.log(e.data.data);
        renderList();
    });
}
function getCode(a) {
    let tmp = "";
    for (let x in a) {
        let tmp1 = a[x].code;
        for (let y in a[x].config) {
            tmp1 = tmp1.replace(a[x].config[y].code, a[x].config[y].value);
        }
        tmp = tmp + tmp1;
    }
    return tmp;
}
function getComponent(a, e) {
    const dat = {};
    for (let y in a.config) {
        if (a.config[y].type == e) {
            return a.config[y];
        }
    }
    return dat;
}
function getComponentList(a) {
    const dat = [];
    for (let y in a.config) {
        if (a.config[y].text == "Content") {
            return a.config[y].value;
        }
    }
    return dat;
}
function getCodeSection() {
    let dat = "";
    for (let x in section_list.value) {
        for (let y in section_list.value[x].config) {
            if (section_list.value[x].config[y].text == "Content") {
                dat =
                    dat +
                    section_list.value[x].code.replace(
                        section_list.value[x].config[y].code,
                        getCode(section_list.value[x].config[y].value)
                    );
            } else {
                dat =
                    dat +
                    section_list.value[x].code.replace(
                        section_list.value[x].config[y].code,
                        section_list.value[x].config[y].value
                    );
            }
        }
    }
    return dat;
}
</script>
<template>
    <div class="min-h-screen bg-neutral-300">
        <div
            class="bg-neutral-800 h-[60px] flex justify-between items-center px-4 fixed top-0 left-0 w-full text-white select-none z-10 border-b border-neutral-700"
        >
            <div class="flex items-center tracking-widest uppercase">
                <button class="mr-4 lg:hidden" @click="leftBar = !leftBar">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                        />
                    </svg>
                </button>
                <svg
                    fill="none"
                    viewBox="0 0 206 206"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 ml-9 cursor-pointer"
                >
                    <path
                        d="M67.6936 28.0613V39.633H43.5367V52.1338H61.6122V63.3676H43.5367V87.3555H29.0933V28.0613H67.6936ZM159.489 87.9468C153.915 87.9468 148.791 86.6517 144.117 84.0614C139.499 81.4712 135.811 77.8673 133.052 73.2499C130.349 68.5762 128.998 63.3394 128.998 57.5395C128.998 51.7396 130.349 46.5309 133.052 41.9135C135.811 37.2961 139.499 33.6923 144.117 31.1021C148.791 28.5118 153.915 27.2167 159.489 27.2167C165.064 27.2167 170.16 28.5118 174.777 31.1021C179.451 33.6923 183.111 37.2961 185.758 41.9135C188.461 46.5309 189.812 51.7396 189.812 57.5395C189.812 63.3394 188.461 68.5762 185.758 73.2499C183.055 77.8673 179.395 81.4712 174.777 84.0614C170.16 86.6517 165.064 87.9468 159.489 87.9468ZM159.489 74.7703C164.219 74.7703 167.992 73.1936 170.808 70.0403C173.679 66.8869 175.115 62.72 175.115 57.5395C175.115 52.3027 173.679 48.1358 170.808 45.0387C167.992 41.8854 164.219 40.3087 159.489 40.3087C154.703 40.3087 150.874 41.8572 148.002 44.9543C145.187 48.0513 143.779 52.2464 143.779 57.5395C143.779 62.7763 145.187 66.9714 148.002 70.1247C150.874 73.2218 154.703 74.7703 159.489 74.7703Z"
                        fill="white"
                    ></path>
                    <path
                        d="M105.355 28.0608V87.355H90.9111V28.0608H105.355Z"
                        fill="#FFC226"
                    ></path>
                    <path
                        d="M43.5367 123.327V135.321H62.8791V146.471H43.5367V159.478H65.4131V171.05H29.0933V111.756H65.4131V123.327H43.5367Z"
                        fill="white"
                    ></path>
                    <path
                        d="M179.527 130.845C179.527 134.28 178.738 137.433 177.161 140.305C175.585 143.12 173.163 145.401 169.898 147.146C166.632 148.892 162.577 149.765 157.735 149.765H148.781V171.05H134.338V111.756H157.735C162.465 111.756 166.463 112.572 169.729 114.205C172.995 115.838 175.444 118.09 177.077 120.962C178.71 123.834 179.527 127.128 179.527 130.845ZM156.637 138.278C159.396 138.278 161.451 137.63 162.802 136.335C164.154 135.04 164.83 133.21 164.83 130.845C164.83 128.48 164.154 126.65 162.802 125.354C161.451 124.059 159.396 123.412 156.637 123.412H148.781V138.278H156.637Z"
                        fill="#FFC226"
                    ></path>
                </svg>
                <!-- <span
                    @click="leftBar = !leftBar"
                    class="text-primary font-medium"
                    >FIOEP</span
                >&nbsp;&nbsp;Shiny -->
            </div>
            <div class="hidden lg:block">
                <ul class="flex items-center justify-center u-top-nav w-full">
                    <li :class="{ active: view_mode == 0 }">
                        <Mobile class="h-6" @click="view_mode = 0" />
                    </li>

                    <li :class="{ active: view_mode == 1 }">
                        <Tablet class="h-6" @click="view_mode = 1" />
                    </li>
                    <li :class="{ active: view_mode == 2 }">
                        <Desktop class="h-6" @click="view_mode = 2" />
                    </li>
                </ul>
            </div>
            <div class="hidden md:block">
                <button class="btn1 text-sm" @click="save()">Save</button>
            </div>
        </div>

        <ListComponents
            :leftBar="leftBar"
            :section_list="section_list"
            :section_pick="section_pick"
            :component_pick="component_pick"
            @setSection="section_pick = $event"
            @setComponent="component_pick = $event"
        />
        <MenuRightBar
            :section_pick="section_pick"
            :rightBar="rightBar"
            :component_pick="component_pick"
        />

        <div
            class="h-screen pt-[60px] ease-in-out duration-1000"
            :class="{
                'lg:pl-[250px]': view_mode == 2,
                'lg:pr-[350px]': view_mode == 2,
            }"
        >
            <div
                class="h-full mx-auto ease-in-out duration-1000"
                :class="{
                    'lg:w-[440px]': view_mode == 0,
                    'w-[768px]': view_mode == 1,
                    'w-full': view_mode == 2,
                }"
            >
                <iframe
                    :srcdoc="sc"
                    height="100%"
                    width="100%"
                    @load="reload_frame()"
                    class="select-none"
                    title="Iframe Example"
                    id="iframe"
                ></iframe>
            </div>
        </div>

        <TransitionRoot appear :show="isOpen" as="template">
            <Dialog as="div" @close="closeModal" class="relative z-10">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0"
                    enter-to="opacity-100"
                    leave="duration-200 ease-in"
                    leave-from="opacity-100"
                    leave-to="opacity-0"
                >
                    <div class="fixed inset-0 bg-black bg-opacity-25" />
                </TransitionChild>

                <div class="fixed inset-0 overflow-y-auto">
                    <div
                        class="flex min-h-full items-center justify-center p-4 text-center"
                    >
                        <TransitionChild
                            as="template"
                            enter="duration-300 ease-out"
                            enter-from="opacity-0 scale-95"
                            enter-to="opacity-100 scale-100"
                            leave="duration-200 ease-in"
                            leave-from="opacity-100 scale-100"
                            leave-to="opacity-0 scale-95"
                        >
                            <DialogPanel
                                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Payment successful
                                </DialogTitle>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">
                                        Your payment has been successfully
                                        submitted. We’ve sent you an email with
                                        all of the details of your order.
                                    </p>
                                </div>

                                <div class="mt-4">
                                    <button
                                        type="button"
                                        class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        @click="closeModal"
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<style>
.vacp-copy-button {
    display: none;
}
</style>
