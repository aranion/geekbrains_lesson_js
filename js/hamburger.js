class Hamburger {
  #allCheckedElem = [];

  constructor(container = ".hamburger") {
    this.container = container;

    this.#addEventInput(this.container);
    this.#restartCalc();
  }
  #addEventInput(container) {
    // Добавление обработчика событий на все input в container
    document
      .querySelector(container)
      .querySelectorAll("input")
      .forEach((input) =>
        input.addEventListener("click", () => this.#restartCalc())
      );
  }

  #restartCalc() {
    // Запуск перерасчета данных
    this.#getCheckedInput("sizeHamburger", "stuffing", "extra");
    this.#renderResultCalc();
    this.#allCheckedElem = [];
  }

  #getCheckedInput(...classInputs) {
    // Получить выбранные inputs
    classInputs.forEach((elm) => {
      document
        .querySelector(`.${elm}`)
        .querySelectorAll("input")
        .forEach((input) => {
          if (input.checked) {
            this.#setDataCheckedInput(input);
          }
        });
    });
  }
  #setDataCheckedInput(input) {
    // Записать данные о цене и калориях в массив
    this.#allCheckedElem.push({
      price: +input.dataset["price"],
      calories: +input.dataset["calories"],
    });
  }
  #calculatePrice() {
    // Узнать цену
    return this.#allCheckedElem.reduce((sum, elm) => (sum += elm.price), 0);
  }
  #calculateCalories() {
    // Узнать калорийность
    return this.#allCheckedElem.reduce((sum, elm) => (sum += elm.calories), 0);
  }
  #renderResultCalc() {
    // Отрисовать результат вычислений
    return (document.querySelector(
      ".result"
    ).innerHTML = `Цена = <span>${this.#calculatePrice()} \u20bd</span>, калорий = <span>${this.#calculateCalories()}</span>`);
  }
}
