Vue.component("Navigation", {
  data() {
    return {};
  },
  methods: {
    setCurrentTab(value) {
      this.$root.$refs.Top.$refs.Menu.setCurrentTab(value);
    },
  },
  template: `
      <nav class="title__nav_box">
        <a class="title__nav_link" v-on:click="setCurrentTab('home')">HOME</a>
        <a class="title__nav_link" v-on:click="setCurrentTab('men')">MEN</a>
        <a class="title__nav_link title__link_active" v-on:click="setCurrentTab('product')">
          NEW ARRIVALS
        </a>
      </nav>`,
});
