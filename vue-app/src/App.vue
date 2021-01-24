<template>
    <div id="app">
        <Navbar></Navbar>
        <transition name="slide" mode="out-in"><router-view/></transition>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from "./components/views/Navbar.vue"
import Footer from "./components/views/Footer.vue"

export default {
    name: 'App',
    components: {
        Navbar,
        Footer
    },
}
</script>

<style>
@import "assets/css/style.css";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    color: black;
}

.sli-enter-active,
.slide-leave-active {
    transition: opacity 1s, transform 1s;
}

.sli-enter-active,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
}
</style>

