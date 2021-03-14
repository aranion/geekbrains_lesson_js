Vue.component("products", {
  data() {
    return {
      imgCatalog: "https://placehold.it/200x150",
      catalogUrl: "/catalogData.json",
      products: [],
      filtered: [],
    };
  },
  methods: {},
  mounted() {
    this.$parent.getJson(API + this.catalogUrl).then((data) => {
      this.products = [...data];
      this.filtered = [...data];
    });
  },
  template: `
        <div class="products">
          <div class="product-clean" v-if="!filtered.length">Нет данных</div>
          <product 
            ref="refref"
            v-for="item of filtered" 
            v-else=''
            :key="item.id_product" 
            :img='imgCatalog' 
            :product='item'
          >
          </product>
        </div>
  `,
});

Vue.component("product", {
  props: ["product", "img"],
  template: `
        <div class="product-item" >
          <img :src="img" alt="Some img">
          <div class="desc">
              <h3>{{product.product_name}}</h3>
              <p>{{product.price}}₽</p>
              <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
          </div>
        </div>
  `,
});
