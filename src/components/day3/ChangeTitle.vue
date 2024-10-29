<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Change Title</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "This is the original title"
    };
  },
  methods: {
    changeTitle() {
      this.title = "The title has been changed!";
    }
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}

button {
  margin-top: 10px;
}
</style>