import Vue from 'vue'
import VueRouter from 'vue-router';
import App from '../App.vue'
import LoginForm from '../components/LoginForm.vue'
import Apollo from "../components/views/Apollo.vue"
import Product from '@/components/views/product.vue'
import Products from '@/components/views/Products.vue'
import AppVuemik from '../components/views/VueMikTest.vue'
import Registration from '../components/RegistrationForm.vue'
import TemplateIndexPage from '../components/template/IndexPage.vue'
import CategoriesComponent from '../components/views/CategoriesComponent.vue'
import TrendingComponent from '../components/TrendingComponent.vue'
import Admin from '../components/Admin.vue';
import UpdateUser from '../components/UpdateUserForm.vue'
import CategoryForm from '../components/CategoryForm.vue';
import notificationCenter from "../lib/NotifCenter";
import ProductForm from '../components/ProductForm.vue'
import ProductsList from '../components/template/ProductsList.vue'

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
        path: "/products/:id",
        component: Product,
    },
    {
      path: "/products",
      component: Products,
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
