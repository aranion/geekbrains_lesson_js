Vue.component("Promo", {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  template: `
    <section class="promo">
      <div class="promo__left">
        <img class="promo__img" src="./images/index/promo.jpg" alt="promo" />
      </div>
      <div class="promo__right">
        <div class="promo__right_first"></div>
        <div class="promo__heading">
          <h1 class="promo__title">THE BRAND</h1>
          <p class="promo__text">
            OF LUXERIOUS <span class="promo__text_span">FASHION</span>
          </p>
        </div>
      </div>
    </section>
  `,
});
