<template>
  <form class="" @submit.prevent="addTodo()">
    <input
      class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg outline-none transition focus:shadow-md"
      type="text"
      placeholder="Type A Todo..."
      v-model="newTodo"
    />
    <button
      type="submit"
      class="p-2 bg-gray-700 block rounded-md text-white hover:bg-gray-600"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const newTodo = ref("")
    const store = useStore()
    const addTodo = () => {
      store.commit("addTodo", newTodo.value)
    }
    return {
      newTodo,
      addTodo
    }
  }
}
</script>
