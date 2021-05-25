<template>
 <article class="bg-light">
            <div class="container border-bottom text-center" style="padding: 50px 0px 50px 0px;">
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col-6">
                        <h2>ORGANIZACIÓN</h2>
                        <p>
                            Arngren es una empresa dedicada a la distribución, compra, venta y
                            suministros de productos a traves de nuestra página, comprometidos a 
                            otorgar el mejor servicio a nuestros clientes. 
                        </p>
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
            <div class="container text-center" style="padding-bottom: 40px;">
                <div class="row">
                    <div class="col">
                        <img src="../../assets/img/image 31.png" alt="envio" width="800" height="700">
                    </div>
                </div>
                <div class="row">
                    <div class="col">     
                    </div>
                    <div class="col">
                        <img src="../../assets/img/image 34.png" alt="envio" width="300" height="110">
                    </div>
                    <div class="col" style="margin-top: 10px;">
                        <router-link to="/Login" v-if="!user">
                           <a style="height: 60px; width: 120px;" class="btn btn-info" href="nosotros.html" role="button">
                            <p class="text-center" style="margin-top: 8px; font-size: 200%;">Registrate</p>
                        </a>
                        </router-link>
                    </div>
                    <div class="col">     
                    </div>
                </div>
            </div>
        </article>
</template>

<script>
export default {
    name: "Fundacion",
    created() {
        this.windowWidth = window.innerWidth;
        window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
    },
     computed: {
        isMobile() {
        return this.windowWidth <= 768;
    }
  }
  }
</script>

<style scoped>
h1 {
  text-align: left;
  margin-top: 100px;
  color: white;
}
.text-aqua p {
  color: var(--aqua) !important;
}

</style>