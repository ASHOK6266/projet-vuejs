import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '../App.vue'
import Login from '../components/views/Login.vue'
import LoginForm from '../components/LoginForm.vue'
import Apollo from "../components/views/Apollo.vue"
import Product from '@/components/views/product.vue'
import Register from '../components/views/Register.vue'
import AppVuemik from '../components/views/VueMikTest.vue'
import Registration from '../components/RegistrationForm.vue'
import TemplateIndexPage from '../components/template/IndexPage.vue'
import TemplateCategoriesPage from '../components/template/CategoriesComponent'
import TrendingComponent from '../components/TrendingComponent.vue'
import Admin from '../components/Admin.vue';
import UpdateUser from '../components/UpdateUserForm.vue'
import CategoryForm from '../components/CategoryForm.vue';
import CategorieProducts from "@/components/CategorieProducts";

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
        path: "/categorieproducts",
        component: CategorieProducts
    },
    {
        path: "/category",
        component: CategoryForm,
    },
    {
        path: "/app",
        component: App,
    },
    {
        path: "/list",
        component: TrendingComponent,
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
        path: "/login1",
        component: Login
    },
    {
        path: "/admin",
        component: Admin
    },
    {
        path: "/login",
        component: LoginForm
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
        path: "/update",
        component: UpdateUser
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
