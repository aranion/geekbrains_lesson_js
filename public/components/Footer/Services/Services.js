Vue.component("Services", {
  data() {
    return {
      data: [
        {
          id: 1,
          imgUrl: "footer_icon.png",
          alt: "машина",
          titleLink: "Free Delivery",
          link: "#",
          text: ` Worldwide delivery on all. Authorit tively morph next-generation
          innov tion with extensive models.`,
        },
        {
          id: 2,
          imgUrl: "footer_icon2.png",
          alt: "скидка",
          titleLink: "Sales & discounts",
          link: "#",
          text: ` Worldwide delivery on all. Authorit tively morph next-generation
          innov tion with extensive models.`,
        },
        {
          id: 3,
          imgUrl: "footer_icon3.png",
          alt: "корона",
          titleLink: "Quality assurance",
          link: "#",
          text: ` Worldwide delivery on all. Authorit tively morph next-generation
          innov tion with extensive models.`,
        },
      ],
    };
  },
  methods: {},
  mounted() {},
  template: `
  <div class="footer__top center">
    <div class="footer__top_item"
      v-for="item of data"
      :key= item.id
    >
      <img 
        :src="'./images/all/' + item.imgUrl" 
        :alt="item.alt" 
      />
      <h5 class="footer__top_title">
        <a class="footer__top_title_a" 
          v-on:click="$root.$refs.Top.$refs.Menu.currentTab = 'notfound'"
        >{{item.titleLink}}</a>
      </h5>
      <p class="footer__top_text">
        {{item.text}}
      </p>
    </div>
  </div>
  `,
});
