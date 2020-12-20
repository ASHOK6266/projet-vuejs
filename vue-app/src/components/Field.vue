<template>
    <div>
        <div>
            <component v-bind:is="component" v-bind:name="name" v-bind:options="options" v-bind:type="type"
                       v-for="val in values" :key="val.id" :value="val.value"  v-on:onChange="myFunction()" > {{val}}
                <!-- <textarea component="textarea" :value="values" @input="$emit('input', $event.target.value)" v-on:change="onChange()" rows="10" cols="50"></textarea>
                <select component="select" :value="values" @input="$emit('input', $event.target.value)" v-on:change="onChange()" />
                    <input v-bind="props" v-bind:name="name" v-bind:options="options" v-bind:type="type" v-bind:component="component"
                    :value="values" v-on:change="onChange()" v-on:input="$emit('input', $event.target.value)"/>
                    <slot name="template" v-bind="props" ou v-bind="$attrs"   :value="values"  v-on:input="onChange">{{values}}</slot>
                    v-for="name in values" :key="name.id"-->


            </component>
        </div>
    </div>
</template>
<script>
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
            myFunction() {
                var x = document.getElementById("component").value;
                alert("You selected: " + x)

            },

        },
        inject: ['values', 'onChange'] // on récupère ce qui nous intéresse dans le provide du parent
    }
</script>