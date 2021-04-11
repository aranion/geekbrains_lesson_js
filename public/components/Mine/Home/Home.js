Vue.component("Home", {
  props: ["store", "setCurrentTab", "setData"],
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  template: `
    <div>
      <Promo></Promo>
      <Categories 
        :setCurrentTab="setCurrentTab" 
        :store="store"
      ></Categories>
      <FeaturedItems 
        :store="store" 
        :setCurrentTab="setCurrentTab"
        :setData="setData"
      ></FeaturedItems>
    </div>
  `,
});
