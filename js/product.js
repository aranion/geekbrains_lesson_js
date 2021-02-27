class ProductList {
  #goods;
  #allProducts;

  constructor(container = ".productsItems") {
    this.container = container;
    this.#goods = [];
    this.#allProducts = [];

    this.#fetchGoods();
    this.#render();
    this.#renderGoodsTotalPrice();
  }

  #render() {
    const block = document.querySelector(this.container);

    this.#goods.forEach((product) => {
      const productObject = new ProductItem(product);
      this.#allProducts.push(productObject);
      block.insertAdjacentHTML("beforeend", productObject.render());
    });
  }

  #fetchGoods() {
    this.#goods = [
      { id: 1, title: "Notebook", price: 20000 },
      { id: 2, title: "Mouse", price: 1500 },
      { id: 3, title: "Keyboard", price: 5000 },
      { id: 4, title: "Gamepad", price: 4500 },
    ];
  }

  #getGoodsTotalPrice() {
    return this.#goods.reduce((sum, good) => (sum += good.price), 0);
  }

  #renderGoodsTotalPrice(container = ".goodsTotalPrice") {
    document
      .querySelector(container)
      .insertAdjacentText(
        "beforeend",
        `Сумма товаров= ${this.#getGoodsTotalPrice()} \u20bd`
      );
  }
}

class ProductItem {
  constructor(product, img = "https://placehold.it/200x150") {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img" class='product_img'>
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
  }
}
