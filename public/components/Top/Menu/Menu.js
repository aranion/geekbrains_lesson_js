Vue.component("Menu", {
  data() {
    return {
      data: [
        {
          title: "man",
          id: 1,
          items: [
            { id: 1, name: "Accessories", link: "#1" },
            { id: 2, name: "Bags", link: "#2" },
            { id: 3, name: "Denim", link: "#3" },
            { id: 4, name: "T-Shirts", link: "#4" },
          ],
        },
        {
          title: "woman",
          id: 2,
          items: [
            { id: 1, name: "Accessories", link: "#1" },
            { id: 2, name: "Jackets & Coats", link: "#2" },
            { id: 3, name: "Polos", link: "#3" },
            { id: 4, name: "T-Shirts", link: "#4" },
            { id: 5, name: "Shirts", link: "#5" },
          ],
        },
        {
          title: "kids",
          id: 3,
          items: [
            { id: 1, name: "Accessories", link: "#1" },
            { id: 2, name: "Jackets & Coats", link: "#2" },
            { id: 3, name: "Polos", link: "#3" },
            { id: 4, name: "T-Shirts", link: "#4" },
            { id: 5, name: "Shirts", link: "#5" },
            { id: 6, name: "Bags", link: "#6" },
          ],
        },
      ],
      imgLogo: "./images/all/logo.svg",
      currentTab: "home",
    };
  },
  methods: {
    setCurrentTab(value) {
      this.currentTab = value;
    },
  },
  mounted() {},
  template: `
  <div>
    <div class="header__left">
      <a v-on:click="currentTab = 'home'">
        <img 
          :src="imgLogo" 
          alt="логотип" 
        />
      </a>
    </div>
    <nav class="header__right">
      <Search ref="Search"></Search>
      <input type="checkbox" name="switcher" id="switcher" />
      <label for="switcher">
        <img id="menu" src="./images/all/menu.svg" alt="меню" />
      </label>
      <div class="header__menu_wrapper">
        <div class="header__menu_box">
          <div class="header__box header__box_nav">
            <a class="header__account_nav" v-on:click="setCurrentTab('registration')">
              <img src="./images/all/account.svg" alt="аккаунт" />
            </a>
            <a class="header__cart_nav" v-on:click="setCurrentTab('cart')">
              <img src="./images/all/cart.svg" alt="корзина" />
            </a>
          </div>
          <a class="header__menu_svg" href="#">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
                fill="#6F6E6E" />
            </svg>
          </a>
          <span class="header__menu_title">MENU</span>
          <div 
            v-for="item of data" 
            :key="item.id"
          >
            <a class="header__menu_type" v-on:click="setCurrentTab('catalog')">{{item.title}}</a>
            <ul>
              <li 
                v-for="itemLi of item.items"  
                :key="itemLi.id"
              >
                <a class="header__menu_link" v-on:click="setCurrentTab('product')">{{itemLi.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header__box">
        <a class="header__account" v-on:click="setCurrentTab('registration')">
          <img src="./images/all/account.svg" alt="аккаунт" />
        </a>
        <a class="header__cart" v-on:click="setCurrentTab('cart')">
          <img src="./images/all/cart.svg" alt="корзина" />
        </a>
      </div>
    </nav>
  </div>
  `,
});