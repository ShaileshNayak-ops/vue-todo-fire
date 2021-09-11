<template>
  <header class="text-center text-3xl bg-gray-700 text-white p-3">
    <h1>{{ text }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>
