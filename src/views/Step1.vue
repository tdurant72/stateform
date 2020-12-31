<template>
  <div>
    <BaseInput label="Full Name" v-model="state.name" />
    <BaseInput label="Email" v-model="state.email" />
    <BaseInput label="Phone Number" v-model="state.phone" />
  </div>

  <div class="flex justify-between">
    <PrimaryInvertedBtn label="Home" @click="navPrev" />
    <PrimaryBtn label="Step 2" @click="navNext" />
  </div>
</template>

<script>
import global from "../global";
import router from "../router";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import PrimaryInvertedBtn from "../components/UI/PrimaryInvertedBtn";
import BaseInput from "../components/UI/BaseInput";
// import { ref, reactive } from "vue";
export default {
  components: {
    PrimaryBtn,
    PrimaryInvertedBtn,
    BaseInput,
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
