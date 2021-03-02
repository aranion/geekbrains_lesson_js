// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки.
// Придумать шаблон, который заменяет одинарные кавычки на двойные.

const text = document.querySelector(".textarea-class").value;
const regexp = new RegExp("'", "igm");

console.log(text.replace(regexp, '"'));

// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

console.log(text.replaceAll(/\B\'/gm, '"'));

// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. При нажатии
// на кнопку Отправить произвести валидацию полей

class CheckInput {
  // обект с колбеками, для масштабируемости и возможности использования имя свойства с целью определения нужного input
  _allCheckCallback = {
    name: (value) => this._checkInputName(value),
    phone: (value) => this._checkInputPhone(value),
    email: (value) => this._checkInputEmail(value),
    text: (value) => this._checkInputText(value),
  };

  constructor(container) {
    this.container = document.querySelector(container);
    this.inputs = this.container.querySelectorAll("input");
    this.button = this.container.querySelector("button");

    this._addEventSend();
  }

  /**
   * Добавление события на конопку
   */
  _addEventSend() {
    this.button.addEventListener("click", (event) => {
      event.preventDefault();
      this._check();
    });
  }

  /**
   * Проверка всех полей input
   */
  _check() {
    this.inputs.forEach((input) => {
      const nameFn = this._allCheckCallback[input.name](input.value);
      if (!nameFn) {
        input.classList.add("errInput");
      } else {
        input.classList.remove("errInput");
      }
    });
  }

  /**
   * Проверка поля Имя
   * @param {string} value текст из поля input
   */
  _checkInputName(value) {
    // a. Имя содержит только буквы. // добавил мин и мак количество символов
    return new RegExp(/^([a-z]|[а-яА-ЯёЁ]){3,16}$/, "ig").test(value);
  }

  /**
   * Проверка поля Телефон
   * @param {string} value текст из поля input
   */
  _checkInputPhone(value) {
    // b. Телефон имеет вид +7(000)000-0000.
    return new RegExp(/^\+7?(\(\d{3}\))?(\d{3})([\-]{1})(\d{4})$/, "ig").test(
      value
    );
  }

  /**
   * Проверка поля Почта
   * @param {string} value текст из поля input
   */
  _checkInputEmail(value) {
    // c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
    return new RegExp(/^[^@]+@[^@.]+\.[^@]+$/, "ig").test(value);
  }

  /**
   * Проверка поля текст
   * @param {string} value текст из поля input
   */
  _checkInputText(value) {
    // d. Текст произвольный.
    return new RegExp(/^[a-z]|[а-яА-ЯёЁ]$/, "igm").test(value);
  }
}
