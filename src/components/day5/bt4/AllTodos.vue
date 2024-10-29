<template>
    <div>
        <NavbarB4/>
        <h2>Tất cả nhiệm vụ</h2>
        <AddTodo />
        <TodoList :todos="todos" />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TodoList from './TodoList.vue';
import AddTodo from './AddTodo.vue';
import NavbarB4 from './NavbarB4.vue';

const store = useStore();
const todos = computed(() => store.getters.allTodos);
</script>