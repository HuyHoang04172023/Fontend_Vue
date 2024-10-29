<template>
  <div>
    <h1>Counter Component</h1>
    <p>Giá trị đếm hiện tại: {{ counter }}</p>
    <p>Giá trị đếm gấp đôi: {{ doubleCounter }}</p>
    <button @click="increment">Tăng</button>
    <button @click="decrement">Giảm</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);
const doubleCounter = computed(() => counter.value * 2);

function increment() {
  counter.value++;
}

function decrement() {
  counter.value--;
}
</script>

<style scoped>
button {
  margin: 5px;
  padding: 5px 10px;
}
</style>