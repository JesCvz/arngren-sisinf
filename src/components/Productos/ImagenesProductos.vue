<template>
      <div class="col-12 col-md-4 col-lg-4 mobile-margin-top border pt-3" >
          <div class="producto-pastel mt-4" >
            <div class="text-center">
                <img :src="require(`@/assets/img/PC/${product.img}`)"  alt="" class="img__services mx-auto">
                <h3 class="align-middle m-4">{{ product.name }}</h3>
            </div>
            <p class="text-left text-muted ">
              precio: {{ product.price }}
            </p>
            <p class="text-left text-muted ">
              personas: 12
            </p>
                <label for="quantity">Quantity</label>
                <input :placeholder="product.quantity" v-model="cantidad" >
                <div>
                <button class="btn_ btn-blue mt-2 mb-4 ml-auto"
                @click="addCantidad(product)"
                >Agregar al carrito
                <img class="ml-2 cart" src="@/assets/img/shopcart.png" alt=""> </button>
                  <br>
            </div>        
          </div>
        </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  props: {
    product : {
      id: '',
      name: '',
      quantity: 1,
      category: '',
      price: '',
      img: '',
      link: '',
    },
  },
  name: "imagenesProductos",
  data() {
    return {
      cantidad : 1
    };
  },
  methods: {
    ...mapActions(['addPastel']),
      addCantidad(pastel) {
      this.pastel = pastel,
      this.pastel.quantity = this.cantidad,
      this.addPastel(pastel)
        alert("Se agrego el producto al carrito");
    }
  },
  computed: {
    ...mapState(['hardwares','pcs','laptops','loading']),

  },
  created() {
    console.log(this.pasteles)
  },
};
</script>

<style scoped>
.img__services {
    max-width: 250px;
    max-height: 150px;
}

@media (max-width: 576px) {
    .img__services {
    max-width: 200px;
}
}
button {
  padding: 10px;
}
h4 {
  color: black;
}
.pastel {
  max-width: 320px;
  height: 220px;
  background-color: #03c2fc;
  margin: 2rem;
}
.pastel img {
  max-width: 300px;
  max-height: 200px;
}
.desc {
  background-color: #03c2fc;
}
.cart img {
  fill: white!important;
}
</style>