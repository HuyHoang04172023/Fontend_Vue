<template>
    <div>
      <h2>Danh sách Mục</h2>
      <ul>
        <li v-for="item in items" :key="item.id">
          <router-link :to="{ name: 'ItemDetail', params: { id: String(item.id) }}">{{ item.name }}</router-link>
          <button @click="deleteItem(item.id)">Xóa</button>
        </li>
      </ul>
      <ItemForm @add="addItem" />
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import ItemForm from './ItemForm.vue';
  
  const store = useStore();
  const items = computed(() => store.getters.items);
  
  const addItem = (item) => {
    store.dispatch('addItem', item);
  };
  
  const deleteItem = (id) => {
    store.dispatch('deleteItem', id);
  };
  </script>
  