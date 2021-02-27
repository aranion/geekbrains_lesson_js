class Menu {
  constructor(container = ".menu") {
    this.container = container;

    this.#addEventButtonMenu();
  }

  /**
   * Добавить обработчик событий на кнопки меню
   */
  #addEventButtonMenu() {
    document
      .querySelector(this.container)
      .querySelectorAll("button")
      .forEach((button) =>
        button.addEventListener("click", (event) => {
          this.#controlActiveButton(event.target);
          this.#showContent(event.target);
        })
      );
  }

  /**
   * Показать контент
   * @param {Element} typeContent Кнопка по которой произошел клик
   */
  #showContent(button) {
    const contents = document.querySelector(".content").children;

    for (let i = 0; i < contents.length; i++) {
      if (!contents[i].classList.contains(button.dataset.typecontent)) {
        contents[i].classList.add("invisible");
      } else {
        contents[i].classList.remove("invisible");
      }
    }
  }

  /**
   * Изменение стиля активной кнопки
   * @param {Element} button Кнопка по которой произошел клик
   */
  #controlActiveButton(button) {
    document
      .querySelector(".menu")
      .querySelectorAll("button")
      .forEach((btn) => {
        btn.classList.remove("active");
      });
    button.classList.add("active");
  }
}
