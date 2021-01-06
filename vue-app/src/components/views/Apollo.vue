<template>
     <div>
      <h2>Les catégories Apollo</h2>
        <div class="container">
          <div class="row">
              <div class="card" style="width: 17rem;" v-for="category of categories" :key="category">
              
               <!-- <div class="col-md-4 px-0 mx-auto d-block">
                    <img class="card-img-top" :src=category.image alt="Card image cap">
                </div> -->
                <h6>{{category.id}}</h6>  
                <p>{{category.name}}</p>
                
              
            </div>
          </div>
        </div>
  </div>
</template>

<script> 
import gql from 'graphql-tag'
 export default {
   name: "categoriesApollo",
   data: () => ({
      categories: {},
    }),
    apollo: {
      categories: {
        query: gql`query getCategories{
            categories{id,
  name}
        }`,
        loadingKey: 'loading',
      }
    }
 }
</script> 