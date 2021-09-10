<template>
  <div id="hero">
    <!-- dekstop -->
    <div class="d-none d-md-block">
      <div class="row mt-5 justify-content-between">
        <div class="col-lg-5">
          <img src="/assets/img/hero-2-min.png" width="100%" />
        </div>
        <div class="col-lg-6">
          <div class="d-flex h-100">
            <div class="justify-content-between align-self-center">
              <h1>
                <strong>#AdaUntukKamu</strong> 
               <p>Jasa pengiriman Barang</p>
              </h1>
              <p>Mendukung pertumbuhan bisnis UMKM di Palembang</p>
              <router-link class="btn btn-success" to="/daftar-mitra"
                >Daftar Mitra <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-5">
        <div class="col-lg-7">
          <div class="d-flex h-100">
            <div class="justify-content-between align-self-center">
              <h3>
                <strong>#AdaUntukKamu</strong> <br />
               Jasa pengiriman Barang
              </h3>
              <p style="font-size:14px;">Mendukung pertumbuhan bisnis UMKM di Palembang</p>
              <router-link class="btn btn-success" to="/daftar-mitra"
                >Daftar Mitra <b-icon-arrow-right />
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <img src="/assets/img/hero-2.png" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>