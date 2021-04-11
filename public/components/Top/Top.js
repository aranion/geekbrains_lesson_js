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
        :store="store"
        :setCurrentTab="$root.setCurrentTab"
        :setData="$root.setData"
      ></Menu>
    </header>
  `,
});
