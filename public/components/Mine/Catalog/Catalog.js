Vue.component("Catalog", {
  data() {
    return {
      goods: [
        {
          id: 1,
          imgGood: "catalog1.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 52.0,
        },
        {
          id: 2,
          imgGood: "catalog2.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 51.0,
        },
        {
          id: 3,
          imgGood: "catalog3.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 53.0,
        },
        {
          id: 4,
          imgGood: "catalog4.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 54.0,
        },
        {
          id: 5,
          imgGood: "catalog5.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 55.0,
        },
        {
          id: 6,
          imgGood: "catalog6.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 56.0,
        },
        {
          id: 7,
          imgGood: "catalog7.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 57.0,
        },
        {
          id: 8,
          imgGood: "catalog8.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 58.0,
        },
        {
          id: 9,
          imgGood: "catalog9.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 59.0,
        },
        {
          id: 10,
          imgGood: "catalog10.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 510.0,
        },
        {
          id: 11,
          imgGood: "catalog11.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 511.0,
        },
        {
          id: 12,
          imgGood: "catalog12.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 512.0,
        },
        {
          id: 13,
          imgGood: "catalog1.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 52.0,
        },
        {
          id: 14,
          imgGood: "catalog2.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 51.0,
        },
        {
          id: 15,
          imgGood: "catalog3.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 53.0,
        },
        {
          id: 16,
          imgGood: "catalog4.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 54.0,
        },
        {
          id: 17,
          imgGood: "catalog5.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 55.0,
        },
        {
          id: 18,
          imgGood: "catalog6.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 56.0,
        },
        {
          id: 19,
          imgGood: "catalog7.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 57.0,
        },
        {
          id: 20,
          imgGood: "catalog8.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 58.0,
        },
        {
          id: 21,
          imgGood: "catalog9.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 59.0,
        },
        {
          id: 22,
          imgGood: "catalog10.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 510.0,
        },
        {
          id: 23,
          imgGood: "catalog11.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 511.0,
        },
        {
          id: 24,
          imgGood: "catalog12.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 512.0,
        },
        {
          id: 25,
          imgGood: "catalog1.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 52.0,
        },
        {
          id: 26,
          imgGood: "catalog2.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 51.0,
        },
        {
          id: 27,
          imgGood: "catalog3.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 53.0,
        },
        {
          id: 28,
          imgGood: "catalog4.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 54.0,
        },
        {
          id: 29,
          imgGood: "catalog5.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 55.0,
        },
        {
          id: 30,
          imgGood: "catalog6.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 56.0,
        },
        {
          id: 31,
          imgGood: "catalog7.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 57.0,
        },
        {
          id: 32,
          imgGood: "catalog8.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 58.0,
        },
        {
          id: 33,
          imgGood: "catalog9.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 59.0,
        },
        {
          id: 34,
          imgGood: "catalog10.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 510.0,
        },
        {
          id: 35,
          imgGood: "catalog11.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 511.0,
        },
        {
          id: 36,
          imgGood: "catalog12.jpg",
          alt: "популярные товары",
          title: "ELLERY X M'O CAPSULE",
          description: `Known for her sculptural takes on traditional tailoring,
          Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`,
          price: 512.0,
        },
      ],
      valuePagination: 6,
    };
  },
  methods: {},
  mounted() {},
  template: `
    <div>
      <section class="title center2">
        <h2 class="title__text">NEW ARRIVALS</h2>
        <nav class="title__nav_box">
          <a class="title__nav_link" href="./index.html">HOME</a>
          <a class="title__nav_link" href="#">MEN</a>
          <a class="title__nav_link title__link_active" href="./catalog.html"> 
            NEW ARRIVALS 
          </a>
        </nav>
      </section>
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
        <div class="sort__param">
          <details class="sort__open">
            <summary class="sort__param_span">
              TRENDING NOW
              <svg
                class="sort__param_svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
            <div class="sort__check sort__trending">
              <label>
                <input
                  class="sort__check_input"
                  type="checkbox"
                  name="trending"
                />
                trending1
              </label>

              <label>
                <input
                  class="sort__check_input"
                  type="checkbox"
                  name="trending"
                />
                trending2
              </label>
              <label>
                <input
                  class="sort__check_input"
                  type="checkbox"
                  name="trending"
                />
                trending3
              </label>
              <label>
                <input
                  class="sort__check_input"
                  type="checkbox"
                  name="trending"
                />
                trending4
              </label>
            </div>
          </details>
          <details class="sort__open">
            <summary class="sort__param_span">
              SIZE
              <svg
                class="sort__param_svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
            <div class="sort__check sort__size">
              <label>
                <input class="sort__check_input" type="checkbox" name="size" />
                XS
              </label>
              <label>
                <input class="sort__check_input" type="checkbox" name="size" />
                S
              </label>
              <label>
                <input class="sort__check_input" type="checkbox" name="size" />
                M
              </label>
              <label>
                <input class="sort__check_input" type="checkbox" name="size" />
                L
              </label>
            </div>
          </details>
          <details class="sort__open">
            <summary class="sort__param_span">
              PRICE
              <svg
                class="sort__param_svg"
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                  fill="#6F6E6E"
                />
              </svg>
            </summary>
            <div class="sort__check sort__price">
              <label
                ><input
                  class="sort__check_input"
                  type="checkbox"
                  name="price"
                />price1</label
              >
              <label
                ><input
                  class="sort__check_input"
                  type="checkbox"
                  name="price"
                />price2</label
              >
              <label
                ><input
                  class="sort__check_input"
                  type="checkbox"
                  name="price"
                />price3</label
              >
              <label
                ><input
                  class="sort__check_input"
                  type="checkbox"
                  name="price"
                />price4</label
              >
            </div>
          </details>
        </div>
      </div>
      <section class="featured featured__catalog center2">
        <div class="featured__items">
          <Good
            v-for="goodItem of goods"
            :key="goodItem.id"
            :data="goodItem"
          ></Good>
        </div>
        
        <div class="pagination_catalog">
          <a class="pagination_left" href="#">
            <svg
              class="pagination__svg"
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
                fill=""
              />
            </svg>
          </a>
          <div 
            class="pagination_number"
          >
            <a class="pagination__link pagination_active" href="#">1</a>
            <a class="pagination__link" href="#">2</a>
            <a class="pagination__link" href="#">3</a>
            <a class="pagination__link" href="#">4</a>
            <a class="pagination__link" href="#">5</a>
            <a class="pagination__link" href="#">6</a>
            <a class="pagination__link pagination__more" href="#">.....</a>
            <a class="pagination__link" href="#">20</a>
          </div>
          <a class="pagination_right" href="#">
            <svg
              class="pagination__svg"
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
                fill=""
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  `,
});
