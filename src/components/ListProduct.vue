<template>
  <div id="list-product">
    <div class="container">
      <div class="row my-3">
        <div class="col">
          <div class="bg-list-product">
            <div class="row">
              <div class="col-lg-1 text-center">
                <img class="logo-mitra m-2" src="/assets/img/logo-seber-3.png" alt="">
              </div>
              <div class="col-lg-4">
                  <h5><strong>Laptop SeberID</strong></h5>
                  <hr>
                  <p>
                    Laptop Seken berkualitas
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div class="row mt-4">
          <div class="col">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Cari barang pada laptop seberID"
                aria-label="Cari"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="fas fa-search"></i></span>
                  
              </div>
            </div>
          </div>
        </div>
      <div class="row mt-4">
        <div class="col-lg-4">
            <div class="card shadow" style="width: 100% ; height:100%;">
              <img src="/assets/img/t450.jpeg" style="width:100%; height:300px; object-fit:cover;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><strong>Lenovo Thinkpad T450</strong></h5>
                <p class="card-text">Processor Core i5 12gb/SSD240gb lyr 14 inchi Keyboard Backlite</p>
                <router-link class="btn btn-success" to="/product-detail"
                    >Lihat Detail <i class="fas fa-arrow-right"></i></router-link>
              </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card shadow" style="width: 100% ; height:100%;">
              <img src="/assets/img/t440s.jpeg" style="width:100%; height:300px; object-fit:cover;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><strong>Laptop Lenovo Thinkpad T440s</strong></h5>
                <p class="card-text">Procesor Core i5 4/500gb lyr 14 inchi</p>
                <router-link class="btn btn-success" to="/product-detail"
                    >Lihat Detail <i class="fas fa-arrow-right"></i></router-link>
              </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card shadow" style="width: 100%; height:100%;" >
              <img src="/assets/img/x230.jpeg" style="width:100%; height:300px; object-fit:cover;" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title"><strong>Lenovo Thinkpad X230</strong></h5>
                <p class="card-text">Processor Core i5 4/320gb lyr 12.5 inchi mulus mantap</p>
                <router-link class="btn btn-success" to="/product-detail"
                    >Lihat Detail <i class="fas fa-arrow-right"></i></router-link>
              </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: "ListProduct",
};
</script>

<style>
.bg-list-product {
  background: #FFFFFF;
  box-shadow: 0px 5px 15px #ece7e7;
  border-radius: 8px;
  width: 100%;
  height: auto;
}

.logo-mitra {
  object-fit: cover;
  width: 70px;
  height: 70px;
}
</style>