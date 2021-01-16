<template>
  <Vuemik
    :initialValues="initialValues"
    :onSubmit="onSubmit"
    :validationSchema="validationSchema"
  >
   <template v-slot:default="{ handleSubmit }" class="p-4">
    <Field name="role" component="select" >
      <option value="1">Admin</option>
      <option value="2">Vendeur </option>
      <option value="3">Client </option>
    </Field>
    <Field name="description" component="textarea" class="border p-3 w-100 my-2" ></Field> 
     <Field name="email" component="input" type="email" class="border p-3 w-100 my-2" /> 
    <Field name="prenom" component="input" type="text" /> 
    <Field name="nom" component="input" type="text" /> 
    <Field name="password" component="input" type="password" class="border p-3 w-100 my-2" /> 
    <!--  <Field name="submit" component="input" type="submit" @click.prevent="handleSubmit" />-->
     <button @click="handleSubmit" class="d-block py-3 px-4 bg-primary text-white border-0 rounded font-weight-bold">Envoyer </button>
    
   </template>
  </Vuemik>
</template>

<script>
import * as Yup from "yup";
  import  Vuemik from './Vuemik.vue';
  import Field from './Field.vue';

  export default {
    name: 'Registration',
    components: {
      Vuemik,
      Field,
    },
    computed: {
     
        initialValues: ()=>( {
          role: 1,
          nom: 'Nom',
          prenom: 'Prénom',
          email: 'email',
          description: "Descriptonlldl",
          password: '',
        
    }),
     validationSchema: () => {
      return Yup.object().shape({
         role: Yup.string()
          .notRequired("Required"),
         password: Yup.string()
          .min(8, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        prenom: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        nom: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
      });
    },

    },
    methods: {
      
      onSubmit(values) {
      //  e.preventDefault()
        //this.validationSchema(this.values)
        console.dir("salut" , values  );
      },
       /* handleSubmit(e) {
         if(this.textarea) return console.log("salut!!!!!");
         e.preventDefault();
          console.log("salut" + e);
          this.onSubmit()
        }, */
        
    },
  };
</script>