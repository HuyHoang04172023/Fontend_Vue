<template>
    <div>
        <h2>Danh sách các mục</h2>
        <ul>
            <li v-for="(item, index) in items" :key="index" v-bind:id="'item-' + index"
                v-bind:class="{ 'highlight': item.isHighlighted }">
                {{ item.name }} - Giá: {{ item.price }}$
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const items = reactive([
    { name: 'Apple', price: 1, isHighlighted: true },
    { name: 'Banana', price: 2, isHighlighted: false },
    { name: 'Cherry', price: 3, isHighlighted: true }
])
</script>

<style scoped>
.highlight {
    background-color: yellow;
}
</style>