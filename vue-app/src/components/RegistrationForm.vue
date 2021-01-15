<template>
  <Vuemik
    :initialValues="initialValues"
    :onSubmit="onSubmit"
    :validationSchema="validationSchema"
  >
   <template v-slot:default="{ handleSubmit }">
    <Field name="role" component="select">
      <option value="1">Admin</option>
      <option value="2">Vendeur </option>
      <option value="3">Client </option>
    </Field>
    <Field name="description" component="textarea"   ></Field> 
     <Field name="email" component="input" type="email" /> 
    <Field name="prenom" component="input" type="text" /> 
    <Field name="nom" component="input" type="text" /> 
    <Field name="password" component="input" type="password" /> 
    <!--  <Field name="submit" component="input" type="submit" @click.prevent="handleSubmit" />-->
     <button @click="handleSubmit">Envoyer </button>
    
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