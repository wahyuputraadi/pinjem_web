<template>
      <div class="OrderNow">
            <div class="container">
            <div class="row mt-5 justify-content-center text-left pb-5">
                <div class="col-lg-10 bg-mitra">
                <h3 class="text-center">
                    <strong>#AdaUntukKamu</strong> <br>
                    <span>Panggil <strong>Pinjem</strong> Kurir</span>
                </h3>
                <br>
                <div class="content">
                    <label for=""><strong>Nama Penerima</strong> </label>
                    <input class="form-control" type="text" placeholder="Ketik nama penerima ">
                    <p>
                    <label for=""><strong>No Telepon/Whatsapp</strong><br><span>*Aktif</span></label>
                    <input class="form-control" type="text" placeholder="Ketik nomor telepon Anda wajib aktif">
                    </p>
                    
                    <p>
                    <label for=""><strong>Lokasi GMaps Penerima</strong><br><span>*(Berikan Titik Lokasi Penerima)</span></label>
                    <input class="form-control" type="text" placeholder="Berikan kami lokasi anda untuk mempermudah proses pengantaran">
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.44544371714!2d104.69275210337682!3d-2.954794894895159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75e8fc27a3e3%3A0x3039d80b220d0c0!2sPalembang%2C%20Palembang%20City%2C%20South%20Sumatra!5e0!3m2!1sen!2sid!4v1630555929885!5m2!1sen!2sid" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    
                    <div class="form-group">
                        <p>
                        <label for="exampleFormControlTextarea1"><strong>Detail Alamat Penerima</strong></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ketik alamat lengkap penerima"></textarea>
                        </p>
                    </div><div class="form-group">
                        <p>
                        <label for="exampleFormControlTextarea1"><strong>Catatan</strong></label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ada yang ingin disampaikan pada pinjem kurir"></textarea>
                        </p>
                    </div>  
                    
                    <form>
                    <div class="form-group">
                        <label for=""><strong>Upload Foto Barang</strong></label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1">
                    </div>
                    </form>
                    
                        <div class="row">
                        <div class="col-lg-10">
                            <div class="form-group form-check checkbro">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">
                        Saya mengerti, setelah data ini saya kirim TIM Pinjem Kurir akan menghubungi saya. saya pastikan alamat dan nomor saya aktif. 
                        </label>
                        </div>
                        </div>
                    </div>
                    <div class="row mt-4 justify-content-center">
                    <div class="col-lg-7">
                        <a class="btn btn-success form-control" href="https://wa.me/6281274425459">Pesan Kurir Sekarang  <i class="fas fa-arrow-right"></i></a>
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
    name: "OrderNow",
    };
   
</script>

<style>

.OrderNow .bg-mitra {
   background: #FFFFFF;
   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.116);
   padding: 20px;
   border-radius: 10px;
}
.OrderNow .bg-mitra h3{
  line-height: 35px;
}

.OrderNow .bg-mitra span{
 color:#FFA000;
 ;
}

.OrderNow .bg-mitra .content span {
  font-size: 13px;
}

.OrderNow .bg-mitra .content p {
  margin-top: 35px;
}

.OrderNow .bg-mitra .content .checkbro label {
  font-size: 12px;
}
</style>