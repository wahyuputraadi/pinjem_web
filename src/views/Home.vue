<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
  <div class="home">
      <navbar />
      <div class="container">
        <hero />
        <div class="row mt-5">
          <div class="col-lg-6">
            <h3> <strong>Mitra</strong> Kami</h3>
          </div>
          <div class="col-lg-6 text-right">
            <router-link class="btn btn-outline-secondary" to="/foods"
              ><i class="far fa-eye"></i> Lihat Semua
            </router-link>
          </div>
        </div>
        <div class="row">
           <card-product/>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";


export default {
  name: 'Home',
  components: {
    // HelloWorld
    Navbar,
    Hero,
    CardProduct
  }
}
</script>
