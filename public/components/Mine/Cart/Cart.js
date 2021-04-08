Vue.component("Cart", {
  props: ["store", "setCurrentTab", "setData"],
  data() {
    return {};
  },
  methods: {
    totalPrice() {
      return this.store.cartItems.reduce(
        (sum, el) => (sum += el.price * el.quantity),
        0
      );
    },
    addProduct(item) {
      let find = this.store.cartItems.find((el) => el.id === item.id);
      if (find) {
        this.$root
          .putJson(`/api/cart/${find.id}`, { quantity: 1 })
          .then(find.quantity++);
      } else {
        let prod = { ...item, quantity: 1 };
        this.$root.postJson("/api/cart/", prod).then((data) => {
          if (data.result === 1) this.store.cartItems.push(prod);
        });
      }
    },
    removeProduct(item) {
      if (item.quantity > 1) {
        this.$root
          .putJson(`/api/cart/${item.id}`, { quantity: -1 })
          .then(item.quantity--);
      } else {
        this.$root.deleteJson(`/api/cart/${item.id}`).then((data) => {
          if (data.result === 1) {
            this.store.cartItems.splice(this.store.cartItems.indexOf(item), 1);
          }
        });
      }
    },
    deleteProduct(item) {
      this.$root.deleteJson(`/api/cart/${item.id}`).then((data) => {
        if (data.result === 1) {
          this.store.cartItems.splice(this.store.cartItems.indexOf(item), 1);
        }
      });
    },
    clearCart() {
      this.$root.deleteJson(`/api/cart/clear`).then((data) => {
        if (data.result === 1) {
          this.store.cartItems = [];
        }
      });
    },
  },
  mounted() {
    this.$root.getJson("/api/cart/").then((data) => {
      this.setData("cartItems", [...data.contents]);
    });
  },
  template: `
    <div>
      <div class="title center">
        <h2 class="title__text title__text_mobile">SHOPPING CART</h2>
      </div>
      <div class="cart center2">
        <div class="cart__left">
          <CartItem 
            v-for="item of store.cartItems"
            :key="item.id"
            :item="item"
            :removeProduct="removeProduct"
            :addProduct="addProduct"
            :deleteProduct="deleteProduct"
            :setCurrentTab="setCurrentTab"
            :setData="setData"
          ></CartItem>
          <div class="cart__input">
            <a 
              class="button cart__input_link" 
              v-on:click="clearCart()"
            >
              CLEAR SHOPPING CART
            </a>
            <a 
              class="button cart__input_link" 
              v-on:click="setCurrentTab('catalog')"
            >
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
                <span>GRAND TOTAL</span>
                <span class="cart__right_grand-price">\${{ totalPrice()}}</span>
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
