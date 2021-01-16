<template>
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
                    <router-link to="/" >
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

                <li class="nav-item active">
                  <a class="nav-link">
                    <router-link to="/apollo" >
                      Apollo
                    </router-link>
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link">
                    <router-link to="/vuemik" >
                      Vuemik test
                    </router-link>
                  </a>
                </li>

                <li class="nav-item active">
                  <a class="nav-link">
                    <router-link to="/registration" >
                      Vuemik Registration
                    </router-link>
                  </a>
                </li>


                <!-- APIs switch
                <li class="nav-item">
                  <a class="nav-link"  href="">Api Platform</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"  href="">GraphQl</a>
                </li>
                -->

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
</template>
<script>
export default {
  name: 'Navbar',
}
</script>