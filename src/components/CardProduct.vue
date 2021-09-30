<template>
  <div id="card-product">
    <div class="container">
      <div class="row mt-4">
        <div class="col-lg-3">
            <div class="card shadow" style="width: 100% ; height:100%;">
              <img src="/assets/img/nasi-ayam-geprek.jpg" style="width:100%; height:300px; object-fit:cover;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><strong>Nasi Ibu Ida</strong></h5>
                <p class="card-text">Aneka ragam nasi anak kos - kosan</p>
                <router-link class="btn btn-success" to="/">Lihat Toko <i class="fas fa-arrow-right"></i></router-link>
              </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card shadow" style="width: 100% ; height:100%;">
              <img src="/assets/img/t440s.jpeg" style="width:100%; height:300px; object-fit:cover;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><strong>Laptop Seber</strong></h5>
                <p class="card-text">Kami menjual laptop seken berkualitas</p>
                <router-link class="btn btn-success" to="/product-mitra">Lihat Toko <i class="fas fa-arrow-right"></i></router-link>
              </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card shadow" style="width: 100%; height:100%;" >
              <img src="/assets/img/sate-ayam.jpg" style="width:100%; height:300px; object-fit:cover;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><strong>Cemilan Nusantara</strong></h5>
                <p class="card-text">Beragam aneka rasa cemilan</p>
                <router-link class="btn btn-success" to="/" >Lihat Toko <i class="fas fa-arrow-right"></i></router-link>
              </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card shadow" style="width: 100%; height:100%;" >
              <img src="/assets/img/mie-ayam-bakso.jpg" style="width:100%; height:300px; object-fit:cover;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><strong>Kedai Cek Nur</strong></h5>
                <p class="card-text">Mie Ayam Bakso Mantapp Harga Anak Kos</p>
                <router-link class="btn btn-success" to="https://wa.me/628117317173">Lihat Toko <i class="fas fa-arrow-right"></i></router-link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "CardProduct",
};
</script>

<style>
</style>