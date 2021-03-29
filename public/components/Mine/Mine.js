Vue.component("Mine", {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {
    currentTabComponent: function () {
      return this.$root.$refs.Top.$refs.Menu.currentTab.toLowerCase();
    },
  },
  template: `
    <div>
      <component :is="currentTabComponent"></component>
    </div>
  `,
});
