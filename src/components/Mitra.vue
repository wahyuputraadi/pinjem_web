<template>
  <div id="Mitra">
    <div class="container">
        <div class="row mt-5 justify-content-center pb-5">
            <div class="col-lg-6 bg-mitra">
              <h3 class="text-center">
                <strong>#AdaUntukKamu</strong> <br>
                <span>Mitra <strong>Pinjem</strong> Kurir</span>
              </h3>
              <br>
              <div class="content">
                  <label for=""><strong>Nama Anda</strong> </label>
                  <input class="form-control" type="text" placeholder="Ketik nama anda">
                  <p>
                  <label for=""><strong>Nama Toko Anda</strong> </label>
                  <input class="form-control" type="text" placeholder="Ketik nama toko anda">
                </p>
                    <div class="form-group">
                    <p>
                       <label for="exampleFormControlTextarea1"><strong>Alamat Lengkap </strong></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ketik alamat lengkap toko kamu"></textarea>
                    </p>
                  </div>
                <p>
                  <label for=""><strong>No Telepon</strong><br><span>*Whatsapp</span></label>
                  <input class="form-control" type="text" placeholder="Ketik nomor telepon Anda">
                </p>
                
                 <p>
                  <label for=""><strong>Selain marketplace, kamu biasa jual melalui apa ? </strong><br><span>(IG, WA Group, dll) *</span></label>
                  <input class="form-control" type="text" placeholder="Ketik dimana anda sering berjualan">
                </p>
                 <p>
                  <label for=""><strong>Kira-kira berapa jumlah pengiriman kamu dalam 1 bulan ?</strong></label>
                  <input class="form-control" type="text" placeholder="Ketik jumlah pengiriman kamu dalam 1 bulan">
                </p>
                <div class="form-group">
                     <p>
                       <label for="exampleFormControlTextarea1"><strong>Keterangan</strong></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ada yang ingin disampaikan pada pinjem kurir"></textarea>
                     </p>
                </div>   
                 
                     <div class="row">
                       <div class="col-lg-10">
                         <div class="form-group form-check checkbro">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">
                       Saya mengerti, setelah data ini saya kirim TIM Pinjem Kurir akan menghubungi saya. saya pastikan nomor saya aktif. 
                      </label>
                       </div>
                     </div>
                  </div>
                <div class="row mt-4 justify-content-center">
                  <div class="col-lg-7">
                      <router-link class="btn btn-success form-control" to="/order-berhasil">Bergabung Sekarang <b-icon-arrow-right></b-icon-arrow-right></router-link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mitra",
};
</script>

<style>
#Mitra .bg-mitra {
   background: #FFFFFF;
   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.116);
   padding: 20px;
   border-radius: 10px;
}
#Mitra .bg-mitra h3{
  line-height: 35px;
}

#Mitra .bg-mitra span{
 color:#FFA000;
 ;
}

#Mitra .bg-mitra .content span {
  font-size: 13px;
}

#Mitra .bg-mitra .content p {
  margin-top: 35px;
}

#Mitra .bg-mitra .content .checkbro label {
  font-size: 12px;
}
</style>