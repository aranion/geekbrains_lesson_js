import Top from "./components/Top/Top";
import Mine from "./components/Mine/Mine";
import Bottom from "./components/Footer/Footer";

const app = new Vue({
  el: "#app",
  components: {
    Top,
    Mine,
    Bottom
    },
  data: {
    store: {
      product: [],
      products: [],
      filtered: [],
      cartItems: [],
      currentTab: "home",
    },
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((err) => {
          console.log(err);
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
        .catch((err) => {
          console.log(err);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((err) => console.log(err));
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
          result.json();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setCurrentTab(value) {
      this.store.currentTab = value;
    },
    setData(name, item) {
      if (name !== "product") this.store[name] = [...item];
      else this.store[name] = { ...item };
    },
  },
  mounted() {
    this.$root.getJson("/api/products").then((data) => {
      this.setData("filtered", [...data]);
    });
  },
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("created");
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

export default app;
