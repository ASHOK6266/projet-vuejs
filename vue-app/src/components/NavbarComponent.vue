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
   <div class="modal" id="myModal">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-body">
           <form action="" id="" class="form-inline">
             <div class="form-group mx-sm-3 mb-2">
               <input type="text" class="form-control" placeholder="email">
             </div>
             <div class="form-group mx-sm-3 mb-2">
               <input type="password" class="form-control" id="inputPassword2" placeholder="password">
             </div>
             <div class="form-group">
               <button>submit</button>
             </div>
              <p>Do not have an account? <a href="" v-on="register()">Register</a></p>
           </form>
         </div>
       </div>
     </div>
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
      alert("Register form is clicked");
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
.sign-in a{
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
