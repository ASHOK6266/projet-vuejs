<template>
  <Vuemik
    :initialValues="initialValues"
    :onSubmit="onSubmit"
    :validationSchema="validationSchema"
  >
   <template v-slot:default="{ handleSubmit }" class="p-4">
    <Field name="role" component="select" class="border p-3 w-100 my-2">
      <option value="1">Admin</option>
      <option value="2">Vendeur </option>
      <option value="3">Client </option>
    </Field>
    <!--<Field name="description" component="textarea" class="border p-3 w-100 my-2" ></Field> -->
     <Field name="email" component="input" label="Mail" type="email" class="border p-3 w-100 my-2" /> 
    <Field name="firstName" component="input" label="Prénom" type="text" class="border p-3 w-100 my-2" /> 
    <Field name="lastName" component="input" label="Nom" type="text" class="border p-3 w-100 my-2" /> 
    <Field name="password" component="input" label="Mot de passe" type="password" class="border p-3 w-100 my-2" /> 
    <!--  <Field name="submit" component="input" type="submit" @click.prevent="handleSubmit" />-->
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
    name: 'Registration',
    components: {
      Vuemik,
      Field,
    },
    computed: {
     
        initialValues: ()=>( {
          role: '3',
          lastName: 'Nom',
          firstName: 'Prénom',
          email: 'email',
          //description: "Descriptonlldl",
          password: 'password',
        
    }),
     validationSchema: () => {
      return Yup.object().shape({
         role: Yup.string()
          .notRequired("Required"),
         password: Yup.string()
          .min(8, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        firstName: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        lastName: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
      });
    },

    },
    methods: {
      // mutation {signup(name: "moi",  email: "moi@gmail.com", password: "password"){token, user{password}}} 
      //mutation {signup(firstName, lastName,  email, password){token, user{password}}}
      
   
     async onSubmit(values) {
         // Call to the graphql mutation
        let mutation;
        console.log(values)

        if (values.role === "3") {
          mutation = gql`
            mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
              signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: USER) {
                token,
                user {
                  password
                }
              }
            }
          `
        } else if (values.role === "1") {
          
          mutation = gql`
            mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String! ) {
              signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: ADMIN) {
                token,
                user {
                  password
                }
              }
            }
          `
        } else if (values.role === "2") {
          
          mutation = gql`
            mutation ($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
              signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: SELLER) {
                token,
                user {
                  password
                }
              }
            }
          `
        }

        await this.$apollo.mutate({
          mutation,
          variables: {
            firstName: values.firstName,
            lastName: values.lastName,
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
        //location.reload();
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