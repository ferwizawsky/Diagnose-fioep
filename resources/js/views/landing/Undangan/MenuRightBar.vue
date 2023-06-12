<script setup>
import EditorComponent from "./EditorComponent.vue";
const props = defineProps(["section_pick", "rightBar", "component_pick"]);
const emit = defineEmits(["update"]);
const emitFunction = function () {
    emit("counterEvent", 2);
};
</script>
<template>
    <div
        :class="{
            'translate-x-full': !props.rightBar,
            'translate-x-0': props.rightBar,
        }"
        class="hidden lg:block w-[350px] bg-white border-l border-neutral-300 fixed top-0 h-screen overflow-y-auto pb-20 right-0 ease-in-out duration-1000 px-4 pt-[60px]"
    >
        <div class="pt-5" v-if="props.section_pick != {}">
            <span class="text-xs font-bold uppercase">Page Properties</span>
            <EditorComponent :list="props.section_pick.config" />
        </div>
        <div class="pt-5" v-if="props.component_pick">
            <span class="text-xs font-bold uppercase">
                Components Properties
            </span>
            <div v-for="index in props.component_pick.config" :key="index">
                <div class="text-xs font-semibold mt-4">
                    {{ index.text }}
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
