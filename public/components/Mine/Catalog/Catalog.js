Vue.component("Catalog", {
  props: ["store", "setCurrentTab", "setData"],
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$root.getJson("/api/products").then((data) => {
      this.setData("products", [...data]);
    });
    this.$root.getJson("/api/cart/").then((data) => {
      this.setData("cartItems", [...data.contents]);
    });
  },
  template: `
    <div>
      <section class="title center2">
        <h2 class="title__text">NEW ARRIVALS</h2>
        <nav class="title__nav_box">
          <a 
            class="title__nav_link" 
            v-on:click="setCurrentTab('home')"
          > HOME </a>
          <a 
            class="title__nav_link" 
            v-on:click="setCurrentTab('men')"
          > MEN </a>
          <a 
            class="title__nav_link title__link_active" 
            v-on:click="setCurrentTab('catalog')"
          > NEW ARRIVALS </a>
        </nav>
      </section>
      <Filters></Filters>
      <section class="featured featured__catalog center2">
        <div class="featured__items">
          <Good
            v-for="product of store.filtered"
            :key="product.id"
            :data="product"
            :cartItems="store.cartItems"
            :setCurrentTab="setCurrentTab"
            :setData="setData"
          ></Good>
        </div>
        
        <div class="pagination_catalog">
          <a class="pagination_left" href="#">
            <svg
              class="pagination__svg"
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
                fill=""
              />
            </svg>
          </a>
          <div 
            class="pagination_number"
          >
            <a class="pagination__link pagination_active" href="#">1</a>
            <a class="pagination__link" href="#">2</a>
            <a class="pagination__link" href="#">3</a>
            <a class="pagination__link" href="#">4</a>
            <a class="pagination__link" href="#">5</a>
            <a class="pagination__link" href="#">6</a>
            <a class="pagination__link pagination__more" href="#">.....</a>
            <a class="pagination__link" href="#">20</a>
          </div>
          <a class="pagination_right" href="#">
            <svg
              class="pagination__svg"
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                fill=""
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  `,
});
