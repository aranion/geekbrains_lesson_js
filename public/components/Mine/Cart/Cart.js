Vue.component("Cart", {
  data() {
    return {
      items: [
        {
          id: 1,
          imgUrl: "catalog3.jpg",
          alt: "одежда",
          title: "MANGO PEOPLE T-SHIRT",
          price: 300,
          color: "Red",
          size: "XXl",
          quantity: 1,
        },
        {
          id: 2,
          imgUrl: "catalog12.jpg",
          alt: "одежда",
          title: "MANGO PEOPLE T-SHIRT",
          price: 400,
          color: "Black",
          size: "Xl",
          quantity: 1,
        },
      ],
    };
  },
  methods: {
    setCurrentTab(value) {
      this.$root.$refs.Top.$refs.Menu.setCurrentTab(value);
    },
    totalPrice() {
      return this.items.reduce((sum, el) => (sum += el.price), 0);
    },
    clearCart() {
      this.items = [];
    },
  },
  mounted() {},
  template: `
    <div>
      <div class="title center">
        <h2 class="title__text title__text_mobile">SHOPPING CART</h2>
      </div>
      <div class="cart center2">
        <div class="cart__left">
          <CartItem 
            v-for="item of items"
            :key="item.id"
            :item="item"
          ></CartItem>
          <div class="cart__input">
            <a 
              class="button cart__input_link" 
              v-on:click="clearCart()"
            >
                CLEAR SHOPPING CART</a>
            <a 
              class="button cart__input_link" 
              v-on:click="setCurrentTab('catalog')">
                CONTINUE SHOPPING
            </a>
          </div>
        </div>
        <form class="cart__right">
          <h4 class="cart__right_title">SHIPPING ADRESS</h4>
          <div class="cart__right_row">
            <div class="cart__right_box1">
              <input
                class="cart__right_input"
                type="text"
                name="bangladesh"
                id="bangladesh"
                placeholder="Bangladesh"
                required
              />
              <input
                class="cart__right_input"
                type="text"
                name="state"
                id="state"
                placeholder="State"
                required
              />
              <input
                class="cart__right_input"
                type="number"
                name="postcode"
                id="postcode"
                placeholder="Postcode / Zip"
                required
              />
              <button class="button cart__right_button" type="submit">
                GET A QUOTE
              </button>
            </div>
            <div class="cart__right_box2">
              <div class="cart__right_sub">
                <span> SUB TOTAL </span>
                <span class="cart__right_sub-price">\${{ totalPrice()}}</span>
              </div>
              <div class="cart__right_grand">
                <span>GRAND TOTAL</span
                ><span class="cart__right_grand-price">\${{ totalPrice()}}</span>
              </div>
              <div class="cart__right_line"></div>
              <button class="button cart__right_button2" type="submit">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
});
