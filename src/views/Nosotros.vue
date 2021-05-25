<template>
  <div class="home">
    <app-header></app-header>
    <app-mision class="bg-secondary"></app-mision>
    <div class="fundacion">
      <app-fundacion></app-fundacion>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/HeaderNosotros.vue";
import Mision from "@/components/Nosotros/Mision.vue";
import Footer from "@/components/Body/Footer.vue";
import Fundacion from "@/components/Nosotros/Fundacion.vue";

export default {
  name: "Nosotros",
  components: {
    appHeader : Header,
    appMision : Mision,
    appFooter : Footer,
    appFundacion: Fundacion,
  }
};
</script>

<style scoped>
.home {
  background-image: url('../assets/img/bg.png');
  background-color:rgba(0, 0, 0, 0.2);
  background-size: cover;
  max-width: 100%;
  height: 400px;
}
.fundacion{
  background-color: #D9A371;
}

</style>