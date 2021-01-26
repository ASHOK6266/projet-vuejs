<template>
  <div v-if="loaded">
    <div class="container" >

         <!-- Advance Search
              todo : make search work
            -->
            <div class="advance-search">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-12 col-md-12 align-content-center">
                    <form>
                      <div class="form-row">
                        <div class="form-group col-md-4">
                          <input type="text" class="form-control my-2 my-lg-1" id="inputtext4" placeholder="What are you looking for">
                        </div>
                        <div class="form-group col-md-3">
                          <select class="w-100 form-control mt-lg-1 mt-md-2">

                            <option>Category</option>
                            <option value="1">Top rated</option>
                            <option value="2">Lowest Price</option>
                            <option value="4">Highest Price</option>
                          </select>
                        </div>
                        <div class="form-group col-md-3">
                          <input type="text" class="form-control my-2 my-lg-1" id="inputLocation4" placeholder="Location">
                        </div>
                        <div class="form-group col-md-2 align-self-center">
                          <button type="submit" class="btn btn-primary">Search Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>



      <div class="row" >
     <!-- <div class="d-flex flex-row ml-3 mb-3" >-->
        <!-- offer 01 -->
        <div class="col-lg-12">
          <div class="trending-ads-slide">
            <div class="col-sm-12 col-lg-4 " v-for="product in products" v-bind:key="product.id">
              <!-- product card -->
              <div class="product-item bg-light">
                <div class="card"  >
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
                    <p class="card-text">{{product.description.substring(0,100)+".." }}</p>
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
     <!-- <Pagination
        currentPage=1
        itemsPerPage=10
        length="products.length"
        @onPageChanged="onPageChanged"
      /> -->
  </div>
</template>
<script>

import ProductsAPI from '../../services/productsAPI'
//import Pagination from './Pagination.vue'

export default {
  name: 'ProductsList',
   components: {
  //  Pagination,
  },
  /*props: {
    products: Array,
  },*/
   data (){
      return {
        loaded: false,
        products: "",
      /*  paginated: Pagination.getData(
          this.filteredCustomers,
          this.currentPage,
          this.itemsPerPage
        ),*/
      }
    },
     async created() {
      const prod = await ProductsAPI.findAll() ;
       /*const paginate = Pagination.getData(
          this.filteredCustomers,
          this.currentPage,
          this.itemsPerPage
        );
        if(paginate){
          this.paginated = paginate
        }*/
      if (prod){
        console.log(prod)
        this.products = prod
        this.loaded = true;
      }
    },
    methods: {
    /*  onPageChanged(page){
        console.log(page)
      }*/
    },

}
</script>
<style>
.col-lg-4 {
  float: left;
}
</style>
