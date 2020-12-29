<template>
  <div>{{ this.businessNameV2 }}</div>
  <div>{{ businessNameRef }}</div>
  <div>{{ businessNameReactive }}</div>
  <button @click="calNumbers">Calc</button>
</template>

<script>
import global from "../global";
import { ref, reactive } from "vue";
export default {
  setup() {
    const { state } = global;
    const businessNameRef = ref("My consulting firm ref");
    const businessNameReactive = reactive("My consulting firm refactive");
    const numberRef = ref(2);
    const numberReative = reactive(4);
    //some other function
    const calNumbers = () => {
      console.log(
        "numberRef",
        numberRef.value * 2,
        "numberReactive",
        numberReative * 2
      );
    };
    return {
      state,
      businessNameRef,
      businessNameReactive,
      numberRef,
      numberReative,
      calNumbers,
    };
  },
  data: () => ({
    businessNameV2: "My consulting firm v2",
  }),
};
</script>

<style></style>
