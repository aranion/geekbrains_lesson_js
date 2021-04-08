Vue.component("Top", {
  props: ["store"],
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
        :cartItems="store.cartItems"
        :setCurrentTab="$root.setCurrentTab"
      ></Menu>
    </header>
  `,
});
