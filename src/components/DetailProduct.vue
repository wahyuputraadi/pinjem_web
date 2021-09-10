<template>
    <div id="app">
        <div class="detail-product">
             <div class="row mt-3">
                <div class="col-lg-5">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item p-2 active">
                           <img 
                                src="/assets/img/t450.jpeg" 
                                class="img-fluid shadow" width="100%"
                            />
                            </div>
                            <div class="carousel-item p-2">
                           <img 
                                src="/assets/img/t450.jpeg" 
                                class="img-fluid shadow" width="100%"
                            />
                            </div>
                            <div class="carousel-item p-2">
                           <img 
                                src="/assets/img/t450.jpeg" 
                                class="img-fluid shadow" width="100%"
                            />
                            </div>
                        </div>
                        <a class="carousel-control-prev arrow-left" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                            <i class="fas fa-arrow-circle-left"></i>
                            <!-- <span class="sr-only">Previous</span> -->
                        </a>
                        <a class="carousel-control-next arrow-right" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                            <i class="fas fa-arrow-circle-right"></i>
                            <!-- <span class="sr-only">Next</span> -->
                        </a>
                    </div>
                </div>
                <div class="col-md-7">
                    <h2>
                    <strong>Lenovo Thinkpad T450</strong>
                    </h2>
                    <hr />
                    <h4>
                    Harga : <strong>Rp. 5.000.000</strong>
                    </h4>
                    <form class="mt-4" >
                    <div class="form-group">
                        <label for="jumlah_pemesanan">Jumlah Pesan</label>
                        <input style="width:70px;"
                        type="number"
                        placeholder="0"
                        class="form-control"
                        />
                    </div>
                    <div class="form-group">
                        <label for="keterangan">Deskripsi</label>
                        <div class="bg-deskripsi">
                        <p>
                            
                        </p>
                        
                        </div>
                    </div>
                   <router-link to="/order"> <button
                    
                        type="submit"
                        class="btn btn-success mt-3"
                    >
                        Lanjutkan Pesanan   <i class="fas fa-arrow-right"></i>
                    </button></router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"DetailProduct",
}
</script>

<style>
    
.food-detail .img-product {
  width: 100%;
  height: 380px;
  object-fit: cover;
}

.bg-deskripsi {
  background: #efefef;
  width: 100%;
  height: 150px;
  overflow: scroll;
  border-radius: 10px;
}

.bg-order {
    width: 10px;
    height: 10px;
     overflow-x: scroll;
}



</style>