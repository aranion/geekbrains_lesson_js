// Vue.component("Slider", {
const Slider = {
  props: ["images"],
  data() {
    return {};
  },
  template: `
    <div class="product">
      <div class="product__left">
        <svg
          class="product__left_svg"
          width="13"
          height="23"
          viewBox="0 0 13 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
            fill=""
          />
        </svg>
      </div>
      <div class="product__box">
        <img
          class="product__img"
          :src="'./images/product/' + images[0]"
          alt="продукт 1"
        />
      </div>
      <div class="product__right">
        <svg
          class="product__right_svg"
          width="13"
          height="23"
          viewBox="0 0 13 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z"
            fill=""
          />
        </svg>
      </div>
    </div>
  `,
};
// );
export default Slider;
