<template>
  <div class="pt-2 flex flex-col items-start">
    <label v-if="label" class="text-sm text-neutral-800">{{ label }}</label>
    <input
      type="text"
      class="w-full border-neutral-800 border-2 pl-2 rounded-md h-10"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style></style>
