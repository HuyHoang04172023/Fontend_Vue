<template>
  <div>
    <h2>Simple Calculator Component</h2>
    <input type="number" v-model="number1" placeholder="Enter number 1" />
    <input type="number" v-model="number2" placeholder="Enter number 2" />
    <p>Sum: {{ sum }}</p>
    <p>Difference: {{ difference }}</p>
    <p>Product: {{ product }}</p>
    <p>Quotient: {{ quotient }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const number1 = ref(0);
const number2 = ref(0);

const sum = computed(() => number1.value + number2.value);
const difference = computed(() => number1.value - number2.value);
const product = computed(() => number1.value * number2.value);
const quotient = computed(() => number2.value !== 0 ? (number1.value / number2.value).toFixed(2) : 'N/A');
</script>

<style scoped>
input {
  margin: 5px 0;
  padding: 5px;
}
</style>
