import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/components/views/product.vue'
import Register from '../components/forms/Register.vue'
import Login from '../components/views/Login.vue'
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
    },
    {
        path: "/login",
        component: Login
    }
]

const router = new VueRouter({
    mode:"history",
    routes,
  });


export default router;
