Vue.component("Search", {
  props: ["store","setCurrentTab"],
  data() {
    return {
      imgSearch: "./images/all/search.svg",
      searchLine: "",
    };
  },
  methods: {
    filterGoods() {
      const regexp = new RegExp(this.searchLine, "i");
      this.store.filtered = this.store.products.filter(
        (product) => regexp.test(product.title)
      );
    },
  },
  mounted() {},
  template: `
      <form action="#" class="search-form " 
        @submit.prevent='' 
        @input="filterGoods(); setCurrentTab('catalog')"
      >
        <input type="text" class="search-field" 
          v-model="searchLine"
        >
        <button class="btn-search" type="submit">
            <i class="fas fa-search"></i>
        </button>
      </form>   
  `,
});
