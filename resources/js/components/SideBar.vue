<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const profile = ref({
    username: "",
    name: "",
});

async function getProfile() {
    try {
        const data = await axios.get(`/auth/profile`);
        console.log(data);
        profile.value = data.data.data;
    } catch (e) {
        console.log(e);
    }
}

async function logout() {
    try {
        const data = await axios.get(`/auth/logout`);
    } catch (e) {
    } finally {
        localStorage.removeItem("token");
        location.reload();
    }
}
onMounted(() => {
    getProfile();
});
</script>
<template>
    <div class="">
        <div class="flex items-center justify-between p-4">
            <div class="pl-2">
                <div>Hi,</div>
                <div class="text-xl font-medium">{{ profile.name }}</div>
            </div>
            <Menu as="div" class="relative inline-block text-left z-20">
                <div>
                    <MenuButton
                        class="bg-[#F4CA5F] w-14 h-14 flex items-center justify-center text-white font-bold text-lg rounded-full"
                    >
                        {{ profile.username.charAt(0) }}
                    </MenuButton>
                </div>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <MenuItems
                        class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button
                                    @click="$router.push(`/`)"
                                    :class="[
                                        active
                                            ? 'bg-primary text-white'
                                            : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                >
                                    Go Exam
                                </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <button
                                    @click="$router.push(`/result`)"
                                    :class="[
                                        active
                                            ? 'bg-primary text-white'
                                            : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                >
                                    Result Exam
                                </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <button
                                    @click="logout()"
                                    :class="[
                                        active
                                            ? 'bg-primary text-white'
                                            : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                >
                                    Logout
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </div>
</template>
