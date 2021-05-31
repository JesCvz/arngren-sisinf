import Vue from "vue";
import Vuex from "vuex";

import { auth, db } from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    loading: false,
    destacado: [
      {
        id: 1,
        name: "Kit para armar tu PC",
        price: "$18500.00",
        quantity: 1,
        category: "",
        img: "piezaspaquete.png"
      },
      {
        id: 2,
        name: "Computadora de Escritorio Gamer RGB",
        price: "$45000.00",
        quantity: 1,
        category: "",
        img: "pc2.png"
      },
      {
        id: 3,
        name: "Nvidia RTX 3090",
        price: "$37000.00",
        quantity: 1,
        category: "",
        img: "rtx3090.png"
      },
    ],
    novedades: [
      {
        id: 1,
        name: "RAM TridentZ 16GB",
        price: "$7500.00",
        quantity: 1,
        category: "",
        img: "ram.png"
      },
      {
        id: 2,
        name: "Disco Solido M.2 Samsung",
        price: "$2000.00",
        quantity: 1,
        category: "",
        img: "ssd.png"
      },
      {
        id: 3,
        name: "Gabinete Lian Li",
        price: "$7000.00",
        quantity: 1,
        category: "",
        img: "lianlicase.png"
      },
    ],
    hardwares: [
      {
        id: 1,
        name: "Kit para armar tu PC",
        price: "$18500.00",
        quantity: 1,
        category: "",
        img: "piezaspaquete.png"
      },
      {
        id: 2,
        name: "Intel Core i9",
        price: "$13500.00",
        quantity: 1,
        category: "",
        img: "i9cpu.png"
      },
      {
        id: 3,
        name: "Processador Ryzen 5",
        price: "$8000.00",
        quantity: 1,
        category: "",
        img: "ryzencpu.png"
      },
      {
        id: 4,
        name: "Nvidia RTX 3090",
        price: "$37000.00",
        quantity: 1,
        category: "",
        img: "rtx3090.png"
      },
      {
        id: 5,
        name: "RAM TridentZ 16GB",
        price: "$7500.00",
        quantity: 1,
        category: "",
        img: "ram.png"
      },
      {
        id: 6,
        name: "Fuente de Poder EVGA 850W",
        price: "$4500.00",
        quantity: 1,
        category: "",
        img: "fuentepoder.png"
      },
      {
        id: 7,
        name: "Disco Solido M.2 Samsung",
        price: "$2000.00",
        quantity: 1,
        category: "",
        img: "ssd.png"
      },
      {
        id: 8,
        name: "Disco Solido Kingston",
        price: "$1200.00",
        quantity: 1,
        category: "",
        img: "ssd2.png"
      },
      {
        id: 9,
        name: "Gabinete Lian Li",
        price: "$7000.00",
        quantity: 1,
        category: "",
        img: "lianlicase.png"
      },
    ],
    pcs: [
      {
        id: 1,
        name: "Computadora de Escritorio Gamer",
        price: "$25000.00",
        quantity: 1,
        category: "",
        img: "pc1.png"
      },
      {
        id: 2,
        name: "Computadora de Escritorio Trabajo",
        price: "$15000.00",
        quantity: 1,
        category: "",
        img: "pc3.png"
      },
      {
        id: 3,
        name: "Computadora de Escritorio Gamer RGB",
        price: "$45000.00",
        quantity: 1,
        category: "",
        img: "pc2.png"
      },
      {
        id: 4,
        name: "Computadora de Escritorio Genérica",
        price: "$12000.00",
        quantity: 1,
        category: "",
        img: "pcgenerica.png"
      },
      {
        id: 5,
        name: "Computadora de Escritorio para Edición",
        price: "$18500.00",
        quantity: 1,
        category: "",
        img: "pcedicion.png"
      },
      {
        id: 6,
        name: "Computadora de Escritorio Lenovo",
        price: "$21500.00",
        quantity: 1,
        category: "",
        img: "hplenovo.png"
      },
      {
        id: 7,
        name: "Computadora de Escritorio HP Paquete",
        price: "$15500.00",
        quantity: 1,
        category: "",
        img: "pchp.png"
      },
      {
        id: 8,
        name: "Computadora de Escritorio Alienware",
        price: "$55500.00",
        quantity: 1,
        category: "",
        img: "pcalienware.png"
      },
      {
        id: 9,
        name: "Computadora de Escritorio AllInOne",
        price: "$15500.00",
        quantity: 1,
        category: "",
        img: "pcaio.png"
      },
    ],
    laptops: [
      {
        id: 1,
        name: "Alienware",
        price: "$35000.00",
        quantity: 1,
        category: "",
        img: "alienware.png"
      },
      {
        id: 2,
        name: "HP Omen",
        price: "$28000.00",
        quantity: 1,
        category: "",
        img: "hp.png"
      },
      {
        id: 3,
        name: "Lenovo Y540",
        price: "$21000.00",
        quantity: 1,
        category: "",
        img: "lenovo.png"
      },
      {
        id: 4,
        name: "ASUS ROG ",
        price: "$31000.00",
        quantity: 1,
        category: "",
        img: "asusrog.png"
      },
      {
        id: 5,
        name: "Microsoft Surface Pro",
        price: "$18000.00",
        quantity: 1,
        category: "",
        img: "surfacepro.png"
      },
      {
        id: 6,
        name: "Razer Blade 15",
        price: "$45000.00",
        quantity: 1,
        category: "",
        img: "razer.png"
      },
      {
        id: 7,
        name: "HP Pavlion 13'",
        price: "$12500.00",
        quantity: 1,
        category: "",
        img: "hppavilion.png"
      },
      {
        id: 8,
        name: "HP 240 Laptop",
        price: "$8000.00",
        quantity: 1,
        category: "",
        img: "hp240.png"
      },
      {
        id: 9,
        name: "Acer Swift 3",
        price: "$7500.00",
        quantity: 1,
        category: "",
        img: "acer.png"
      },
    ],
    
    products: {
      id: "",
      name: "",
      quantity: 1,
      category: "",
      price: "",
      img: ""
    },
    shoppingCart: [],
    carrito: [],
    text: "",
    isSubmitted: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setCarrito(state, payload) {
      state.carrito = payload;
    },
    loadFirebase(state, payload) {
      state.loading = payload;
    },
    setProduct(state, payload) {
      state.pastel = payload;
    },
    setSubmitted(state, payload){
      state.isSubmitted = payload
    },
  },
  actions: {
    addOrder({commit, state}, order) {
      commit('loadFirebase', true);
      db.collection(state.user.email).doc("pasteles").collection("order").add({
        order: order
      })
          .then(() => {
            commit('loadFirebase', false);
            commit('setSubmitted', true);
          })
    },

    addContact({commit}, contact) {
      commit('loadFirebase', true);
        db.collection('contacto').add({
          contact: contact
        })
        .then(() => {
            commit('loadFirebase', false);
            commit('setSubmitted', true);
        })
    },
    finder({ state }, payload) {
      console.log(payload);
      state.text = payload.toLowerCase();
    },
    addProduct({commit, state},pastel) {
      commit('loadFirebase', true);
      state.pastel = pastel
      console.log(state.pastel)
      db.collection(state.user.email).doc("pasteles").collection("carrito").add({
        pastel : state.pastel
      })
      .then(doc => {
        commit('loadFirebase', false);
        console.log("added" + doc.id)
      })
    },
    deleteProduct({state}, id) {
      db.collection(state.user.email).doc("pasteles").collection("carrito").doc(id).delete()
      .then(() => {
        console.log('deleted job')
        this.dispatch('getJobs')
      })
    },
    getProducts({commit,state}) {
      commit('loadFirebase', true);
      const jobs = []
      console.log(state.user.email + 'email')
      db.collection(state.user.email).doc("pasteles").collection("carrito").get()
      .then(res => {
        res.forEach(doc => {
          let job = doc.data().pastel
          console.log(job)
          job.id = doc.id
          jobs.push(job)
        })
        commit('loadFirebase', false);
        commit('setCarrito', jobs)
      })
    },
    getCarrito({ commit, state }) {
      commit("loadFirebase", true);
      const pasteles = [];
      db.collection(state.user.email).doc("pasteles").collection("carrito")
        .get()
        .then(res => {
          res.forEach(doc => {
            let pastel = doc.data().pastel;
            pastel.id = doc.id;
            console.log("data" + pastel);
            pasteles.push(pastel);
          });
          setTimeout(() => {
            commit("loadFirebase", false);
          }, 2000);
          commit("setCarrito", pasteles);
        });
    },
    getProduct({ commit, state }, pastelId) {
      db.collection(state.user.email).doc("pasteles").collection("carrito")
        .doc(pastelId)
        .get()
        .then(doc => {
          console.log(doc.id);
          console.log(doc.data());
          let pastel = doc.data();
          pastel.id = doc.id;
          commit("setProduct", pastel);
        });
    },
    createUser({ commit }, user) {
      auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res);
          const user = {
            email: res.user.email,
            uid: res.user.uid,
            password: res.user.password
          };
          commit("setUser", user);
          router.push("/");
        })
        .catch(error => {
          console.log(error);
          commit("setError", error);
        });
    },
    userLogin({ commit }, user) {
      auth.signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res);
          const usuario = {
            email: res.user.email,
            uid: res.user.uid
          };
          commit("setUser", usuario);
          router.push("/auth");
        })
        .catch(error => {
          console.log(error);
          commit("setError", error);
        });
    },
    detectUser({ commit }, user) {
      commit("setUser", user);
    },
    logout() {
      auth.signOut();
      router.push("/Login");
    }
  },
  getters: {
    userExists(state) {
      if (state.user === null) {
        return false;
      } else {
        return true;
      }
    },
    filteredArray(state) {
      let filteredSearch = [];
      for (let pastel of state.pasteles) {
        let name = pastel.name.toLowerCase();
        if (name.indexOf(state.text) >= 0) {
          filteredSearch.push(pastel);
        }
      }
      return filteredSearch;
    },
    carritoArray(state) {
      let filteredSearch = [];
      for (let pastel of state.carrito) {
        let name = pastel.name.toLowerCase();
        if (name.indexOf(state.text) >= 0) {
          filteredSearch.push(pastel);
        }
      }
      return filteredSearch;
    }
  },
  modules: {}
});
