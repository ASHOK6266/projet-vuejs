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
        <Field name="email" component="input" type="email" class="border p-3 w-100 my-2" v-bind:value="user.email"/> 
        <Field name="firstName" component="input" type="text" class="border p-3 w-100 my-2" /> 
        <Field name="lastName" component="input" type="text" class="border p-3 w-100 my-2" /> 
        <Field name="password" component="input" type="password" class="border p-3 w-100 my-2" /> 
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
    name: 'UpdateUser',
    components: {
      Vuemik,
      Field,
    },
    computed: {
     
        initialValues: ($apollo)=>( {
      firstName : $apollo.user.firstName,
      lastName : this.$apollo.user.lastName,
      email : this.$apollo.user.email,
      password : this.$apollo.user.password,
      role : this.$apollo.user.role,
        
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
     apollo: {
    me: gql`query {
      user (where:{id:$id}){
        id,
        firstName,
        lastName,
        email,
        role,
        password
      }
    }`,
    },
    methods: {
      // mutation {signup(name: "moi",  email: "moi@gmail.com", password: "password"){token, user{password}}} 
      //mutation {signup(firstName, lastName,  email, password){token, user{password}}}
        async  onSubmit(values) {
         // Call to the graphql mutation
        let mutation;
        //console.log(values)

        if (values.role === "3") {
          mutation = gql`
            mutation ($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
              updateUser(data:{firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: USER}, where:{id:$id}) {
               
                  password
                
              }
            }
          `
        } else if (values.role === "1") {
          
          mutation = gql`
            mutation ($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String! ) {
              updateUser(data:{firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: ADMIN}, where:{id:$id}) {
                
                  password
                
              }
            }
          `
        } else if (values.role === "2") {
          
          mutation = gql`
            mutation ($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
              updateUser(data:{firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: SELLER}, where:{id:$id}) {
                 password 
              }
            }
          `
        }

        await this.$apollo.mutate({
          mutation,
          variables: {
                id: values.id,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password
          }
        });
       console.dir("salut" , values  );
        //location.reload();
      },
   
    
    },
  };
</script>