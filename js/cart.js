class Cart extends List {
  constructor(container = ".cart-block", url = "/getBasket.json") {
    super(url, container);

    this.getJson().then((data) => this.handleData(data.contents));
  }

  addProduct(element) {
    this.getJson(`${API}/addToBasket.json`).then((data) => {
      if (data.result === 1) {
        let productId = +element.dataset["id"];
        let find = this.allProducts.find(
          (product) => product.id_product === productId
        );
        if (find) {
          find.quantity++;
          this._updateCart(find);
        } else {
          let product = {
            id_product: productId,
            price: +element.dataset["price"],
            product_name: element.dataset["name"],
            quantity: 1,
          };
          this.goods = [product];
          this.render();
        }
      } else {
        alert("Error");
      }
    });
  }

  removeProduct(element) {
    this.getJson(`${API}/deleteFromBasket.json`).then((data) => {
      if (data.result === 1) {
        let productId = +element.dataset["id"];
        let find = this.allProducts.find(
          (product) => product.id_product === productId
        );
        if (find.quantity > 1) {
          find.quantity--;
          this._updateCart(find);
        } else {
          this.allProducts.splice(this.allProducts.indexOf(find), 1);
          document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
        }
      } else {
        alert("Error");
      }
    });
  }

  _updateCart(product) {
    let block = document.querySelector(
      `.cart-item[data-id="${product.id_product}"]`
    );
    block.querySelector(
      ".product-quantity"
    ).textContent = `Количество: ${product.quantity}`;
    block.querySelector(".product-price").textContent = `${
      product.quantity * product.price
    } \u20bd`;
  }

  _init() {
    document.querySelector(".btn-cart").addEventListener("click", () => {
      document.querySelector(this.container).classList.toggle("invisible");
    });
    document
      .querySelector(this.container)
      .addEventListener("click", (event) => {
        if (event.target.classList.contains("del-btn")) {
          this.removeProduct(event.target);
        }
      });
  }
}

class CartItem extends Item {
  constructor(el, img = "https://placehold.it/50x100") {
    super(el, img);
    this.quantity = el.quantity;
  }

  render() {
    return `<div class="cart-item" data-id="${this.id_product}">
      <div class="product-bio">
        <img src="${this.img}" alt="Some image">
        <div class="product-desc">
          <p class="product-title">${this.product_name}</p>  
          <p class="product-quantity">Количество: ${this.quantity}</p>  
          <p class="product-single-price">${this.price} за ед.</p>  
        </div>
      </div>
      <div class="right-block">
        <p class="product-price">${this.quantity * this.price} \u20bd</p>
        <button class="del-btn" data-id="${this.id_product}">х</button>
      </div>
     </div>
     `;
  }
}

const listContext = {
  ProductList: ProductItem,
  Cart: CartItem,
};