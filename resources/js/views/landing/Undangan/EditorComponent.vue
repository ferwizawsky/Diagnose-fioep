<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
// import { ColorPicker } from "vue-accessible-color-picker";

import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

const color = ref("#eeff11");

const suckerCanvas = ref(null);
const suckerArea = ref([]);
const isSucking = ref(false);

const props = defineProps(["list"]);
const emit = defineEmits(["update"]);
const emitFunction = function () {
    emit("counterEvent", 2);
};
watch(
    () => color.value,
    (e) => {
        console.log(e);
    }
);

function changeColor(colors) {
    // color.value = colors.hex;
    // console.log(color.value);
}
function openSucker(isOpen) {
    if (isOpen) {
        // ... canvas be created
        // this.suckerCanvas = canvas
        // this.suckerArea = [x1, y1, x2, y2]
    } else {
        // this.suckerCanvas && this.suckerCanvas.remove
    }
}
</script>
<template>
    <div class="max-w-[400px] mx-auto pb-10">
        <div v-for="index in props.list" :key="index">
            <div v-if="index.type != 'hidden'">
                <div class="text-xs font-semibold mt-4">
                    {{ index.text }}
                </div>
                <!-- <input
                        type="text"
                        v-model="index.value"
                        class="w-full border rounded-md border-neutral-300 px-3 py-2 bg-transparent focus:outline-none focus:border-primary text-sm"
                    /> -->
                <div v-if="index.type == 'color'" class="relative">
                    <input
                        v-model="index.value"
                        type="text"
                        class="w-full border rounded-md border-neutral-300 px-3 py-2 bg-transparent focus:outline-none focus:border-primary text-sm"
                    />
                    <button
                        class="w-6 h-6 rounded-sm absolute right-2 top-2"
                        :style="{ background: index.value }"
                    ></button>
                    <!-- <div class="">
                        <div
                            class="bg-white border border-neutral-300 pl-2 py-2 shadow-md rounded-md"
                        >
                            <ColorPicker
                                :color="index.value"
                                class="select-none"
                                default-format="hex"
                                :visible-formats="['hex']"
                            />
                            <div class="pt-1 px-3 text-right">
                                <button
                                    class="txt mr-4"
                                    @click="previewColor()"
                                >
                                    Preview
                                </button>
                                <button
                                    @click="saveColor()"
                                    class="btn1 text-xs"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div> -->

                    <div class="mt-2 pb-3">
                        <ColorPicker
                            theme="dark"
                            style="width: 100%"
                            :color="index.value"
                            :sucker-hide="true"
                            @changeColor="index.value = $event.hex"
                        />
                    </div>
                </div>

                <textarea
                    v-if="index.type == 'text' || index.type == 'text-long'"
                    :class="{ 'h-[300px]': index.type == 'text-long' }"
                    v-model="index.value"
                    class="w-full border rounded-md border-neutral-300 px-3 py-2 bg-transparent focus:outline-none focus:border-primary text-sm"
                ></textarea>
            </div>
        </div>
    </div>
</template>
