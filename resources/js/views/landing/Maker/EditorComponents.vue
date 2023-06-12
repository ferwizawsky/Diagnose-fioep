<script setup>
import { onMounted } from "vue";

const props = defineProps(["list"]);
onMounted(() => {});
</script>
<template>
    <div
        @click.self="$emit('hide', true)"
        class="fixed px-4 py-4 z-10 w-full h-full bg-gray-900 text-gray-600 bg-opacity-30"
    >
        <div
            class="bg-white py-1 px-2 w-full min-h-[300px] rounded-lg shadow-lg"
        >
            <div class="flex justify-between min-h-[40px] items-center">
                <div class="px-2 font-semibold">Editor Home</div>
                <div class="">
                    <button class="p-2 rounded-lg bg-red text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <form @submit.prevent="" class="pt-5 px-2">
                <div>
                    <input
                        class="w-full border border-gray-200 py-1.5 px-4 rounded-md"
                    />
                </div>
            </form>
        </div>
    </div>
</template>
