const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    isCatch: false,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((this.isCatch = false))
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
          this.isCatch = true;
        });
    },
  },
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
  //   this.getJson(API + this.url.catalog).then((data) => {
  //     this.products = [...data];
  //     this.filtered = [...data];
  //   });
  //   this.getJson(API + this.url.cart).then((data) => {
  //     this.cartProducts = [...data.contents];
  //   });
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  // mounted() {
  //   console.log("mounted");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  // destroyed() {
  //   console.log("beforeDestroy");
  // },
});
