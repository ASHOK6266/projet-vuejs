<template>
    <div>
        <section class="hero-area bg-1 text-center overly">
            <!-- Container Start -->
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <!-- Header Contetnt -->
                        <div class="content-block">
                            <h1>Acheter et vendre près de chez vous</h1>
                            <p>
                                Rejoignez les millions de personnes qui achètent et vendent <br> chaque jour dans les
                                communautés locales du monde entier
                            </p>
                        </div>
                        <!-- Advance Search
                          todo : make search work
                        -->
                        <div class="advance-search">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-12 col-md-12 align-content-center">
                                        <form>
                                            <div class="form-row">
                                                <div class="form-group col-md-4">
                                                    <input type="text" class="form-control my-2 my-lg-1" id="inputtext4" placeholder="Que recherchez-vous ?">
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <select class="w-100 form-control mt-lg-1 mt-md-2">
                                                        <option>Category</option>
                                                        <option value="1">Top rated</option>
                                                        <option value="2">Lowest Price</option>
                                                        <option value="4">Highest Price</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <input type="text" class="form-control my-2 my-lg-1" id="inputLocation4" placeholder="Lieu">
                                                </div>
                                                <div class="form-group col-md-2 align-self-center">
                                                    <button type="submit" class="btn btn-primary">Rechercher</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container End -->
        </section>

        <!--===========================================
        =            Popular deals section            =
        ============================================-->

        <section class="popular-deals section bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="section-title">
                            <h2>Nos produits</h2>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <!-- offer 01 -->
                    <div class="col-lg-12">
                        <template>
                            <div v-if="loaded">
                                <div class="container" v-for="product in products" v-bind:key="product.id">
                                    <div class="d-flex flex-row ml-3 mb-3" >
                                        <!-- offer 01 -->
                                        <div class="col-lg-12">
                                            <div class="trending-ads-slide">
                                                <div class="col-sm-12 col-lg-4">
                                                    <!-- product card -->
                                                    <div class="product-item bg-light">
                                                        <div class="card" >
                                                            <div class="thumb-content">
                                                                <!-- <div class="price">$200</div> -->
                                                                <a href="#"> <!-- Faire son routeur avec routeur link -->
                                                                    <img class="card-img-top img-fluid" :src=product.image alt="Card image cap">
                                                                </a>
                                                            </div>
                                                            <div class="card-body">
                                                                <h4 class="card-title"><a href="#">{{product.name}}</a></h4>
                                                                <ul class="list-inline product-meta">
                                                                    <li class="list-inline-item">
                                                                        <a href="single.html"><i class="fa fa-folder-open-o"></i>Furnitures</a>
                                                                    </li>
                                                                    <li class="list-inline-item">
                                                                        <a href="#"><i class="fa fa-calendar"></i>26th December</a>
                                                                    </li>
                                                                </ul>
                                                                <p class="card-text">{{product.description}}</p>
                                                                <div class="product-ratings">
                                                                    <ul class="list-inline">
                                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                                        <li class="list-inline-item selected"><i class="fa fa-star"></i></li>
                                                                        <li class="list-inline-item"><i class="fa fa-star"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>
<script>

import ProductsAPI from "@/services/productsAPI";

export default {
    name: 'template-index-page',
    produit: 'ProductsList',
    data (){
        return {
            loaded: false,
            products: "",
        }
    },
    async created() {
        const prod = await ProductsAPI.findAll() ;
        if (prod){
            console.log(prod)
            this.products = prod
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
