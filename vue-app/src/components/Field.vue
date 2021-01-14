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
            -->
            <component    v-bind:is="component" 
            v-bind:name="name" 
            v-bind:options="options" 
            v-bind:type="type"
             :value="values[name]" 
              v-on:input="onChange($event)"  >  
              <slot> </slot>
                   
            <!-- <textarea component="textarea" :value="values" @input="$emit('input', $event.target.value)" v-on:change="onChange()" rows="10" cols="50"></textarea>
            <select component="select" :value="values" @input="$emit('input', $event.target.value)" v-on:change="onChange()" />
                <input v-bind="props" v-bind:name="name" v-bind:options="options" v-bind:type="type" v-bind:component="component" 
                :value="values" v-on:change="onChange()" v-on:input="$emit('input', $event.target.value)"/> 
                <slot name="template" v-bind="props" ou v-bind="$attrs"   :value="values"  v-on:input="onChange">{{values}}</slot>
                v-for="name in values" :key="name.id"
                  v-on:input="onChange($event)
                  v-on:input="onChange((event) => this.$emit('inputChange', event))"
                -->

                
            </component>
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
            required: false,
            type: String,
        },
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
    inject: ['values', 'onChange'] // on récupère ce qui nous intéresse dans le provide du parent
}
</script>