<template>
  <div :class="{ completed: todo.completed }" class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="$emit('toggle-complete', todo)" />
    <span>{{ todo.text }}</span>
    <button @click="$emit('delete-todo', todo)">Xóa</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
}

.completed span {
  text-decoration: line-through;
  color: gray;
}
</style>