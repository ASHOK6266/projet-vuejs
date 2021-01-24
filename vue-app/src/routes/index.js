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
import CategoriesComponent from '../components/views/CategoriesComponent.vue'
import TrendingComponent from '../components/TrendingComponent.vue'
import Admin from '../components/Admin.vue';
import UpdateUser from '../components/UpdateUserForm.vue'
import CategoryForm from '../components/CategoryForm.vue';
<<<<<<< HEAD
import notificationCenter from "../lib/NotifCenter";
import ProductForm from '../components/ProductForm.vue'
import ProductsList from '../components/template/ProductsList.vue'
=======
import CategorieProducts from "@/components/CategorieProducts";
>>>>>>> 67c26cfca4c78d38b9e637a15841622c6d405654

Vue.use(VueRouter);


const routes = [
    {
      path: "/",
      component: TemplateIndexPage,
    },
    {
        path: "/categories",
        component: CategoriesComponent,
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
      path: "/productsList",
      component: ProductsList,
  },
    {
      path: "/productForm",
      component: ProductForm,
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
        /*meta: {
            private: true,
          },*/
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

  router.beforeEach((to, from, next) => {
    const auth = {
      isLoggued: false,
    };
    if (to.matched.some((route) => route.meta.private) && auth.isLoggued) {
      next({
        path: "/",
        params: {
          id: "redirect",
        },
      });
      notificationCenter.notify({
        msg: "Vous devez être loggué",
        severity: "error",
      });
    }
    next();
  });

export default router;
