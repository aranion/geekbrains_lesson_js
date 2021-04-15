import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Catalog from "./Catalog/Catalog";
import Product from "./Product/Product";
import Registration from "./Registration/Registration";
import Notfound from "../NotFound/NotFound";

// Vue.component("Mine", {
const Mine = {
  props: ["store"],
  components: {
    Home,
    Cart,
    Catalog,
    Product,
    Registration,
    Notfound,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {
    currentTabComponent: function () {
      return this.store.currentTab.toLowerCase();
    },
  },
  template: `
    <div>
      <component 
        :is="currentTabComponent" 
        :store="store"
        :setCurrentTab="$root.setCurrentTab"
        :setData="$root.setData"
      ></component>
    </div>
  `,
};
// );

export default Mine;
