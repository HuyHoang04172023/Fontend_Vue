<template>
    <div>
      <input v-model="localItem.name" placeholder="Tên mục" />
      <button @click="submit">{{ editing ? 'Cập nhật' : 'Thêm' }}</button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';
  
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  
  const editing = ref(!!route.params.id);
  const localItem = ref({ name: '' });
  
  watch(
    () => store.getters.getItemById(Number(route.params.id)),
    (currentItem) => {
      if (currentItem) {
        localItem.value = { ...currentItem };
      }
    },
    { immediate: true }
  );
  
  const submit = () => {
    if (editing.value) {
      store.dispatch('updateItem', { ...localItem.value, id: Number(route.params.id) });
    } else {
      store.dispatch('addItem', { ...localItem.value });
      localItem.value.name = '';
    }
    router.push('/day5/itemList');
  };
  </script>
  