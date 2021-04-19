import Menu from "./Menu/Menu";

// Vue.component("Top", {
const Top = {
  props: ["store"],
  components: {
    Menu,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  template: `
    <header >
      <Menu 
        ref="Menu" 
        class="header center"
        :store="store"
        :setCurrentTab="$root.setCurrentTab"
        :setData="$root.setData"
      ></Menu>
    </header>
  `,
};
// );

export default Top;
