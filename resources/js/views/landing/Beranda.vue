<script setup>
import { onMounted, ref } from "vue";
import BerandaRabbit from "../../component/BerandaRabbit.vue";
import Navbar from "../../component/Navbar.vue";

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
        <BerandaRabbit />

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
