<template>
  <div>
      <h2>Les catégories</h2>
        <div class="container">
          <div class="row">
              <div class="card" style="width: 17rem;" v-for="category of categories" :key="category">
              
               <!-- <div class="col-md-4 px-0 mx-auto d-block">
                    <img class="card-img-top" :src=category.image alt="Card image cap">
                </div> -->
                <h6>{{category}}</h6>  
                <p>{{category.name}}</p>
                
              
            </div>
          </div>
        </div>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key="error">
          {{error.message}}
        </li>
      </ul>  
  </div>
</template>

<script>

//const axios = require('axios');
import {HTTP} from '../http-common';


export default {
  name: "ListItem",
  data(){
    return{
        categories: [],
        errors: []
    }
  },
  created() {
    HTTP.get(`categories`)
    .then(response => {
      this.categories = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }


}
</script>
