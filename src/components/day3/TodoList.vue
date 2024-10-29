<template>
  <div>
    <h1>To-Do List</h1>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Thêm nhiệm vụ mới" />
    <button @click="addTodo">Thêm</button>
    <div v-for="(todo, index) in todos" :key="index">
      <TodoItem
        :todo="todo"
        @toggle-complete="toggleComplete(todo)"
        @delete-todo="deleteTodo(todo)"
      />
    </div>
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

function toggleComplete(todo) {
  const index = todos.value.findIndex(t => t === todo);
  if (index !== -1) {
    todos.value[index].completed = !todos.value[index].completed;
  }
}

function deleteTodo(todo) {
  todos.value = todos.value.filter(t => t !== todo);
}
</script>                                                                                                                    