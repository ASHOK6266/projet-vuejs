<template>

<div class="carosel">
    <div id="carosel-component">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" v-for="img in images" :key="img">
    <div class="carousel-inner">
      <div class="carousel-item">
        <img :src=img.image class="d-block w-100" alt="carousel images">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    </div>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'carosel-component',
data(){
    return{
      images:[
        {
          "id":1,
          "image":"https://i.insider.com/5cee98df11e2050eb152aa24?width=1200&format=jpeg"
        },
        {
          "id":2,
          "image": "https://www.runpacers.com/wp/wp-content/uploads/2016/09/SauconyISO3andGuide10-BlogHeader-1200x600.jpg"
        },
        {
          "id":3,
          "image":"https://i.pinimg.com/originals/61/11/6a/61116a013092d217b6094189ee9db201.jpg"
        }
      ]
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
