Vue.component("error", {
  data() {
    return {
      textError: "Произошла ошибка при загрузке данных",
    };
  },
  template: `
          <div class='error'>
            <p>{{textError}} :( </p>
          </div>
  `,
});
