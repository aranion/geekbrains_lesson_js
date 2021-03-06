const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
  el: "#app",
  data: {
    catalogUrl: "/catalogData.json",
    imgCatalog: "https://placehold.it/200x150",
    imgCart: "https://placehold.it/50x100",
    products: [],
    cartProducts: [],
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
      this.getJson(`${API}/addToBasket.json`).then((data) => {
        if (data.result === 1) {
          let productId = +product.id_product;
          let find = this.cartProducts.find(
            (cartProduct) => cartProduct.id_product === productId
          );
          if (find) {
            find.quantity++;
          } else {
            let productNew = {
              id_product: productId,
              price: +product.price,
              product_name: product.product_name,
              quantity: 1,
            };
            this.cartProducts.push(productNew);
          }
        } else {
          alert("Error");
        }
      });
    },
    removeProduct(product) {
      this.getJson(`${API}/deleteFromBasket.json`).then((data) => {
        if (data.result === 1) {
          let productId = +product.id_product;
          let find = this.cartProducts.find(
            (product) => product.id_product === productId
          );
          if (find.quantity > 1) {
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
    },
    isVisibleCartFn() {
      console.log("isVisibleCartFn", this.isVisibleCart);
      this.isVisibleCart = !this.isVisibleCart;
      return this.isVisibleCart;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    this.getJson(`${API + this.catalogUrl}`).then((data) => {
      for (let el of data) {
        this.products.push(el);
      }
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
