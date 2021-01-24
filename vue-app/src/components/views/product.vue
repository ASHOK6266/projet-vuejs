<template>
  <div>
    <h1>This is from product route</h1>
      <ProductsList></ProductsList>
  </div>
</template>

<script>

import ProductsList from '../template/ProductsList.vue';

export default {
  name: "product",
  components: {
    ProductsList,
  }
}
</script>