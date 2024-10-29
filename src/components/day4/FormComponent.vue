<template>
    <div>
      <h2>Form Component</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Tên:</label>
          <input type="text" id="name" v-model="formData.name" ref="nameInput" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" ref="emailInput" />
        </div>
        <button type="submit">Gửi</button>
      </form>
      <p v-if="submittedMessage">{{ submittedMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  const formData = reactive({
    name: '',
    email: ''
  });
  
  const nameInput = ref(null);
  const emailInput = ref(null);
  
  const submittedMessage = ref('');
  
  function handleSubmit() {
    if (!formData.name || !formData.email) {
      submittedMessage.value = 'Vui lòng điền đầy đủ thông tin!';
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      submittedMessage.value = 'Vui lòng nhập địa chỉ email hợp lệ!';
      emailInput.value.focus();
      return;
    }
  
    submittedMessage.value = `Xin chào, ${formData.name}! Địa chỉ email của bạn là ${formData.email}.`;
    
    formData.name = '';
    formData.email = '';
    nameInput.value.focus();
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  button {
    margin-top: 10px;
    padding: 5px;
  }
  </style>
  