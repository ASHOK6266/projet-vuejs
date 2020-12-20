<template>
    <Vuemik
            :initialValues="initialValues"
            :onSubmit="onSubmit"
            v-slot:default="{ handleSubmit }"
    >

        <Field name="select" component="select">
            <option value="1">Choice 1</option>
            <option value="2">Choice 2</option>
        </Field>
        <Field name="textarea" component="textarea" />
        <Field name="checkbox" component="input" type="checkbox" />
        <Field name="text" component="input" type="text" />
        <Field name="number" component="input" type="number" />
        <Field name="password" component="input" type="password" />
        <Field name="submit" component="button" type="submit" @click="handleSubmit" ></Field>

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
                    checkbox: false,
                    number: 12,
                    motdepasse: 'password',
                    textarea: 'salut'
                }
            };
        },
        methods: {
            onSubmit: (e) => {
                console.log(e);
            },
            handleSubmit(e) {
                if(this.textarea) return console.log("salut!!!!!");
                e.preventDefault();
            },
        },
    };
</script>