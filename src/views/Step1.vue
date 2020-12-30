<template>
  <div class="pt-2 flex flex-col items-start">
    <label class="text-sm text-neutral-800">Name</label>
    <input
      type="text"
      class="border-neutral-800 border-2 pl-2 rounded-md h-10"
      placeholder="Full name here"
      v-model="state.name"
    />
  </div>
  <div class="flex ">
    <SecondaryBtn label="Home" @click="navPrev" />
    <PrimaryBtn label="Step 2" @click="navNext" />
  </div>
</template>

<script>
import global from "../global";
import router from "../router";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import SecondaryBtn from "../components/UI/SecondaryBtn";
// import { ref, reactive } from "vue";
export default {
  components: {
    PrimaryBtn,
    SecondaryBtn,
  },
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
