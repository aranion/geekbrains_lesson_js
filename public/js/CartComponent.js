Vue.component("cart", {
  data() {
    return {
      imgCart: "https://placehold.it/50x100",
      cartItems: [],
      showCart: true,
    };
  },
  methods: {
    addProduct(item) {
      let find = this.cartItems.find((el) => el.id_product === item.id_product);

      if (find) {
        this.$parent
          .putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then(find.quantity++);
      } else {
        let prod = { ...item, quantity: 1 };
        this.$parent.postJson("/api/cart/", prod).then((data) => {
          if (data.result === 1) this.cartItems.push(prod);
        });
      }
    },
    removeProduct(item) {
      if (item.quantity > 1) {
        this.$parent
          .putJson(`/api/cart/${item.id_product}`, { quantity: -1 })
          .then(item.quantity--);
      } else {
        this.$parent.deleteJson(`/api/cart/${item.id_product}`).then((data) => {
          if (data.result === 1) {
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
        });
      }
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
  mounted() {
    this.$parent.getJson("/api/cart/").then((data) => {
      for (let el of data.contents) {
        this.cartItems.push(el);
      }
    });
  },
  template: `
          <div>
            <button class="btn-cart" type="button" @click='toggleCart()'>Корзина
                <span class="btn-cart_value" v-show='cartItems.length'>{{cartItems.length}}</span>
            </button>
            <div class="cart-block " :class='{invisible: showCart}'>
                <div class="goods-list" v-if="!cartItems.length"> Товаров в корзине нет</div>
                <cart-item 
                  class='cart-item' 
                  v-for="item of cartItems" 
                  v-else="" 
                  :key="item.id_product"
                  :cartItem="item" 
                  :img="imgCart"
                  :removeProduct='removeProduct'
                  :addProduct='addProduct'
                >
                </cart-item>
                <p class="product-summ-price" v-show="cartItems.length">
                  Всего: {{cartItems.reduce((sum, el) => sum += el.price*el.quantity,0)}} ₽
                </p>
            </div>
          </div>
  `,
});

Vue.component("cart-item", {
  props: ["cartItem", "img", "removeProduct", "addProduct"],
  data() {
    return {};
  },
  template: `
        <div class="cart-item" >
          <div class="product-bio">
              <img :src="img" alt="Some image">
              <div class="product-desc">
                  <p class="product-title">{{cartItem.product_name}}</p>
                  <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
                  <p class="product-single-price">{{cartItem.price}}₽ за ед.</p>
              </div>
          </div>
          <div class="right-block">
              <p class="product-price">{{cartItem.quantity * cartItem.price}}₽</p>
              <div class='control-btn'> 
                <button class="buy-btn" @click="addProduct(cartItem)">&#9650;</button>
                <button class="del-btn" @click="removeProduct(cartItem)">&#9660;</button>
              </div>
          </div>
        </div>
  `,
});
