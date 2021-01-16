<!-- il reste des choses à faire dans le template : 
    - utiliser les props
    - utiliser ce qu'on a inject
        - onChange() doit être appelé à chaque fois qu'il y a une modification de la valeur du champ
        - values va servir à initialiser la valeur du champ, il faut aller chercher la valeur dans cet objet
-->
<!-- https://vuejs.org/v2/guide/components-dynamic-async.html -->
<template>
    <!--<ul>  <div>
      
           <li v-for="val in values" :key="val.id">
               <
            -->
            <div>
                <p >  {{ errors[name]}} </p>
            <component    v-bind:is="component" 
                v-bind="$attrs"
                v-bind:name="name" 
                v-bind:options="options" 
                v-bind:type="type"
                :value="values[name]" 
                v-bind:checked="values[name]"
                @blur="validate(name)"
                
                @input="onChange" 
               
            >  
              <slot> {{ component== "textarea" ? values[name]: undefined}}</slot>
                   
            <!-- <textarea component="textarea" :value="values" @input="$emit('input', $event.target.value)" v-on:change="onChange()" rows="10" cols="50"></textarea>
            <select component="select" :value="values" @input="$emit('input', $event.target.value)" v-on:change="onChange()" />
                <input v-bind="props" v-bind:name="name" v-bind:options="options" v-bind:type="type" v-bind:component="component" 
                :value="values" v-on:change="onChange()" v-on:input="$emit('input', $event.target.value)"/> 
                <slot name="template" v-bind="props" ou v-bind="$attrs"   :value="values"  v-on:input="onChange">{{values}}</slot>
                v-for="name in values" :key="name.id"
                  v-on:input="onChange($event)
                  v-on:input="onChange((event) => this.$emit('inputChange', event))"
    
      @keypress="validate(values['nom', 'prenom', 'email'])"
                
                -->

                
            </component>

                
           
            </div>
          <!-- </li>
        </ul>
    </div> -->
</template>
<script>
//import Vuemik from './Vuemik.vue'
export default {
    name: "Field",
    props: {
        type: {
            required: false,
            type: String,
        },
        name: {
            required: true,
            type: String,
        },
        /*
        class: {
            required: false,
            type: String,
        },
        validate: {
            required: false,
            type: String,
        },
         error: {
            required: true,
            type: Object,
        },*/
        component: {
            required: false,
            type: String,
        },
        options: {
            required: false,
            type: Array,
            default: () => []
        }
    },
    data(){
      return {
          error:undefined
      }  
    },
    methods: {
        val(){
            return console.log(Object.keys(this.values))
            },
         myFunction(event) {
            /* event.preventDefault();
            var x = document.getElementsByName("input").value;*/
            var x = event.target.value;
            alert("You selected: " + x)
            
            },
        
    },
    watch: {
        errors:{deep:true, handler(val){ this.error = val[this.name]}}
    },
   
    inject: ['values', 'onChange', 'validate', 'errors'] // on récupère ce qui nous intéresse dans le provide du parent
}
</script>