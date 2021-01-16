<template>
<div id="app">
  <Navbar></Navbar>

  <transition name="slide" mode="out-in">
  <router-view />
  </transition>
<<<<<<< HEAD
=======
  <Footer></Footer>
>>>>>>> mehdi

</div>
</template>

<script>
<<<<<<< HEAD


export default {
  name: 'App',
 
=======
import Navbar from "./components/views/Navbar.vue"
import Footer from "./components/views/Footer.vue"
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
>>>>>>> mehdi
}
</script>
<style>
@import "assets/css/style.css";
#app {
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

