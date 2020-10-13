<template>
 <div id="index-page">

   <div class="container">
     <div class="card" style="width: 18rem;" v-for:="product in products">
       <div class="col-md-4 px-0">
         <img class="card-img-top" :src=product.imgUrl alt="Card image cap">
       </div>
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">{{product.price}}</p>
      </div>
    </div>
   </div>


  </div>
</template>

<script>
export default {
  name: 'index-page',
  props: {
    products: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
