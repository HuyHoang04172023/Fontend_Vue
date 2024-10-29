<template>
  <div>
    <input v-model="inputValue" placeholder="Nhập nội dung tại đây" />
    <p>Giá trị bạn vừa nhập: {{ inputValue }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const inputValue = ref('');
</script>

<style scoped>
input {
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
}

p {
  font-size: 18px;
  color: #333;
}
</style>