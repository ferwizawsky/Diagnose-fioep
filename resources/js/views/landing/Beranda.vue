<script setup>
import { onMounted, ref } from "vue";
import BerandaRabbit from "../../components/BerandaRabbit.vue";
import Navbar from "../../components/Navbar.vue";

const username = ref("");
const password = ref("");
const type = ref("password");

onMounted(() => {});

function login() {
    localStorage.setItem("token", "Login");
}
</script>
<template>
    <div class="min-h-screen bg-gray-100 text-gray-600 relative pb-20">
        <Navbar />
        <div class="px-4 pt-10">
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-primary/30 p-4 rounded-lg">
                    Anxiety disorder atau ansietas adalah gangguan kecemasan
                    yang ditandai dengan gejala somatik, vegetatif, dan kognitif
                    sebagai respon tidak adanya rasa aman atau ketidakmampuan
                    dalam menghadapi suatu masalah
                </div>

                <div class="bg-primary/30 p-4 rounded-lg">
                    forward chaining adalah suatu metode untuk pencarian hasil
                    dari sistem pendukung keputusan kalau engga salah karena aku
                    juga belum liat di google
                </div>

                <div class="bg-primary/30 p-4 rounded-lg">
                    sistem pakar merupakan sistem yang pengertianya sendiri aku
                    belum tau pasti karena belum searching, mohon maaf
                </div>
            </div>
            <div
                class="mt-24 text-lg lg:text-[40px] text-center lg:text-right px-[10px] lg:pl-[50px] lg:pr-[150px] pt-5 lg:pt-[140px] leading-snug"
            >
                Ayo Cek Diagnosa Gejala Yang Kamu Alami
                <!-- <div class="text-xl text-red pt-4 font-bold">
                    <span><del>RP. 70.000</del></span> &nbsp; &nbsp; &nbsp;
                    &nbsp; <br class="lg:hidden" />
                    <span class="text-[40px]">Rp. 24.000</span>
                </div> -->
                <div class="pt-2 text-sm lg:text-xl">
                    <button class="btn-secondary">Cek Disini !</button>
                </div>
            </div>
        </div>

        <!-- <div
            class="max-w-[400px] px-4 bg-white rounded-lg shadow-md py-4 mx-auto"
        >
            <form @submit.prevent="login()" class="">
                <div class="text-center pb-4 text-xl">Join Us!</div>
                <div class="form-input">
                    <input
                        type="text"
                        v-model="username"
                        placeholder="Username"
                    />
                </div>
                <div class="form-input">
                    <input
                        :type="type"
                        v-model="password"
                        placeholder="Password"
                    />
                </div>
                <input type="submit" class="btn" value="Login" />
            </form>
        </div> -->
    </div>
</template>
