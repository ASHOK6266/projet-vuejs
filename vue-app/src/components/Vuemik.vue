<template>
    <div >
     
          <slot :handleSubmit="handleSubmit" method="post">
        </slot>
        
    </div>
</template>

<script>
/*import { object, string } from "yup";
const loginFormSchema = object().shape({
    description: string().min(2, "Too Short!")
          .max(50, "Too Long!").required(),
  email: string().required().email(),
  password: string().min(8, "Trop court au moins 8 caractères !").required(),
}); */
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
       validationSchema: {
            required: false,
            type : Object,
        }, 
    },
    
    data() {
        return {
            values: this.initialValues,
            
            errors: {},
        };
    },
    methods: {
         validate(field) {
     this.validationSchema
        .validateAt(field, this.values)
        .then(() => {
          this.errors[field] = "";
        })
        .catch(err => {
          this.errors[field] = err.message;
        });
    },

        handleChange(event) { // fonction qui est appelée à chaque fois que la valeur d'un champ change
            // va récupérer la valeur du champ par l'intermédiaire du paramètre event et met à jour la valeur dans this.values
       // event.preventDefault();
             /*var currEvent = event.type;
              console.log(currEvent);  var x = ducument.getElementByName("input").value*/
                const { value , name } = event.target;
                //this.values = value;
                var x = value;
            console.table("You selected: " + x)
           this.values[name] = value
           this
                 //return this.$data.values = event.target.value
       
            
        },
  
       
        
        handleSubmit( ) {
           this.validationSchema
        .validate(this.values, { abortEarly: false })
        .then(() => {
          this.errors = {};
             this.onSubmit(this.values) 
          // login the user
        })
        .catch(err => {
          err.inner.forEach(error => {
            this.errors[error.path] = error.message;
          });
        });
           
        }
    },
    // pour passer des données à des composants enfants, ici on les expose avec "provide" puis on les récupère avec "inject" depuis l'enfant
    // https://v3.vuejs.org/guide/component-provide-inject.html
    provide() {
    return{        values: this.values,
        onChange: this.handleChange,
       validate: this.validate,
       getError: (name)=>this.errors[name], 
       errors: this.errors,
    };
    },
}
</script>