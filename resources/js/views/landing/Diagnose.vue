<script setup>
import { onMounted, ref } from "vue";
import Navbar from "../../component/Navbar.vue";
const listGejala = ref([]);
const listForm = ref([]);
const listResult = ref([]);
const loading = ref(false);
const isResult = ref(false);

async function getGejala() {
    const { data } = await axios.get("/diagnose/gejala");
    // console.log(data.data.data);
    listGejala.value = data.data.data;
}

async function submitCheck() {
    loading.value = true;
    isResult.value = true;
    let fm = new FormData();
    for (let x in listForm.value) {
        fm.append(`kode[${x}]`, listForm.value[x]);
    }
    try {
        const data = await axios.post("/diagnose", fm);
        loading.value = false;
        console.log(data.data.data);
        listResult.value = data.data.data;
    } catch (error) {}
}

onMounted(() => {
    getGejala();
});
</script>
<template>
    <Navbar />
    <!-- component -->
    <!-- This is an example component -->
    <div class="text-sm pt-10">
        <div v-if="isResult">
            <div class="px-4 pb-20">
                <div class="max-w-2xl mx-auto">
                    <div class="flex items-center py-1 mb-6">
                        <div class="text-lg font-semibold grow">
                            Hasil Diagnosa Penyakit
                        </div>
                    </div>
                    <div v-if="loading" class="text-lg font-semibold grow">
                        Loading
                    </div>
                    <div v-for="index in listResult" class="mb-7">
                        <div class="flex items-center">
                            <div class="grow">{{ index.data.value }}</div>
                            <div class="px-4 flex-none">
                                {{ index.gejala }} / {{ index.total_gejala }}
                            </div>
                        </div>
                        <div class="bg-gray-200">
                            <div
                                :style="{
                                    width:
                                        (100 / index.total_gejala) *
                                            index.gejala +
                                        '%',
                                }"
                                class="h-[10px] bg-primary rounded-lg mt-2"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!isResult">
            <div class="px-4 pb-20">
                <div class="max-w-2xl mx-auto">
                    <div class="flex items-center py-1 mb-6">
                        <div class="text-xl font-semibold grow">
                            List Gejala
                        </div>
                        <div class="px-4 flex-none">Checklist</div>
                    </div>
                    <div
                        v-for="index in listGejala"
                        class="flex items-center border-b border-gray-300 py-1 mb-6"
                    >
                        <div class="grow">
                            {{ index.kode }} | {{ index.value }}
                        </div>
                        <div class="px-4 flex-none">
                            <div
                                :class="
                                    listForm.indexOf(index.kode) != -1
                                        ? 'bg-primary'
                                        : ''
                                "
                                @click="
                                    {
                                        if (
                                            listForm.indexOf(index.kode) != -1
                                        ) {
                                            listForm.splice(
                                                listForm.indexOf(index.kode),
                                                1
                                            );
                                        } else {
                                            listForm.push(index.kode);
                                        }
                                    }
                                "
                                class="w-5 h-5 border border-gray-300 cursor-pointer"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fixed bottom-6 right-6">
                <button @click="submitCheck()" class="btn-secondary">
                    Check
                </button>
            </div>
        </div>
    </div>
</template>
