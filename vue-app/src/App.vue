<template>
<div id="app">

  <!-- HEADER -->
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar navbar-expand-lg navbar-light navigation">

            <a class="navbar-brand">
                <img src="images/logo.png" alt=""> <!--todo : LOGO HERE -->
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto main-nav ">
                <li class="nav-item active">
                  <a class="nav-link">
                    <router-link to="/index" >
                    Home
                    </router-link>
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link">
                    <router-link to="/categories" >
                      Categories
                    </router-link>
                  </a>
                </li>

                <!-- APIs switch -->
                <li class="nav-item">
                  <a class="nav-link"  href="">Api Platform</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  href="">GraphQl</a>
                </li>

              </ul>
              <ul class="navbar-nav ml-auto mt-10">
                <li class="nav-item">
                  <a class="nav-link login-button">
                    <router-link to="/login" >
                      Login
                    </router-link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link login-button">
                    <router-link to="/register" >
                      Register
                    </router-link>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-white add-button">
                    <router-link to="/admin" >
                      <i class="fa fa-plus-circle"></i> Admin
                    </router-link>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
<!-- END HEADER -->
  <transition name="slide" mode="out-in">
  <router-view />
  </transition>

  <!-- Footer Bottom -->
  <footer class="footer-bottom">
    <!-- Container Start -->
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-12">
          <!-- Copyright -->
          <div class="copyright">
            <p>Copyright © 2021. All Rights Reserved, theme by les perdus en IW</p>
          </div>
        </div>
        <div class="col-sm-6 col-12">
          <!-- Social Icons -->
          <ul class="social-media-icons text-right">
            <li><a class="fa fa-facebook" href="https://www.facebook.com/themefisher" target="_blank"></a></li>
            <li><a class="fa fa-twitter" href="https://www.twitter.com/themefisher" target="_blank"></a></li>
            <li><a class="fa fa-pinterest-p" href="https://www.pinterest.com/themefisher" target="_blank"></a></li>
            <li><a class="fa fa-vimeo" href=""></a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Container End -->
    <!-- To Top -->
    <div class="top-to">
      <a id="top" class="" href="#"><i class="fa fa-angle-up"></i></a>
    </div>
  </footer>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>
<style>
@import "assets/css/style.css";
</style>

