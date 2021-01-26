<template>
  <div v-if="loaded" id="cat">
    <!--==========================================
    =            All Category Section            =
    ===========================================-->

    <section class=" section">
      <!-- Container Start -->
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Section title -->
            <div class="section-title">
              <h2>La liste de toute nos catégories !</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, provident!</p>
            </div>
            <div class="row" >
              <!-- Category list -->
              <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6" v-for="category in categories" :key="category.id">
                <div class="category-block" >
                  <div class="header" >
                    <i class="fa fa-laptop icon-bg-1"></i>
                    <h4>{{category.name}}</h4>
                  </div>
                  <ul class="category-list" v-for="product in category.products" :key="product.id">
                    
                    <li v-if="[product.length > 6 ? product.length = 6: productlength = 6]" >
                      <a href="#"> {{   product.name }} <span> {{product.price.toLocaleString()}} </span></a>
                    </li> <!-- {{ product.length > 6 ? product.length - 6:  product.name}} v-if="[product.id.length > 6 ? product.id.length = 6: product.id.length = 6]" -->
                   
                  </ul>
                </div>
              </div> <!-- /Category List -->
              <!-- Category list -->
             


            </div>
          </div>
        </div>
      </div>
      <!-- Container End -->
    </section>


  </div>
</template>
<script>
import CategoriesAPI from '../../services/categoriesAPI'
export default {
  name: 'CategoriesList',
  data (){
    return {
      loaded: false,
      categories: "",
    }
  },
    async created() {
    const cat = await CategoriesAPI.findAll() ;
    if (cat){
      console.log(cat)
      this.categories = cat
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