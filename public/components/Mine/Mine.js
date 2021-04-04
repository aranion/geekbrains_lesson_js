Vue.component("Mine", {
  data() {
    return {};
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((err) => {
          console.log(err);
        });
    },
    deleteJson(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((result) => result.json())
        .catch((err) => {
          console.log(err);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((err) => console.log(err));
    },
    putJson(url, data) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => {
          result.json();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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
