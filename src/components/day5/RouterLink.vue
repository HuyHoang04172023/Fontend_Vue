<template>
    <div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  nav {
    padding: 10px;
    background-color: #f0f0f0;
  }
  router-link {
    margin-right: 15px;
  }
  </style>
  