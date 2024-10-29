<template>
    <div class="counter-display">
      <h2>Giá trị đếm hiện tại: {{ count }}</h2>
    </div>
    <div>
        <CounterControls/>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
import CounterControls from './CounterControls.vue';
  
  const store = useStore();
  const count = computed(() => store.getters.count);
  </script>
  
  <style scoped>
  .counter-display {
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
  }
  </style>
  