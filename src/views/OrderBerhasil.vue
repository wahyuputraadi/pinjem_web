<template>
  <div class="order-berhasil">
    <navbar />
   <div class="container">
     <div class="row justify-content-center mt-5">
       <div class="col text-center">
         <img  src="/assets/img/order-berhasil-min.png" width="200" alt="">
         <h2 class="mt-4"><strong>Sukses!!</strong></h2>
         <h4>Permintaan Anda Segera Diproses <br> </h4>
         <p> Pinjem Kurir Akan Segera Menghubungi Anda </p>
       </div>
     </div>
        <div class="row mt-3 justify-content-center">
          <div class="col-lg-4">
              <router-link class="btn btn-success form-control shadow" to="/">Kembali ke halaman utama <b-icon-arrow-right></b-icon-arrow-right></router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "OrderBerhasil",
  components : {
    Navbar
  }
};
</script>

<style>
</style>