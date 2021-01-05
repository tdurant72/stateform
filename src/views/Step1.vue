<template>
  <div>
    <!-- <BaseInput label="Full Name" v-model="state.name" />
    <BaseInput label="Email" v-model="state.email" />
    <BaseInput label="Phone Number" v-model="state.phone" /> -->
    <Form @submit="navNext" :validation-schema="schema" v-slot="{ errors }">
      <div class="formItem">
        <label class="inputLabel">Full Name</label>
        <Field
          name="name"
          as="input"
          v-model="state.name"
          class="inputBox"
          :class="{ isInvalid: errors.name }"
          :value="state.name"
        />
        <div class="text-errors-900">
          {{ errors.name }}
        </div>
      </div>
      <div class="formItem">
        <label class="inputLabel">Phone Number</label>
        <Field
          name="phone"
          as="input"
          v-model="state.phone"
          class="inputBox"
          :class="{ isInvalid: errors.phone }"
          :value="state.phone"
          placeholder="(000)000-0000"
        />
        <div class="text-errors-900">
          {{ errors.phone }}
        </div>
      </div>
      <div class="formItem">
        <label class="inputLabel">Email</label>
        <Field
          name="email"
          as="input"
          v-model="state.email"
          class="inputBox"
          :class="{ isInvalid: errors.email }"
          :value="state.email"
        />
        <div class="text-errors-900">
          {{ errors.email }}
        </div>
      </div>
      <div class="flex justify-between">
        <PrimaryInvertedBtn label="Home" @click="navPrev" />
        <PrimaryBtn label="Step 2" />
      </div>
    </Form>
  </div>
</template>

<script>
import global from "../global";
import router from "../router";
import { Form, Field } from "vee-validate";
import * as yup from "yup";
import PrimaryBtn from "../components/UI/PrimaryBtn";
import PrimaryInvertedBtn from "../components/UI/PrimaryInvertedBtn";

// import { ref, reactive } from "vue";
export default {
  components: {
    PrimaryBtn,
    PrimaryInvertedBtn,
    Form,
    Field,
  },
  setup() {
    const { state } = global;

    const schema = yup.object().shape({
      name: yup.string().required("Name is required"),
      phone: yup
        .string()
        .required("Phone number is required")
        .matches(
          /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/,
          "Phone number must be in the format (000)000-0000"
        ),
      email: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
    });

    const navNext = (values) => {
      console.log("next", JSON.stringify(values, null, 4));
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
      schema,
    };
  },
};
</script>

<style></style>
