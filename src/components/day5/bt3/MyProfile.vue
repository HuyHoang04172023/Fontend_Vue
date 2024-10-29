<template>
    <div>
      <h2>Profile</h2>
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const user = computed(() => store.getters.user);
  </script>
  
  <style scoped>
  h2 {
    color: #42b983;
  }
  </style>
  