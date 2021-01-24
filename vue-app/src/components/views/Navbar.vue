<template>
    <!-- HEADER -->
    <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg navbar-light navigation">
                        <a class="navbar-brand"><router-link to="/">IW-Commerce</router-link></a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto main-nav ">
                                <li class="nav-item"><a class="nav-link"><router-link to="/">Accueil</router-link></a></li>
                                <li class="nav-item"><a class="nav-link"><router-link to="/categories">Categories</router-link></a></li>
                                <li class="nav-item"><a class="nav-link"><router-link to="/registration">Créer un compte</router-link></a></li>
                                <li class="nav-item" v-if="!isAuthenticated"><a class="nav-link"><router-link to="/login">Se connecter</router-link></a></li>
                                <li class="nav-item" v-if="isAuthenticated"><a class="nav-link"><router-link to="/login">Se deconnecter</router-link></a></li>
                                <li class="nav-item"><a class="nav-link"><router-link to="/admin">Admin</router-link></a></li>
                                <!-- APIs switch
                                <li class="nav-item"><a class="nav-link"  href="">Api Platform</a></li>
                                <li class="nav-item"><a class="nav-link"  href="">GraphQl</a></li>
                                -->
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
//import AuthContext from "../contexts/AuthContext";
import AuthAPI from "../../services/authAPI";
export default {
  name: 'Navbar',
   
    inject: ['setIsAuthenticated', 'isAuthenticated' ],
    methods: {
       handleLogout ()  {
    AuthAPI.logout();
    this.setIsAuthenticated(false);
    console.log("Vous êtes désormais déconnecté 😁");
   // toast.info("Vous êtes désormais déconnecté 😁");
    this.$router.push("/login");
  }

    },
}
</script>