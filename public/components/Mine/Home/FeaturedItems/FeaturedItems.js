Vue.component("FeaturedItems", {
  data() {
    return {
      goods: [
        {
          id: 1,
          imgUrl: "catalog1.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 52.0,
        },
        {
          id: 2,
          imgUrl: "catalog2.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 51.0,
        },
        {
          id: 3,
          imgUrl: "catalog3.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 53.0,
        },
        {
          id: 4,
          imgUrl: "catalog4.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 54.0,
        },
        {
          id: 5,
          imgUrl: "catalog5.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 55.0,
        },
        {
          id: 6,
          imgUrl: "catalog6.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 56.0,
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  template: `
      <section class="featured featured__index center2">
        <h4 class="featured__heading">Featured Items</h4>
        <p class="featured__text">
          Shop for items based on what we featured in this week
        </p>
        <div class="featured__items">
          <Good
            v-for="goodItem of goods"
            :key="goodItem.id"
            :data="goodItem"
          ></Good>
        </div>
        <div class="featured__footer center2">
          <a class="button featured__button" href="./catalog.html">
            Browse All Product
          </a>
        </div>
      </section>
  `,
});
