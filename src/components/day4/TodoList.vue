<template>
    <div class="todo-list">
      <h1>To-Do List</h1>
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Thêm nhiệm vụ mới"
      />
      <button @click="addTodo">Thêm</button>
      <ul>
        <TodoItem
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          @update="updateTodo"
          @delete="deleteTodo"
        />
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import TodoItem from './TodoItem.vue';
  
  const newTodo = ref('');
  const todos = ref([]);
  
  function addTodo() {
    if (newTodo.value.trim()) {
      todos.value.push({ text: newTodo.value, completed: false });
      newTodo.value = '';
    }
  }
  
  function updateTodo(updatedTodo) {
    const index = todos.value.findIndex((t) => t.text === updatedTodo.text);
    if (index !== -1) {
      todos.value[index] = updatedTodo;
    }
  }
  
  function deleteTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo);
  }
  </script>
  
  <style scoped>
  .todo-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin-right: 10px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  </style>
  