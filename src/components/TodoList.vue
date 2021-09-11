<template>
  <div class="">
    <div v-for="(todo, idx) in todos" :key="idx" class="m-auto">
      <div class="bg-gray-700 text-white rounded w-full p-3 my-3">
        <input
          type="text"
          v-model="todo.content"
          class="text-black rounded-sm border outline-none pl-2  focus:border-indigo-500"
        />
        <!-- <Delete Todo> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 float-right cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="deleteTodo(todo.id)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <!-- </Delete Todo> -->
        <!-- <Save Todo> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-8 float-right cursor-pointer mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
          @click="updateTodo(todo)"
        >
          <path
            d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"
          />
        </svg>
        <!-- </Save Todo> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore, mapMutations } from "vuex"
export default {
  setup() {
    const store = useStore()
    const deleteTodo = id => {
      store.commit("deleteTodo", id)
    }
    const toggleTodo = todo => {
      store.commit("updateTodo", todo)
    }
    return {
      todos: computed(() => store.state.todos),
      ...mapMutations(["deleteTodo", "updateTodo"])
    }
  }
}
</script>
