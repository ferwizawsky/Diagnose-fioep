<script setup>
import { createObjectProperty } from "@vue/compiler-core";
import { onMounted, ref, watch } from "vue";

const props = defineProps(["count"]);
const name = ref("");
var list = ref([]);
onMounted(() => {
    // list.value.value = props.count.value;
    // list.value = new Object(props.count);
    // list.value = Object.assign(list.value, props.count);
    // list.value = props.count;
    set(list.value, props.count);
    sete(name.value, props.count);
});

function sete(a, e) {
    for (let x in e) {
        a = a + e[x].toString();
    }
    console.log(a + "a");
    console.log(name.value + "nm");
}

function set(a, e) {
    for (let x in e) {
        a.push(e[x]);
    }
    console.log(a + "a");
    console.log(list.value + "list");
}

watch(
    () => list.value,
    (e) => {
        console.log(e);
    },
    { deep: true }
);
</script>
<template>
    <!-- <div v-for="index in props.count" :key="index">
        <button @click="index.value = index.value + 5">
            Click Me {{ index.value }}
        </button>
    </div> -->
    <br />{{ name }}
    {{ list }}
    <br />
    <button @click="list[0] = list[0] + 5">Click Me {{ props.count }}</button>
</template>
