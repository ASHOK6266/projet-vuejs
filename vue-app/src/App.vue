<template>
<div id="app">
  <navbarComponent />
  <caroselComponent />
  <index-page />
  <trendingComponent />
  <router-link to="/login">x</router-link>
</div>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue'
import IndexPage from '@/components/IndexPage.vue'
import caroselComponent from '@/components/CaroselComponent.vue'
import TrendingComponent from '@/components/TrendingComponent.vue'

export default {
  name: 'App',
  components: {
    IndexPage,
    caroselComponent,
    NavbarComponent,  
    TrendingComponent,
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
}
</style>





