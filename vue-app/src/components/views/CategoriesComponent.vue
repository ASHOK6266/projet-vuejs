<template>
  <div>
    <h1>La liste de toute nos catégories !</h1>
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