<template>

 <div id="nav-bar">
   <div class="bootstrap_navbar">
    <nav class="navbar nav_bar_bg">
    <!-- Navbar content -->
    <a class="navbar-brand" href="#">Mantradeal</a>
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
      <a class="f-color" href="">Sign in</a>
    </div>
    </nav>
   </div>

 </div>

</template>

<script>
export default {
  name: 'navbarComponent',
  props: {
    products: Array,
  },
  methods:{
    mouseover: function(){
      this.message = 'sign in';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav_bar_bg
{
  background-color: #e54448;
}
.f-color{
  color: white;
}
h3 {
  margin: 10px 0 0;
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
</style>
