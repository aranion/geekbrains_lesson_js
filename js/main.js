document.addEventListener("DOMContentLoaded", () => {
  class List {
    constructor(url, container, list = listContext) {
      this.url = url;
      this.container = container;
      this.list = list;
      this.goods = [];
      this.allProducts = [];
      this.filtered = [];
  
      this._init();
    }
  
    getJson(url) {
      return fetch(url ? url : `${API + this.url}`)
        .then((result) => result.json())
        .catch((err) => console.log(err));
    }
  
    handleData(data) {
      this.goods = [...data];
      this.render();
    }
    calcSum() {
      return this.allProducts.reduce((sum, item) => sum + item.price, 0);
    }
  
    render() {
      for (const product of this.goods) {
        const productObj = new this.list[this.constructor.name](product);
  
        this.allProducts.push(productObj);
        document
          .querySelector(this.container)
          .insertAdjacentHTML("beforeend", productObj.render());
      }
    }
  
    filter(value) {
      const regexp = new RegExp(value, "i");
      this.filtered = this.allProducts.filter((product) =>
        regexp.test(product.product_name)
      );
      this.allProducts.forEach((el) => el);
    }
  
    _init() {
      return false;
    }
  }
  
  class Item {
    constructor(el, img = "https://placehold.it/200x150") {
      this.product_name = el.product_name;
      this.price = el.price;
      this.id_product = el.id_product;
      this.img = img;
    }
  
    render() {
      return "";
    }
  }
  
  const cart = new Cart();
  const products = new ProductList(cart);
  // const productList = new ProductList();
  const menuElem = new Menu(); 
  const hamburger = new Hamburger();

});
