import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      count: 0,
      user: {
        name: 'Huy Hoang',
        email: 'huyhoang@gmail.com'
      },
      todos: [],
      items: [],
      currentItemId: null,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    updateUser(state, userData) {
      state.user = { ...state.user, ...userData };
    },
    addTodo(state, text) {
      const lastIndex = state.todos.length > 0 ? state.todos[state.todos.length - 1].id : 0;
      const newId = lastIndex + 1;
      state.todos.push({ id: newId, text, completed: false });
    },
    toggleTodo(state, id) {
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    setCurrentItemId(state, id) {
      state.currentItemId = id;
    },
    addItem(state, item) {
      const newItem = { ...item, id: state.items.length ? state.items[state.items.length - 1].id + 1 : 1 };
      state.items.push(newItem);
    },
    updateItem(state, updatedItem) {
      const index = state.items.findIndex((item) => item.id === updatedItem.id);
      if (index !== -1) {
        state.items.splice(index, 1, updatedItem);
      }
    },
    deleteItem(state, id) {
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
    updateUser({ commit }, userData) {
      commit('updateUser', userData);
    },
    addTodo({ commit }, text) {
      commit('addTodo', text);
    },
    toggleTodo({ commit }, id) {
      commit('toggleTodo', id);
    },
    deleteTodo({ commit }, id) {
      commit('deleteTodo', id);
    },
    setCurrentItemId({ commit }, id) {
      commit('setCurrentItemId', id);
    },
    addItem({ commit }, item) {
      commit('addItem', item);
    },
    updateItem({ commit }, updatedItem) {
      commit('updateItem', updatedItem);
    },
    deleteItem({ commit }, id) {
      commit('deleteItem', id);
    },
  },
  getters: {
    count: (state) => state.count,
    user: (state) => state.user,
    allTodos: (state) => state.todos,
    completedTodos: (state) => state.todos.filter((todo) => todo.completed),
    incompleteTodos: (state) => state.todos.filter((todo) => !todo.completed),
    items: (state) => state.items,
    getItemById: (state) => (id) => state.items.find((item) => item.id === id),
    currentItem: (state) => state.items.find((item) => item.id === state.currentItemId),
  }
});

export default store;
