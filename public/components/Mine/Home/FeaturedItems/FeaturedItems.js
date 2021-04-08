Vue.component("FeaturedItems", {
  props: ["store", "setCurrentTab", "setData"],
  data() {
    return {
      featured: [],
    };
  },
  methods: {},
  mounted() {
    this.$root.getJson("/api/products").then((data) => {
      this.setData("products", [...data]);

      for (let i = 0; i < 6; i++) {
        this.featured.push(this.store.products[i]);
      }
    });
    this.$root.getJson("/api/cart/").then((data) => {
      this.setData("cartItems", [...data.contents]);
    });
  },
  template: `
      <section class="featured featured__index center2">
        <h4 class="featured__heading">Featured Items</h4>
        <p class="featured__text">
          Shop for items based on what we featured in this week
        </p>
        <div class="featured__items">
          <Good
            v-for="goodItem of featured"
            :key="goodItem.id"
            :data="goodItem"
            :cartItems="store.cartItems"
            :setCurrentTab="setCurrentTab"
            :setData="setData"
          ></Good>
        </div>
        <div class="featured__footer center2">
          <a 
            class="button featured__button" 
            v-on:click="setCurrentTab('catalog')"
          >
            Browse All Product
          </a>
        </div>
      </section>
  `,
});
