Vue.component("Mine", {
  props: ["store"],
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
});
