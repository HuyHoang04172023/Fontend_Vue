<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :checked="todo.completed" @change="toggle(todo.id)" />
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <button @click="deleteTodo(todo.id)">Xóa</button>
    </li>
  </ul>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const todos = computed(() => store.getters.allTodos);

const toggle = (id) => {
  store.dispatch('toggleTodo', id);
};

const deleteTodo = (id) => {
  store.dispatch('deleteTodo', id);
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
