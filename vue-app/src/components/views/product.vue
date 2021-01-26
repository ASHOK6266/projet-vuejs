<template>
    <div class="container py-5 my-5 mx-auto border">
        <div class="row">
            <div class="col-md-5">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Image item" width="400" height="400">
            </div>
            <div class="col-md-7">
                <h3 class="h1">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                <h5 class="text-secondary">Fourniture</h5>
                <hr>
                <h2 class="h2">109.95 €</h2>
                <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                <a href="#" class="btn btn-raised btn-primary">Acheter</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    product: {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }
}
</script>

<!-- 
  <template>
    <div class="container py-5 my-5 mx-auto border" v-if="loaded">
        <div class="row">
            <div class="col-md-5">
                <img :src=product.image  alt="Image item" width="400" height="400">
            </div>
            <div class="col-md-7">
                <h3 class="h1">{{product.name}}</h3>
                <h5 class="text-secondary">Fourniture</h5>
                <hr>
                <h2 class="h2">109.95 €</h2>
                <p>{{product.description.substring(0,100)+".." }}</p>
                <a href="#" class="btn btn-raised btn-primary">Acheter</a>
            </div>
        </div>
    </div>
</template>
<script>

import ProductsAPI from '../../services/productsAPI'
//import Pagination from './Pagination.vue'

export default {
  name: 'ProductsList',
   inject: ['prodId'],
   data (){
      return {
        loaded: false,
        product: "",
      /*  paginated: Pagination.getData(
          this.filteredCustomers,
          this.currentPage,
          this.itemsPerPage
        ),*/
      }
    },
     async created() {
      const prod = await ProductsAPI.find(this.prodId) ;
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
        this.product = prod
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


<script>
export default {
    product: {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }
}
</script>
-->