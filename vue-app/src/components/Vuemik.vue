<template>
    <div >
        <slot :handleSubmit="handleSubmit">
        </slot>
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
                /*var currEvent = event.type
                 console.log(currEvent);*/
                return this.$data.values = event.target.value


            },
            handleSubmit() {
                this.onSubmit(this.values);
            },
        },
        // pour passer des données à des composants enfants, ici on les expose avec "provide" puis on les récupère avec "inject" depuis l'enfant
        // https://v3.vuejs.org/guide/component-provide-inject.html
        provide() {
            return{        values: this.values,
                onChange: this.handleChange
            };
        },
    }
</script>