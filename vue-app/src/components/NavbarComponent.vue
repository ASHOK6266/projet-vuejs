<template>

 <div id="nav-bar">
   <div class="bootstrap_navbar">
    <nav class="navbar nav_bar_bg">
    <!-- Navbar content -->
    <a class="navbar-brand f-color" href="#">Mantradeal</a>
    <div class="bootstrap_form">
      <form action="" class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
    <div class="cart">
      <a class="f-color" href="#">Cart</a>
    </div>
    <div class="sign-in">
      <button class="btn btn-dark my-2 my-sm-0" v-on:click="myButton()">Sign in</button>
    </div>
    </nav>
   </div>

 </div>

</template>
 
<script>

export default {
  name: 'navbarComponent',
  form: true,
  props: {
    products: Array,
    data:{
    message: 'Sign in button clicked',
    }
  },
  methods: {
    myButton() {
      var x = document.getElementById("myModal");
      if(x.style.display === "none"){
        x.style.display = "block";
      }else{
        x.style.display = "none";
      }
    },
    register(){
      console.log("Register form is clicked");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_bar_bg
{
  background-color:#67d1a4;
}
.f-color{
  color: white;
}
h3 {
  margin: 0px;
  color: white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input{
  width: 50%;
}
.sign-in a{
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
