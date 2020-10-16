<template>

 <div id="nav-bar">
     <!-- NAV BAR -->
     <div class="nav_bar">
         <nav class="navbar navbar-expand-lg">
             <h3>Mantradeal</h3>
             <div class="nav-bar-form ml-4">
                 <form action="" class="form-inline my-2 my-lg-0">
                     <input class="form-control mr-sm-2 w-50" type="search" placeholder="Search products & brands" aria-label="Search">
                     <button class="btn btn-outline btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                     <div>
                       <button class="btn btn-outline btn btn-dark my-2 my-sm-0 float-right" type="submit">Cart</button>
                     </div>
                     <div class="">
                       <p>Sign in <i class="fa fa-user" aria-hidden="true"></i></p>
                     </div>
                 </form>
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
  data: {
    message : ''
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
.nav_bar{
background: #e54448;
}
.nav-bar-form{
  margin: 0%;
  width: 100%;
}
h1{
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
  width: 10%;
}
</style>
