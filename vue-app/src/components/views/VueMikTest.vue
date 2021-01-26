<template>
  <Vuemik
    :initialValues="initialValues"
    :onSubmit="onSubmit"
  >
   <template v-slot:default="{ handleSubmit }">
    <Field name="select" component="select">
      <option value="1">Choice 1</option>
      <option value="2">Choice 2</option>
    </Field>
    <Field name="textarea" component="textarea" type="textarea"  /> 
    <Field name="checkbox" component="input" type="checkbox" /> 
    <Field name="text" component="input" type="text" /> 
    <Field name="number" component="input" type="number" /> 
    <Field name="password" component="input" type="password" /> 
    <Field name="submit" component="input" type="submit" @click.prevent="handleSubmit" />
    <!--<button @click="handleSubmit">Envoyer </button>-->
    
   </template>
  </Vuemik>
</template>

<script>
  import  Vuemik from '../Vuemik.vue';
  import Field from '../Field.vue';

  export default {
    name: 'AppVuemik',
    components: {
      Vuemik,
      Field,
    },
    data() {
      return { 
        initialValues: {
          select: 1,
          input: 'test',
          checkbox: true,
          number: 12,
          text: 'password',
          textarea1: 'salut',
          password: 'mojedldl',
        }
    };
    },
    methods: {
      onSubmit(e) {
        e.preventDefault()
        console.dir("salut" + e);
      },
        handleSubmit(e) {
         /*if(this.textarea) return console.log("salut!!!!!");
         e.preventDefault();*/
          console.log("salut" + e);
             alert("moi")
          this.onSubmit()
        },
    },
  };
</script>