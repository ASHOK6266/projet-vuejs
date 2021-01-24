<template>
  <Vuemik
    :initialValues="initialValues"
    :onSubmit="onSubmit"
    :validationSchema="validationSchema"
  >
   <template v-slot:default="{ handleSubmit }" class="p-4" v-if="loaded">
    
     <Field name="name" component="input" label="Le nom du produit" type="text" class="border p-3 w-100 my-2" /> 
    <Field name="price" component="input" label="Le prix" type="number" class="border p-3 w-100 my-2" /> 
    <Field name="countInStock" component="input" label="la qtte" type="number" class="border p-3 w-100 my-2" /> 
    <Field name="reference" component="input" label="La reference" type="text" class="border p-3 w-100 my-2" /> 
     <Field name="image" component="input" label="L'image" type="url" class="border p-3 w-100 my-2" /> 
    <Field name="description" label="La description du produit" component="textarea" type="textarea" class="border p-3 w-100 my-2"  />

    <Field name="category" label="Les catégories" component="select" class="border p-3 w-100 my-2"> <!-- type="select"  -->
      <option  v-for="categor in categories" :key="categor.id" :value="categor.id"> <!-- value="" :value="categor.name"-->
        {{categor.name}}

      </option>
    </Field>
     <button @click="handleSubmit" class="d-block py-3 px-4 bg-primary text-white border-0 rounded font-weight-bold">Créer </button>
    
   </template>
  </Vuemik>
</template>

<script>
import CategoriesAPI from '../services/categoriesAPI'
import ProductsAPI from '../services/productsAPI'
import * as Yup from "yup";
  import  Vuemik from './Vuemik.vue';
  import Field from './Field.vue';
 

// const cat = CategoriesAPI.findAll() ;//Pour recup les catégories
  
  export default {
    name: 'ProductForm',
    components: {
      Vuemik,
      Field,
    },
     data (){
      return {
        loaded: false,
        categories: "",
      }
    },
     computed:{
        initialValues: ()=>( {
          name: '',
          price: 0,
          countInStock:0,
          image:'',
          reference: '',
          category: '',
          description: "",
        
    }), 
   /* categories: function() {
     return   console.log(cat) 
     //Pour recup les catégories
      },*/
     validationSchema: () => {
      return Yup.object().shape({
        category: Yup.string()
          .required("Required"),
        description: Yup.string()
          .notRequired("Required"),
        name: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        reference: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Required"),
        price: Yup.number()
          .required("Required"),
        countInStock: Yup.number()
          .required("Required"),
        image: Yup.string().url("Invalid email").notRequired("Required"),
      })
    },

    },
    async created() {
      const cat = await CategoriesAPI.findAll() ;
      if (cat){
        this.categories = cat
        this.loaded = true;
      }
    },
    methods: {
      // mutation {signup(name: "moi",  email: "moi@gmail.com", password: "password"){token, user{password}}} 
      //mutation {signup(firstName, lastName,  email, password){token, user{password}}}
      
   
     async onSubmit(values) {
       await ProductsAPI.create(values);
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
