<template>
    <div >
        <form>
        <slot :handleSubmit="handleSubmit">
        </slot>
        </form>
    </div>
</template>

<script>

export default {
    name: "Vuemik",
    props: {
        initialValues: {
            required: true,
            type : Object,
        },
        onSubmit: {
            required: true,
            type : Function,
        },
    },
    data() {
        return {
            values: this.initialValues,
        };
    },
    methods: {

        handleChange(event) { // fonction qui est appelée à chaque fois que la valeur d'un champ change
            // va récupérer la valeur du champ par l'intermédiaire du paramètre event et met à jour la valeur dans this.values
        event.preventDefault();
             /*var currEvent = event.type;
              console.log(currEvent);  var x = ducument.getElementByName("input").value*/
                const { value } = event.target;
                //this.values = value;
                var x = value;
            console.table("You selected: " + x)
           return this.values = value
                 //return this.$data.values = event.target.value
       
            
        },
        
        handleSubmit( ) {
            console.table(this.values)
            this.onSubmit(this.values) 
        }
    },
    // pour passer des données à des composants enfants, ici on les expose avec "provide" puis on les récupère avec "inject" depuis l'enfant
    // https://v3.vuejs.org/guide/component-provide-inject.html
    provide() {
    return{        values: this.values,
        onChange: this.handleChange,
        submit: this.onSubmit
    };
    },
}
</script>