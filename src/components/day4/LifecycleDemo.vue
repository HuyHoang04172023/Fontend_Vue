<template>
  <div>
    <h1>Data from API</h1>
    <p v-if="error">{{ error }}</p>
    <ul v-else>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const data = ref([]);
const error = ref(null);

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch data');
    data.value = await response.json();
  } catch (err) {
    error.value = err.message;
  }
}

function handleResize() {
  console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
}

onMounted(() => {
  fetchData();
  window.addEventListener('resize', handleResize);
  console.log('Component đã được mount!');
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  console.log('Component đã bị hủy!');
});
</script>
