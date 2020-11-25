import Vue from 'vue'
import VueRouter from "vue-router";
import Product from '@/components/views/product.vue'
import Register from '../components/forms/Register.vue'
import App from '../App.vue'

Vue.use(VueRouter);


const routes = [
    {
        path: "/",
        component: App,
    },
    {
        path: "/product",
        component: Product,
    },
    {
        path: "/register",
        component: Register
    }
]

export const router = new VueRouter({
    routes,
  });
