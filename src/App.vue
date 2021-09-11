<template>
  <div class="antialiased">
    <Header text="Todo App" />
    <div
      class="max-w-full lg:relative lg:w-3/4 xl:w-3/5 p-3 sm:p-6 xl:pl-12 mb-16 m-auto"
    >
      <TodoForm />
      <TodoList />
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue"
import { useStore } from "vuex"
import Header from "./components/Header.vue"
import TodoForm from "./components/TodoForm.vue"
import TodoList from "./components/TodoList.vue"
export default {
  setup() {
    const store = useStore()
    onMounted(() => store.dispatch("fetchTodos"))
  },
  components: {
    Header,
    TodoForm,
    TodoList
  }
}
</script>

<style src="./assets/build.css"></style>
