<script setup>
import { onMounted, ref } from "vue";
import BerandaRabbit from "../../components/BerandaRabbit.vue";
import Navbar from "../../components/Navbar.vue";

const username = ref("");
const password = ref("");
const type = ref("password");
const url = window.baseUrl;
onMounted(() => {});

function login() {
    localStorage.setItem("token", "Login");
}
</script>
<template>
    <div class="min-h-screen text-gray-600 relative pb-20">
        <Navbar />
        <div class="px-4 pt-10 grid grid-cols-3">
            <div
                class="col-span-2 text-lg lg:text-[40px] text-center lg:text-right px-[10px] lg:pl-[50px] lg:pr-[150px] pt-5 lg:pt-[140px] leading-snug"
            >
                <div class="text-center mb-6">Selamat Datang !</div>
                Ayo Cek Diagnosa Gejala Yang Kamu Alami
                <div class="pt-2 text-sm lg:text-xl">
                    <button
                        @click="$router.push('/diagnosa')"
                        class="btn-secondary"
                    >
                        Cek Disini !
                    </button>
                </div>
            </div>
            <div class="px-10">
                <img :src="`${url}/hamil.jpeg`" class="" />
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
