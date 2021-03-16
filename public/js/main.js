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
        .catch((err) => {
          this.$refs.error.setError(err);
          this.isCatch = true;
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((err) => this.$refs.error.setError(err));
    },
    putJson(url, data) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => {
          debugger;
          result.json();
        })
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    deleteJson(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
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
