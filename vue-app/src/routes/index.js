import Vue from 'vue'
import VueRouter from 'vue-router';
import Product from '@/components/views/product.vue'
import Login from '../components/views/Login.vue'
import Register from '../components/views/Register.vue'
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

const router = new VueRouter({
    mode:"history",
    routes,
  });


export default router;
