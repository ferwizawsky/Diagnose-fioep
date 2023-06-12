<script setup>
import { onMounted, ref } from "vue";
import BerandaRabbit from "../component/BerandaRabbit.vue";

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
        <div class="landing-navbar">
            <div>
                <div class="text-xs">FIOEP</div>
                Shiny
            </div>
            <ul>
                <li>
                    <button class="btn-primary">Beranda</button>
                </li>
                <li>Sign</li>
            </ul>
        </div>

        <BerandaRabbit />

        <div class="xl:w-[1280px] mx-auto relative mt-[200px] px-4">
            <div>
                <div class="tracking-widest text-primary font-bold">List</div>
                <div class="text-[30px] -mt-3 mb-4">Paket Produk</div>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div
                    class="bg-white rounded-lg shadow-md min-h-[300px] lg:min-h-[400px]"
                    v-for="index in 10"
                ></div>
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
