Vue.component("search", {
  data() {
    return {
      searchLine: "",
    };
  },
  methods: {
    filterGoods() {
      const regexp = new RegExp(this.searchLine, "i");
      this.$root.$refs.products.filtered = this.$root.$refs.products.products.filter(
        (product) => regexp.test(product.product_name)
      );
    },
  },
  template: `
      <form action="#" class="search-form" @submit.prevent='' @input='filterGoods()'>
        <input type="text" class="search-field" v-model="searchLine">
        <button class="btn-search" type="submit">
            <i class="fas fa-search"></i>
        </button>
      </form>
  `,
});
