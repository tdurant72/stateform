import { reactive } from "vue";

const state = reactive({
  name: "",
  email: "",
  phone: "",
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
  },
});
export default { state };
