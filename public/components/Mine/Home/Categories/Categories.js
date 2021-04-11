Vue.component("Categories", {
  props: ["setCurrentTab", "store"],
  data() {
    return {
      data: [
        {
          id: 1,
          imgUrl: "catalog1.jpg",
          alt: "каталог1",
          title: "woman",
          text: "30% OFF",
        },
        {
          id: 2,
          imgUrl: "catalog2.jpg",
          alt: "каталог2",
          title: "man",
          text: "HOT DEAL",
        },
        {
          id: 3,
          imgUrl: "catalog3.jpg",
          alt: "каталог3",
          title: "kids",
          text: "NEW ARRIVALS",
        },
      ],
    };
  },
  methods: {
    filterMenu(value, categories) {
      this.store.filtered = this.store.products.filter(
        (product) => product[categories] === value
      );
      this.setCurrentTab("catalog");
    },
  },
  mounted() {},
  template: `
    <div>
      <section class="catalog center2 catalog__center">
        <div class="catalog__item" 
          v-for="item of data"
          :key="item.id"
        >
          <img class="catalog__imag" 
            :src="'./images/index/' + item.imgUrl" 
            :alt="item.alt" />
          <div class="catalog__content">
            <a v-on:click="filterMenu(item.title, 'categories')">
              <p class="catalog__text">{{item.text}}</p>
              <h3 class="catalog__heading">{{'FOR ' + item.title}}</h3>
            </a>
          </div>
        </div>
      </section>
      <section class="catalog__item_big center2 catalog__center">
        <img class="catalog__big_img" src="./images/index/catalogBig.jpg" alt="каталог4" />
        <div class="catalog__content">
          <a v-on:click="filterMenu('Accessories', 'type')">
            <p class="catalog__text">LUXIROUS & TRENDY</p>
            <h3 class="catalog__heading">ACCESORIES</h3>
          </a>
        </div>
      </section>
    </div>
  `,
});
