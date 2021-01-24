<template>
<div id="app">
  <Navbar></Navbar>

  <transition name="slide" mode="out-in">
  <router-view />
  </transition>
  <Footer></Footer>

</div>
</template>

<script>
import Navbar from "./components/views/Navbar.vue"
import Footer from "./components/views/Footer.vue"
import AuthAPI from './services/authAPI';
 AuthAPI.setup(); // Pour vérifier notre token
//const setAuth =  AuthAPI.isAuthenticated();
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  /*props: {
    isAuthenticated: {
      required: true,
      type: Boolean,
      default: false
    }
  },*/
    data() {
        return {
            isAuthenticated: AuthAPI.isAuthenticated(),
          
        };
    },
  computed: {
     
        // isAuthenticated: function() { return this.isAuthentica}
        auth() {
          return this.$data.isAuthenticated
        } 
    },
  
  methods: {
    setIsAuthenticated(ress) {
      this.isAuthenticated = ress 
      AuthAPI.isAuthenticated()
    }
  },
   provide () {
        return {
           // setIsAuthenticated: this.sharedState
             //setIsAuthenticated: Vue.computed(() => this.isAuthenticated)
             setIsAuthenticated: this.setIsAuthenticated,
             isAuthenticated: this.auth
        }
    },
}

</script>
<style>
@import "assets/css/style.css";
#app {
  background: #202329;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.sli-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}
.sli-enter-active,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}
</style>

