<template>
    <div>
      <input v-model="text" placeholder="Thêm nhiệm vụ mới" @keyup.enter="add" />
      <button @click="add">Thêm</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const text = ref('');
  
  const add = () => {
    if (text.value.trim()) {
      store.dispatch('addTodo', text.value);
      text.value = '';
    }
  };
  </script>
  