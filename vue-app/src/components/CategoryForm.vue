<template>
  <Vuemik
    :initialValues="initialValues"
    :onSubmit="onSubmit"
    :validationSchema="validationSchema"
  >
   <template v-slot:default="{ handleSubmit }" class="p-4">
     <Field name="name" component="input" label="Name" type="text" class="border p-3 w-100 my-2" /> 
   
     <button @click="handleSubmit" class="d-block py-3 px-4 bg-primary text-white border-0 rounded font-weight-bold">Envoyer </button>
    
   </template>
  </Vuemik>
</template>

<script>
import CategoriesAPI from '../services/1categoriesAPI'
import * as Yup from "yup";
  import  Vuemik from './Vuemik.vue';
  import Field from './Field.vue';

  export default {
    name: 'CategoryForm',
    components: {
      Vuemik,
      Field,
    },
    computed: {
     
        initialValues: ()=>( {
        name: "String",
        
    }),
     validationSchema: () => {
      return Yup.object().shape({
        name: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
      });
    },

    },
    methods: {
      // mutation {signup(name: "moi",  email: "moi@gmail.com", password: "password"){token, user{password}}} 
      //mutation {signup(firstName, lastName,  email, password){token, user{password}}}
      
   
      async onSubmit(values) {
         // Call to the graphql mutation
          await CategoriesAPI.create(values);
      this.$router.push("/");

        console.dir("salut" , values  );
      },

    },
  };
</script>