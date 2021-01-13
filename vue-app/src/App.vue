<template>
<div id="app">
  <nav>
    <router-link to="/login">login</router-link><br>
    <router-link to="/register">Register</router-link> <br>
      <router-link to="/apollo">Categories avec Apollo</router-link><br>
      <router-link to="/vuemik">Vuemik test</router-link>
  </nav>
  <transition name="slide" mode="out-in">
  <router-view />
  </transition>
  <navbarComponent />

</div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  name: 'App',
  components: {
    NavbarComponent,  
  },
}
</script>

<style>
/* GLOBAL STYLING */
#app {
  background: #202329;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

