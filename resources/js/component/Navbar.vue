<script setup>
import { ref } from "vue";

const nav = ref([
    {
        text: "Beranda",
        to: "/",
    },
    {
        text: "Diagnosa",
        to: "/diagnosa",
    },
    {
        text: "Login",
        to: "/login",
    },
]);
</script>
<template>
    <div class="landing-navbar">
        <div>
            <div class="text-xs">FIOEP</div>
            Diagnose
        </div>
        <ul>
            <li v-for="index in nav" :key="index">
                <RouterLink :to="index.to">{{ index.text }}</RouterLink>
            </li>
        </ul>
    </div>
    <div class="py-10"></div>
</template>
