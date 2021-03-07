const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    url: {
      catalog: "/catalogData.json",
      cart: "/getBasket.json",
      deleteCart: "/deleteFromBasket.json",
      addCart: "/addToBasket.json",
    },
    imgCatalog: "https://placehold.it/200x150",
    imgCart: "https://placehold.it/50x100",
    products: [],
    cartProducts: [],
    filtered: [],
    quantity: 1,
    searchLine: "",
    isVisibleCart: true,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          console.log(error);
        });
    },
    addProduct(product) {
      console.log(product);
      this.getJson(API + this.url.addCart).then((data) => {
        if (data.result === 1) {
          let find = this.cartProducts.find(
            (cartProduct) => cartProduct.id_product === +product.id_product
          );
          if (find) {
            find.quantity++;
          } else {
            this.cartProducts.push({ ...product, quantity: 1 });
          }
        } else {
          alert("Error");
        }
      });
    },
    removeProduct(product) {
      this.getJson(API + this.url.deleteCart).then((data) => {
        if (data.result === 1) {
          let find = this.cartProducts.find(
            (product) => product.id_product === +product.id_product
          );
          if (find.quantity > 1 && find !== undefined) {
            // переодически проскакивает ошибка 'quantity of undefined' когда быстро
            // и много раз нажимаю на кнопку удаления, поэтому проверка на undefined
            find.quantity--;
          } else {
            this.cartProducts.splice(this.cartProducts.indexOf(find), 1);
          }
        } else {
          alert("Error");
        }
      });
    },
    filterGoods() {
      console.log("filterGoods");
      const regexp = new RegExp(this.searchLine, "i");

      this.filtered = this.products.filter((product) =>
        regexp.test(product.product_name)
      );
    },
    toggleCart() {
      this.isVisibleCart = !this.isVisibleCart;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    this.getJson(API + this.url.catalog).then((data) => {
      this.products = [...data];
      this.filtered = [...data];
    });
    this.getJson(API + this.url.cart).then((data) => {
      this.cartProducts = [...data.contents];
    });
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("beforeDestroy");
  },
});
