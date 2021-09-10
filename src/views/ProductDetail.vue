<template>
  <div id="app">
    <div class="food-detail">
      <navbar />
      <div class="container">
        <div class="row mt-5">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                   <a style="text-decoration: none;" href="/"><i class="fas fa-home" aria-hidden="true"></i> Home </a>
                </li>
                <li class="breadcrumb-item">
                  <router-link class="text-dark" to="/product-mitra">Product Mitra</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Details Product
                </li>
              </ol>
            </nav>
               <hr>
          </div>
        </div>   
        <detail-product/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import DetailProduct from "@/components/DetailProduct.vue";

export default {
  name: "ProduOctDetail",
  components: {
    Navbar,
    DetailProduct,
  },
};
</script>

<style>

</style>