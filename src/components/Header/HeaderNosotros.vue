<template>
  <div class="container">
    <div class="row">
      <div class="col pt-5">
          <div class="pt-5">
            <div class="w-100 header__text pt-5">
              <h1 class="">¿Quienes somos?</h1>
            </div>
          </div>
      </div>
      <div class="col">
        <div class="" :class="{'text-center' : !isMobile}">
          <img src="../../assets/img/logo.png" alt="" style="max-width: 100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  },
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
};
</script>

<style scoped>
.header__text p {
  font-weight: 300;
}
h1 {
  margin: 100px 0px 0px 0px;
  font-weight: 700;
  font-size: 3.7em;
  color: #fff4f4;
  text-shadow: 0 4px 4px rgba(1, 1, 1, 0.76);
}
.text-center {
  margin:100px 50px 50px 0px ;
}
</style>