<template>
  <button
    class="transition duration-300 ease-in-out bg-primary-700 ring-inset ring-primary-700 ring-opacity-50 shadow rounded-md mx-4 my-2 h-10 px-4 py-2 text-primary-50 shadow  hover:shadow-md hover:bg-primary-800"
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
