Vue.component("Good", {
  props: ["data"],
  data() {
    return {
      imgUrlBegin: "./images/catalog/",
      imgCart: "./images/all/cart.svg",
    };
  },
  methods: {},
  mounted() {},
  template: `
      <div class="featured__item">
        <div class="featured__item_img">
          <a href="./cart.html" class="featured__hover">
            <div class="featured__hover_text">
              <img class="featured__hover_cart" :src="imgCart" alt="корзина" />
              <span class="featured__hover_addCart">Add to Cart</span>
            </div>
          </a>
          <img :src="imgUrlBegin + data.imgGood" :alt="data.alt" />
        </div>
        <div class="featured__content">
          <h4 class="featured__content_title">
            <a class="featured__content_title_a" href="#">{{data.title}}</a>
          </h4>
          <p class="featured__content_text">
            {{data.description}}
          </p>
          <span class="featured__price">$ {{data.price}}</span>
        </div>
      </div>
  `,
});
