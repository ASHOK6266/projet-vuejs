<template>
  <div>
    <h1>This is from product route</h1>
      <CategoriesList></CategoriesList>
  </div>
</template>

<script>

import CategoriesList from '../template/CategoriesList.vue';

export default {
  name: "CategoriesComponent",
  components: {
    CategoriesList,
  }
}
</script>