Vue.component("Search", {
  data() {
    return {
      imgSearch: "./images/all/search.svg",
      searchLine: "",
    };
  },
  methods: {},
  mounted() {},
  template: `
      <form action="#" class="search-form " 
        @submit.prevent='' 
        @input='filterGoods()'
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
