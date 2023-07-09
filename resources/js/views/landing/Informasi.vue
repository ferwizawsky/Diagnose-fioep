<script setup>
import { onMounted, ref } from "vue";
import BerandaRabbit from "../../components/BerandaRabbit.vue";
import Navbar from "../../components/Navbar.vue";
</script>
<template>
    <div class="min-h-screen bg-gray-100 text-gray-600 relative pb-20">
        <Navbar />
        <div class="px-4 pt-10">
            <!-- DISINI-->

            <div class="grid grid-cols-2 gap-4">
                <div class="bg-primary/30 p-4 rounded-lg">
                    Ibu hamil adalah salah satu kondisi yang digunakan untuk
                    menggambarkan periode saat janin berkembang dalam rahim,
                    biasanya proses kehamilan berlangsung dalam 40 minggu atau
                    biasanya lebih dari sembilan bulan
                </div>

                <div class="bg-primary/30 p-4 rounded-lg">
                    forward chaining adalah suatu metode untuk pencarian hasil
                    dari beberapa fakta-fakta dengan mencari pedoman yang sesuai
                    dengan dugaan atau hipotesis yang muncul menuju suatu hasil
                    atau kesimpulan
                </div>

                <div class="bg-primary/30 p-4 rounded-lg">
                    sistem pakar merupakan sistem yang berusaha mengadopsi
                    pengetahuan manusia ke komputer, agar komputer dapat
                    menyelesaikan masalah seperti yang biasanya dilakukan oleh
                    para ahli
                </div>
            </div>
        </div>
    </div>
</template>
