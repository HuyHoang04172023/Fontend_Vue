<template>
    <div>
      <h2>Chi tiết Mục</h2>
      <p v-if="item">ID: {{ item.id }}</p>
      <p v-if="item">Tên: {{ item.name }}</p>
      <ItemForm v-if="item" :editing="true" @update="updateItem" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';
  import ItemForm from './ItemForm.vue';
  
  const store = useStore();
  const route = useRoute();
  
  const item = computed(() => store.getters.getItemById(Number(route.params.id)));
  
  const updateItem = (updatedItem) => {
    store.dispatch('updateItem', updatedItem);
  };
  </script>
  