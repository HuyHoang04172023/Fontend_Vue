<template>
    <nav>
      <router-link to="/day5/dashboard">Dashboard</router-link> |
      <router-link to="/day5/profile">Profile</router-link> |
      <router-link to="/day5/settings">Settings</router-link>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  nav {
    margin-bottom: 20px;
  }
  
  router-link {
    margin: 0 10px;
    color: #42b983;
    text-decoration: none;
  }
  
  router-link-active {
    font-weight: bold;
  }
  </style>
  