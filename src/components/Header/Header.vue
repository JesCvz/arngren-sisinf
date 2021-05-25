<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="w-100" :class="{'header__text' : !isMobile}">
            <div class="container" :class="{'header__text' : !isMobile}">
              <h1 class="text-uppercase font-italic text-center">¿Qué estas buscando?</h1>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      desktopMargin: 'mt-4'
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
  font-weight: 700;
  font-size: 5em;
  color: #fff4f4;
  text-shadow: 0px 4px 4px rgba(1, 1, 1, 0.76);
  margin: 80px 0px 150px 0px;
}
.header__Mobile{
  margin-top: 5rem;
}
.header__text{
  margin-top: 150px;
}

</style>
