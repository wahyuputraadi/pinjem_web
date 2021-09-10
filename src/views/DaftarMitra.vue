<template>
    <div id="DaftarMitra">
        <navbar />
        <mitra />
   
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Mitra from "@/components/Mitra.vue";

export default {
  name: "DaftarMitra",
  components: {
    Navbar,
    Mitra,
  },
};
</script>

<style> 
    #DaftarMitra {
      background: #E9E9E9;
    }

</style>