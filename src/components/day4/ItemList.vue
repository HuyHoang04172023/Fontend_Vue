<template>
  <div>
    <h2>Item List</h2>
    <form @submit.prevent="addItem">
      <input type="text" v-model="newItem" placeholder="Nhập mục mới" />
      <button type="submit">Thêm</button>
    </form>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span v-if="editingIndex !== index">{{ item }}</span>
        <input v-else type="text" v-model="editValue" @keyup.enter="saveEdit(index)" @blur="saveEdit(index)" />
        <button @click="editItem(index)">Chỉnh sửa</button>
        <button @click="deleteItem(index)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const items = reactive([]);

const newItem = ref('');

const editingIndex = ref(-1);
const editValue = ref('');

function addItem() {
  if (newItem.value.trim()) {
    items.push(newItem.value.trim());
    newItem.value = '';
  }
}

function deleteItem(index) {
  items.splice(index, 1);
}

function editItem(index) {
  editingIndex.value = index;
  editValue.value = items[index];
}

function saveEdit(index) {
  if (editValue.value.trim()) {
    items[index] = editValue.value.trim();
  }
  editingIndex.value = -1;
}
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
}
</style>