<template>
  <div class="pt-2 flex flex-col items-start">
    <label class="text-sm text-gray-800">Name</label>
    <input
      type="text"
      class="border-gray-800 border-2 pl-2 rounded-md h-10"
      placeholder="Full name here"
      v-model="state.name"
    />
  </div>
  <div class="flex ">
    <button @click="navPrev">Home</button>
    <button @click="navNext">Step 2</button>
  </div>
</template>

<script>
import global from "../global";
import router from "../router";
// import { ref, reactive } from "vue";
export default {
  setup() {
    const { state } = global;
    const navNext = () => {
      router.push("./step2");
    };
    const navPrev = () => {
      router.push("./home");
    };
    //some other function

    return {
      state,
      navNext,
      navPrev,
    };
  },
};
</script>

<style></style>
