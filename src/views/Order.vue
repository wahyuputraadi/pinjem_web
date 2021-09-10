<template>
  <div class="order">
    <navbar />
      <div class="container">
         <div class="row mt-5">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-light">
                <li class="breadcrumb-item">
                    <a style="text-decoration: none;" href="/"><i class="fas fa-home" aria-hidden="true"></i> Home </a>
                </li>
                <li class="breadcrumb-item">
                  <router-link class="text-dark" to="/product-mitra">Product Mitra</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                 <b> Details Product</b>
                </li>
              </ol>
            </nav>
            <hr>
          </div>
        </div>   
      <order-now/>
    </div>
  </div>
</template>

<script>
import OrderNow from "@/components/OrderNow.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Order",
  components : {
    Navbar,
    OrderNow
  }
};
</script>

<style>
</style>