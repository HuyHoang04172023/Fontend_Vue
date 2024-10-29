<template>
  <li class="todo-item">
    <input
      type="checkbox"
      v-model="localTodo.completed"
      @change="toggleComplete"
    />
    <span v-if="!isEditing" @dblclick="startEditing">{{ localTodo.text }}</span>
    <input
      v-else
      v-model="localTodo.text"
      @blur="stopEditing"
      @keyup.enter="stopEditing"
    />
    <button @click="deleteItem">Xóa</button>
  </li>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, toRefs } from 'vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['update', 'delete']);

const { todo } = toRefs(props);
const localTodo = ref({ ...todo.value });
const isEditing = ref(false);

function startEditing() {
  isEditing.value = true;
}

function stopEditing() {
  isEditing.value = false;
  emitUpdate();
}

function emitUpdate() {
  if (localTodo.value.text !== todo.value.text) {
    emit('update', { ...localTodo.value });
  }
}

function toggleComplete() {
  localTodo.value.completed = !localTodo.value.completed;
  emitUpdate();
}

function deleteItem() {
  emit('delete', todo.value);
}

watch(
  () => todo.value,
  (newTodo) => {
    localTodo.value = { ...newTodo };
  }
);
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
}
input[type="text"] {
  flex-grow: 1;
}
</style>
