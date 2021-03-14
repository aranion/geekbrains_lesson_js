Vue.component("cart", {
  data() {
    return {
      imgCart: "https://placehold.it/50x100",
      url: {
        cart: "/getBasket.json",
        addCart: "/addToBasket.json",
        deleteCart: "/deleteFromBasket.json",
      },
      cartItems: [],
      showCart: true,
    };
  },
  methods: {
    addProduct(item) {
      this.$parent.getJson(API + this.url.addCart).then((data) => {
        if (data.result === 1) {
          let find = this.cartItems.find(
            (cartItem) => cartItem.id_product === +item.id_product
          );
          if (find) {
            find.quantity++;
          } else {
            this.cartItems.push({ ...item, quantity: 1 });
          }
        } else {
          alert("Error");
        }
      });
    },
    removeProduct(item) {
      this.$parent.getJson(API + this.url.deleteCart).then((data) => {
        if (data.result === 1) {
          if (item.quantity > 1 && item !== undefined) {
            item.quantity--;
          } else {
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
        } else {
          alert("Error");
        }
      });
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
  mounted() {
    this.$parent.getJson(API + this.url.cart).then((data) => {
      this.cartItems = [...data.contents];
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
                <button class="del-btn" @click='addProduct(cartItem)'>&#9650;</button>
                <button class="del-btn" @click='removeProduct(cartItem)'>&#9660;</button>
              </div>
          </div>
        </div>
  `,
});
