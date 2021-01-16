import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '../App.vue'
import Login from '../components/views/Login.vue'
import Apollo from "../components/views/Apollo.vue"
import Product from '@/components/views/product.vue'
import Register from '../components/views/Register.vue'
import AppVuemik from '../components/views/VueMikTest.vue'
import Registration from '../components/RegistrationForm.vue'
import TemplateIndexPage from '../components/template/IndexPage.vue'
import TemplateCategoriesPage from '../components/template/CategoriesComponent'

Vue.use(VueRouter);


const routes = [
    {
      path: "/",
      component: TemplateIndexPage,
    },
    {
        path: "/categories",
        component: TemplateCategoriesPage,
    },
    {
        path: "/",
        component: App,
    },
    {
        path: "/product",
        component: Product,
    },
    {
        path: "/vuemik",
        component: AppVuemik,
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/apollo",
        component: Apollo
      },
      {
        path: "/registration",
        component: Registration
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
