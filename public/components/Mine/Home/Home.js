import Promo from "./Promo/Promo";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import Categories from "./Categories/Categories";

// Vue.component("Home", {
const Home = {
  props: ["store", "setCurrentTab", "setData"],
  components: {
    Promo,
    Categories,
    FeaturedItems,
  },
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
};
// );
export default Home;
