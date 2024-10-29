<template>
  <div>
    <h2>Settings</h2>
    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="name" placeholder="Enter new name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" v-model="email" placeholder="Enter new email" />
    </div>
    <button @click="updateUser">Update User Info</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const name = ref('');
const email = ref('');

const updateUser = () => {
  store.dispatch('updateUser', { name: name.value, email: email.value });
  // Reset input fields
  name.value = '';
  email.value = '';
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
div {
  margin-bottom: 10px;
}
input {
  padding: 5px;
  font-size: 16px;
  margin-left: 5px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
