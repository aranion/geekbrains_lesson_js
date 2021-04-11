Vue.component("CartMiniItem", {
  props: ["cartItem", "removeProduct", "addProduct"],
  data() {
    return {};
  },
  template: `
        <div class="cart-item" >
          <div class="cart-item__product">
              <img :src="'./images/catalog/' + cartItem.imgUrl" alt="Some image">
              <div class="cart-item__desc">
                  <a href="#" class="cart-item__title">{{cartItem.title}}</a>
                  <p class="cart-item__quantity">Количество: {{cartItem.quantity}}</p>
                  <p class="cart-item__single-price">{{cartItem.price}}₽ за ед.</p>
              </div>
          </div>
          <div class="cart-block__right">
              <p class="cart-item__price">{{cartItem.quantity * cartItem.price}}₽</p>
              <div class='control-btn'> 
                <button class="buy-btn" @click="addProduct(cartItem)">&#9650;</button>
                <button class="del-btn" @click="removeProduct(cartItem)">&#9660;</button>
              </div>
          </div>
        </div>
  `,
});
