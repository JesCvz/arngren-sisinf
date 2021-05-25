<template>
<div>
<div class="bg-secondary p-3">
    <button v-on:click="pc=true; hardware=false; lap=false">PC</button>
    <button v-on:click="pc=false; hardware=true; lap=false">Hardware</button>
    <button v-on:click="pc=false; hardware=false; lap=true">Laptops</button>
  </div>
  <div class="container mt-4">  
        <div v-if="pc"> 
          <h3 class="text-center ml-5 mb-4">Computadoras de Escritorio</h3>
          <div class="row mt-2">
            <app-images :product="products" v-for="products in pcs" :key="products.id"></app-images>  
          </div>
        </div> 
        <div v-else-if="hardware">
          <h3 class="text-center ml-5 mb-4">Hardware</h3>
          <div class="row mt-2">
            <app-images :product="products" v-for="products in hardwares" :key="products.id"></app-images>    
          </div>
        </div>
        <div v-else-if="lap" >
           <h3 class="text-center ml-5 mb-4">Laptops</h3>
          <div class="row mt-2">
            <app-images :product="products" v-for="products in laptops" :key="products.id"></app-images>
          </div>
        </div>
        <div v-else>
          <h2>Bienvenidos a nuestro catalogo</h2>
          <br>
          <div class="pt-3 border-top border-bottom">
            <h3 class="text-left ml-5 mb-4 font-italic">Destacados</h3>
            <div class="row mt-2 ">
              <app-images :product="products" v-for="products in destacado" :key="products.id"></app-images>
            </div>
          </div>
          <br>
          <div class="pt-3 border-top border-bottom">
            <h3 class="text-left ml-5 mb-4 font-italic">Novedades</h3>
            <div class="row mt-2 ">
              <app-images :product="products" v-for="products in novedades" :key="products.id"></app-images>
            </div>
          </div>
        </div>
     <br>
  </div>
</div>
</template>

<script>
import ImagenesProductos from "@/components/Productos/ImagenesProductos.vue";
import {mapState} from 'vuex'

export default {
    name: "Productos",
    components:{
        appImages: ImagenesProductos
    },
    props:
    {
      pc: Boolean,
      hardware: Boolean,
      lap: Boolean,
    },
      computed: {
    ...mapState(['hardwares','pcs','laptops','loading', 'destacado', 'novedades']),
  },
};
</script>

<style scoped>
h1 {
  color: #03c2fc;
}
.text-aqua p {
  color: var(--aqua) !important;
}
p {
  text-align: left;
  margin-left: 45px;
  color: #03c2fc;
}

button {
  background-color: #6c757d;
  color: white;
  margin: 0px 10px;
  padding: 0px 20px;
  border: none;
}

</style>