<template>
  <div v-if="loaded">
    <div class="container" v-for="product in products" v-bind:key="product.id">
      <div class="d-flex flex-row ml-3 mb-3" >
        <!-- offer 01 -->
        <div class="col-lg-12">
          <div class="trending-ads-slide">
            <div class="col-sm-12 col-lg-4">
              <!-- product card -->
              <div class="product-item bg-light">
                <div class="card" >
                  <div class="thumb-content">
                    <!-- <div class="price">$200</div> -->
                    <a href="#"> <!-- Faire son routeur avec routeur link -->
                      <img class="card-img-top img-fluid" :src=product.image alt="Card image cap">
                    </a>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title"><a href="#">{{product.name}}</a></h4>
                    <ul class="list-inline product-meta">
                      <li class="list-inline-item">
                        <a href="single.html"><i class="fa fa-folder-open-o"></i>Furnitures</a>
                      </li>
                      <li class="list-inline-item">
                        <a href="#"><i class="fa fa-calendar"></i>26th December</a>
                      </li>
                    </ul>
                    <p class="card-text">{{product.description}}</p>
                    <div class="product-ratings">
                      <ul class="list-inline">
                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import ProductsAPI from '../../services/productsAPI'

export default {
  name: 'ProductsList',
  /*props: {
    products: Array,
  },*/
   data (){
      return {
        loaded: false,
        products: "",
      }
    },
     async created() {
      const prod = await ProductsAPI.findAll() ;
      if (prod){
        console.log(prod)
        this.products = prod
        this.loaded = true;
      }
    },

}
</script>
<style>
.col-lg-4 {
  float: left;
}
</style>
