<template>
  <div>
    <h1>This is from product route</h1>
      <ListItem></ListItem>
  </div>
</template>

<script>

import ListItem from '../ListItem.vue';

export default {
  name: "product",
  components: {
    ListItem,
  }
}
</script>