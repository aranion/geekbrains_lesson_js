const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

// let getRequest = (url, callBack) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log("Error");
//       } else {
//         callBack(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };

// Для задания №1 и 3 из 3 урока
let getRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status !== 200) {
          reject("Error");
        } else {
          resolve(xhr.responseText);
        }
      }
    };
    xhr.send();
  });
};

// class ProductListOld {
//   #goods;
//   #allProducts;

//   constructor(container = ".productsItems") {
//     this.container = container;
//     this.#goods = [];
//     this.#allProducts = [];

//     // this.#fetchGoods();
//     // this.#fetchGoodsPromise(); // Для задания №1 и 3 из 3 урока

//     this.#getProducts().then((data) => {
//       this.#goods = [...data];
//       this.#render();
//       this.#renderGoodsTotalPrice();
//     });
//   }

//   #render() {
//     const block = document.querySelector(this.container);

//     this.#goods.forEach((product) => {
//       const productObject = new ProductItem(product);
//       this.#allProducts.push(productObject);
//       block.insertAdjacentHTML("beforeend", productObject.render());
//     });
//   }

//   // #fetchGoods() {
//   //   getRequest(`${API}/catalogData.json`, (data) => {
//   //     this.#goods = JSON.parse(data);
//   //     this.#render();
//   //     this.#renderGoodsTotalPrice();
//   //   });
//   // }

//   // #fetchGoodsPromise() {
//   //   // Для задания №1 и 3 из 3 урока
//   //   getRequestPromise(`${API}/catalogData.json`)
//   //     .then((resolve) => {
//   //       this.#goods = JSON.parse(resolve);
//   //       this.#render();
//   //       this.#renderGoodsTotalPrice();
//   //     })
//   //     .catch((err) => console.log(err));
//   // }

//   #getProducts() {
//     return fetch(`${API}/catalogData.json`)
//       .then((response) => response.json())
//       .catch((err) => console.log(err));
//   }

//   #getGoodsTotalPrice() {
//     return this.#goods.reduce((sum, good) => (sum += good.price), 0);
//   }

//   #renderGoodsTotalPrice(container = ".goodsTotalPrice") {
//     document
//       .querySelector(container)
//       .insertAdjacentText(
//         "beforeend",
//         `Сумма товаров= ${this.#getGoodsTotalPrice()} \u20bd`
//       );
//   }
// }

// class ProductItemOld {
//   constructor(product, img = "https://placehold.it/200x150") {
//     this.title = product.product_name;
//     this.price = product.price;
//     this.id = product.id_product;
//     this.img = img;
//   }

//   render() {
//     return `<div class="product-item" data-id="${this.id}">
//               <img src="${this.img}" alt="Some img" class='product_img'>
//               <div class="desc">
//                   <h3>${this.title}</h3>
//                   <p>${this.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//             </div>`;
//   }
// }

///////////////////////////////////////////////////////
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
    this.filtered = this.allProducts.filter((product) => {
      return regexp.test(product.product_name);
    });
    this.allProducts.forEach((el) => {
      console.log(el);
    });
  }

  _init() {
    return false;
  }
  getGoodsTotalPrice() {
    return this.allProducts.reduce((sum, good) => (sum += good.price), 0);
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

class ProductList extends List {
  constructor(cart, container = ".products", url = "/catalogData.json") {
    super(url, container);
    this.cart = cart;
    this.getJson().then((data) => this.handleData(data));
  }

  _init() {
    document
      .querySelector(this.container)
      .addEventListener("click", (event) => {
        if (event.target.classList.contains("buy-btn")) {
          this.cart.addProduct(event.target);
        }
      });
    document
      .querySelector(".search-form")
      .addEventListener("change", (event) => {
        event.preventDefault();
        this.filter(document.querySelector(".search-field").value);
      });
  }
}

class ProductItem extends Item {
  render() {
    return `<div class="product-item" data-id="${this.id_product}">
    <img src="${this.img}" alt="Some img" class='product_img'>
    <div class="desc">
        <h3>${this.product_name}</h3>
        <p>${this.price} \u20bd</p>
        <button class="buy-btn"
          data-id="${this.id_product}"
          data-name="${this.product_name}"
          data-price="${this.price}">Купить</button>
    </div>
  </div>`;
  }
}
