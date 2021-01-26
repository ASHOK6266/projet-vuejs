<template>
  <div>
    <h1>Nos différents produits</h1>
      <ProductsList>
      </ProductsList>
    </div>
     <!-- <Pagination
        currentPage="currentPage"
        itemsPerPage="itemsPerPage"
        length="filteredCustomers.length"
        onPageChanged="handlePageChange"
      /> -->

</template>

<script>

import ProductsList from '../template/ProductsList.vue';
//import Pagination from '../template/pagination.vue'

export default {
  name: "product",
  components: {
    ProductsList,
   // Pagination,
  },
  data(){
    return {
    //  currentPage:1,
     // itemsPerPage: 10,
    }
  }
}
</script>