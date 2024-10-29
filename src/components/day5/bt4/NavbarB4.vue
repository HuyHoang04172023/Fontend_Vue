<template>
    <nav>
      <router-link to="/day5/todoList">Tất cả nhiệm vụ</router-link> |
      <router-link to="/day5/completed">Hoàn thành</router-link> |
      <router-link to="/day5/incomplete">Chưa hoàn thành</router-link>
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
    text-decoration: none;
    color: #42b983;
  }
  
  router-link-active {
    font-weight: bold;
  }
  </style>
  