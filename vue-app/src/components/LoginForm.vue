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
import gql from 'graphql-tag'
import * as Yup from "yup";
  import  Vuemik from './Vuemik.vue';
  import Field from './Field.vue';

  export default {
    name: 'LoginForm',
    components: {
      Vuemik,
      Field,
    },
    computed: {
     
        initialValues: ()=>( {
         
          email: 'email',
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
                /*axios({
          method: 'post',
          url: process.env.VUE_APP_API_URL + '/users',
          data: {
            [...]
          )
        })
        .then(() => {
          [...]
        })
        .catch((erreur) => {
          [...]
        });   */
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