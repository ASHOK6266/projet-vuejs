<template>
  <div>
    <!--
        <vuemik
            :validationSchema="validationSchema" 
        >
            <Field type="text" name="itemName" />
            <Field type="">
        </vuemik>
        -->
  </div>
</template>

<script>
import * as yup from "yup";

const credentials = {
  username,
  email,
  password,
  confirmpassword,
};

export default {
  name: "register_form",
  data: () => ({}),
  methods: {},
  computed: {
    ValidationSchema: () => {
      return yup.object.shape({
        username: yup
          .string()
          .min(2, " username is too short")
          .max(50, "username is too long")
          .required("username is required"),
        email: yup.string.email(" Invalid email").required("email is required"),
        password: yup
          .string()
          .min(6, "Password must be 6 characters")
          .max(50, "Password is too long")
          .required("Password is required"),
        confirmpassword: yup.string.oneof(
          [yup.ref("password"), null],
          "password must match"
        ),
      });
    },
  },
};
</script>

<style scoped>
/* GLOBAL STYLING */
#app {
  background: #202329;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
