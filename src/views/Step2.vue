<template>
  <div>step2</div>
  <div class="flex ">
    <button @click="navPrev">Home</button>
    <button @click="navNext">Step 2</button>
  </div>
</template>

<script>
import router from "../router";
import global from "../global";
export default {
  setup() {
    const { state } = global;
    const navNext = () => {
      router.push("./step2");
    };
    const navPrev = () => {
      router.push("./home");
    };
    return { state, navNext, navPrev };
  },
};
</script>

<style></style>
