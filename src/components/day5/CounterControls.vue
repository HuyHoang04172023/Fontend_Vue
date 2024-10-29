<template>
    <div class="counter-controls">
      <button @click="increment">Tăng</button>
      <button @click="decrement">Giảm</button>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  const increment = () => {
    store.dispatch('increment');
  };
  
  const decrement = () => {
    store.dispatch('decrement');
  };
  </script>
  
  <style scoped>
  .counter-controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
  </style>
  