/**
 * Корзина товаров
 */
class CartList {
  // Хранилище для товаров в корзине
  #goodsInCart;

  constructor(product, container = ".cart") {
    this.product = product;
    this.container = container;
  }
  // Добавить обработчики событий на кнопки
  #addEventButton(button) {}
  // Задать количество товаров
  #setValue(value) {}
  // Удалить товар из корзины
  #deleteGood(good) {}
  // Отрисовать отложенные в корзину товары
  #render() {}
}

/**
 * Элемент корзины товаров
 */
class CartItem {
  constructor(product, value = 1) {
    this.product = product; // Выбранный товар
    this.value = value; // Количество товаров
  }

  // Сформировать и вернуть разметку товара
  render() {
    return `<div class="cartItem"></div>`;
  }
}
