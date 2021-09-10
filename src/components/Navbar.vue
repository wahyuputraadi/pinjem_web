<template>
 <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div class="container">
        <!-- <a class="navbar-brand" href="/assets/img/logo-pinjem-kurir.png"> </a> -->
        <img class="logo-kurir m-2" style="width: 110px; height: auto;" src="/assets/img/logo.png" alt="" >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item ml-4">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="">#MitraPinjemKurir</router-link>
              
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="/keranjang"
                >Keranjang <b-icon-bag></b-icon-bag>
                <span class="badge badge-success ml-2">1</span></router-link
              >
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>