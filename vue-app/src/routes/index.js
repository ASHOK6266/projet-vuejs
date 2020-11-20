import Vue from 'vue'
import VueRouter from "vue-router";
import Product from '@/components/views/product.vue'
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
    }
]

export const router = new VueRouter({
    mode: "history",
    routes,
  });
