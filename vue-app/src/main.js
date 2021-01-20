import Vue from "vue";
import App from './App.vue';
import router from "./routes";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'


// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueApollo)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App)
}).$mount("#app");