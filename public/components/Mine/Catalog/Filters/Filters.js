Vue.component("Filters", {
  data() {
    return {};
  },
  template: `
    <div class="sort center2">
      <div class="sort__filter sort__filter_active">
        <div class="sort__filter_name">
          <span class="sort__title">FILTER</span>
          <svg
            class="sort__filter_svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
              fill=""
            />
          </svg>
        </div>
        <div class="sort__items">
          <details open autofocus>
            <summary class="sort__items_summary sort__items_summary_active">
              <span class="sort__items_leftBG"></span>
              <span class="sort__items_title"> CATEGORY </span>
            </summary>
            <ul class="sort__ul">
              <li class="sort__li">
                <a class="sort__link" href="">Accessories</a>
              </li>
              <li class="sort__li"><a class="sort__link" href="">Bags</a></li>
              <li class="sort__li"><a class="sort__link" href="">Denim</a></li>
              <li class="sort__li">
                <a class="sort__link" href="">Hoodies & Sweatshirts</a>
              </li>
              <li class="sort__li">
                <a class="sort__link" href="">Jackets & Coats</a>
              </li>
              <li class="sort__li"><a class="sort__link" href="">Polos</a></li>
              <li class="sort__li"><a class="sort__link" href="">Shirts</a></li>
              <li class="sort__li"><a class="sort__link" href="">Shoes</a></li>
              <li class="sort__li">
                <a class="sort__link" href="">Sweaters & Knits</a>
              </li>
              <li class="sort__li">
                <a class="sort__link" href="">T-Shirts</a>
              </li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
            </ul>
          </details>
          <details>
            <summary class="sort__items_summary">
              <span class="sort__items_leftBG"></span>
              <span class="sort__items_title"> BRAND </span>
            </summary>
            <ul class="sort__ul">
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
            </ul>
          </details>
          <details>
            <summary class="sort__items_summary">
              <span class="sort__items_leftBG"></span>
              <span class="sort__items_title"> DESIGNER </span>
            </summary>
            <ul class="sort__ul">
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
              <li class="sort__li"><a class="sort__link" href="">Tanks</a></li>
            </ul>
          </details>
        </div>
      </div>
      <Sort></Sort>
    </div>
  `,
});
