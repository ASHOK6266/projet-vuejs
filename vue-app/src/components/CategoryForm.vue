<template>
  <Vuemik
    :initialValues="initialValues"
    :onSubmit="onSubmit"
    :validationSchema="validationSchema"
  >
   <template v-slot:default="{ handleSubmit }" class="p-4">
     <Field name="title" component="input" label="Name" type="email" class="border p-3 w-100 my-2" /> 
   
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
    name: 'CategoryForm',
    components: {
      Vuemik,
      Field,
    },
     apollo: {
    me: gql`query {
      me {
        id,
      }
    }`,
    },
    computed: {
     
        initialValues: ()=>( {
        title: "String",
        
    }),
     validationSchema: () => {
      return Yup.object().shape({
        title: Yup.string()
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
         await this.$apollo.mutate({ 
       
          // Query
          mutation: gql`mutation ($title: String!, $author: ID!)
          {createCategory(data:{title: $title, author:{
              me:{
                  id}
                }	
            }){id ,title}
            }`,
          // Parameters
          variables: {
              title: values.title,
              author: this.$apollo.id,
            
          
          },
        })

        console.dir("salut" , values  );
      },

    },
  };
</script>