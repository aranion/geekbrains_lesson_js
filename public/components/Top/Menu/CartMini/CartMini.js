import CartMiniItem from "./CartMiniItem/CartMiniItem";

// Vue.component("CartMini", {
const CartMini = {
  props: ["cartItems", "setCurrentTab", "setData", "toggleVisible"],
  components: {
    CartMiniItem,
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    addProduct(item) {
      let find = this.cartItems.find((el) => el.id === item.id);
      if (find) {
        this.$root
          .putJson(`/api/cart/${find.id}`, { quantity: 1 })
          .then(find.quantity++);
      } else {
        let prod = { ...item, quantity: 1 };
        this.$root.postJson("/api/cart/", prod).then((data) => {
          if (data.result === 1) this.cartItems.push(prod);
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
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
        });
      }
    },
  },
  mounded() {},
  template: `
    <div v-on:mouseleave="toggleVisible('showCart')">
      <div class="goods-none" v-if="!cartItems.length"> Сart is empty </div>

      <CartMiniItem
        class='cart-item' 
        v-for="item of cartItems" 
        v-else="" 
        :key="item.id_product"
        :cartItem="item" 
        :removeProduct="removeProduct"
        :addProduct="addProduct"
      ></CartMiniItem>
      
      <div  v-show="cartItems.length">
        <div class="cart-block__line"></div>
        <div class="cart-block__total">
          <button 
            class="go-to-cart" 
            type="button" 
            v-show="cartItems.length"
            v-on:click="setCurrentTab('cart')"
          > Go to cart </button>
          <p>
            Total: 
            <span class="cart-block__summ-price">
              {{cartItems.reduce((sum, el) => sum += el.price*el.quantity,0)}} ₽
            </span>
          </p>
        </div>
      </div>
    </div>
  `,
};
// );
export default CartMini;
