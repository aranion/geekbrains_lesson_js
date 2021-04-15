// Vue.component("Navigation", {
const Navigation = {
  props: ["setCurrentTab",    "store"],
  data() {
    return {};
  },
  methods: {
    filterMenu(value, categories) {
      this.store.filtered = this.store.products.filter(
        (product) => product[categories] === value
      );
      this.setCurrentTab("catalog");
    },
  },
  template: `
      <nav class="title__nav_box">
        <a class="title__nav_link" v-on:click="setCurrentTab('home')">HOME</a>
        <a class="title__nav_link" v-on:click="filterMenu('store.product.categories', 'categories')">{{store.product.categories.toUpperCase()}}</a>
        <a class="title__nav_link title__link_active" v-on:click="setCurrentTab('product')">
          NEW ARRIVALS
        </a>
      </nav>`,
};
// );
export default Navigation;
