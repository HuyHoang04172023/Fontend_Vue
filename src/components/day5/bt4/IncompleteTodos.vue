<template>
    <div>
        <NavbarB4/>
        <h2>Nhiệm vụ chưa hoàn thành</h2>
        <ul>
            <li v-for="todo in todos" :key="todo.id">
                <input type="checkbox" :checked="todo.completed" @change="toggle(todo.id)" />
                <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
                <button @click="deleteTodo(todo.id)">Xóa</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import NavbarB4 from './NavbarB4.vue';

const store = useStore();
const todos = computed(() => store.getters.incompleteTodos);
const toggle = (id) => {
  store.dispatch('toggleTodo', id);
};
</script>