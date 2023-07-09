<script setup>
import { onMounted, ref } from "vue";
import BerandaRabbit from "../../components/BerandaRabbit.vue";
import Navbar from "../../components/Navbar.vue";
</script>
<template>
    <div class="min-h-screen bg-gray-100 text-gray-600 relative pb-20">
        <Navbar />
        <div class="max-w-[1024px] mt-10 mx-auto px-4">
            <div class="bg-primary/30 p-4 rounded-lg">
                <!-- DISINI-->
                Sistem pakar diagnosa penyakit ibu hamil ini bertujuan untuk
                membantu ibu hamil mengetahui penyakit yang diderita dengan
                memberikan informasi mengenai gejala-gejala yang di alaminya.<br />
                >>CARA MELAKUKAN DIAGNOSA <br />
                1. Pilih menu diagnosa <br />
                2. Pilih gejala sesuai gejala yang diderita<br />
                3. Pilih check kemudian sistem akan otomatis menampilkan hasil
                diagnosa penyakit yang diderita <br />
                Terimakasih
                <div class=""></div>
            </div>
        </div>
    </div>
</template>
