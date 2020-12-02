import Vue from 'vue'
import VueRouter from "vue-router"
import Product from '@/components/views/product.vue'
import Register from '../components/forms/Register.vue'
import Login from '@/components/forms/login.vue'
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
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    }
]

export const router = new VueRouter({
    routes,
  });


