<template>
  <button
    class="transition duration-300 ease-in-out border-primary-700 border-2 shadow rounded-md mx-4 my-2 h-10 px-4 py-2 text-primary-700 shadow  hover:border-primary-900 hover:shadow-md"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["label"],
};
</script>

<style></style>
