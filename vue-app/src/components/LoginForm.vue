<template>
  <Vuemik
    :initialValues="initialValues"
    :onSubmit="onSubmit"
    :validationSchema="validationSchema"
  >
   <template v-slot:default="{ handleSubmit }" class="p-4">
     <Field name="email" label="Mon email" component="input" type="email" class="border p-3 w-100 my-2" /> 
    <Field name="password" label="Mon password" component="input" type="password" class="border p-3 w-100 my-2" /> 
     <button @click="handleSubmit" class="d-block py-3 px-4 bg-primary text-white border-0 rounded font-weight-bold">Envoyer </button>
    
   </template>
  </Vuemik>
</template>

<script>
//import gql from 'graphql-tag' // La 1ère pour graphql
import AuthAPI from "../services/authAPI.js" // 1ère pour api
import notificationCenter from "../lib/NotifCenter.js";
import * as Yup from "yup";
  import  Vuemik from './Vuemik.vue';
  import Field from './Field.vue';

  export default {
    name: 'LoginForm',
    components: {
      Vuemik,
      Field,
    },
    inject: ['setIsAuthenticated', 'isAuthenticated' ],
    data() {
      return { 
              msg: "Vous êtes désormais connecté !",
      }
    },

    computed: {
     
     
        initialValues: ()=>( {
         
          email: 'ld@gmail.com',
          //description: "Descriptonlldl",
          password: '',
        
    }),
     validationSchema: () => {
      return Yup.object().shape({
        password: Yup.string()
          .min(8, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
       email: Yup.string().email("Invalid email").required("Required"),
      });
    },

    },
     
    methods: {
       async onSubmit(values) {
         // Call to the graphql mutation
      
        console.log(values)
         event.preventDefault();

    try {
      await AuthAPI.authenticate(values);
      this.setIsAuthenticated(true);
      this.$router.push("/product");
    /*    notificationCenter.onMessage((msg) => {
      this.$data.msg = msg.msg;
      setTimeout(() => (this.$data.msg = "ça n'a pas marché !!"), 5000);
    });*/
 
    notificationCenter.notify({
        msg: "Vous êtes désormais connecté !"
      });
    
    } catch (errors) {
    /*  notificationCenter.notify({
        msg: "Aucun compte ne possède cette adresse email ou alors les informations ne correspondent pas !"
      });*/
      errors(
        "Aucun compte ne possède cette adresse email ou alors les informations ne correspondent pas !"
      );
    }
        
        console.dir("salut" , values  );
      },

   //Pour 2ème graphql
    /* async onSubmit(values) {
         // Call to the graphql mutation
      
        console.log(values)
         await this.$apollo.mutate({
          mutation: gql`
            mutation ( $email: String!, $password: String!) {
               login(email:$email, password: $password)
                {token}
                }
          `,
          variables: {
            email: values.email,
            password: values.password
          }
        });
         
        
      //  e.preventDefault()
        //this.validationSchema(this.values)
            
        console.dir("salut" , values  );
      },   */ // La fin pour graphql
       /* handleSubmit(e) {
         if(this.textarea) return console.log("salut!!!!!");
         e.preventDefault();
          console.log("salut" + e);
          this.onSubmit()
        }, */
        
    },
  };
</script>