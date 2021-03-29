Vue.component("Subscribe", {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  template: `
    <div class="footer__center center">
      <figure class="footer__center_left">
        <img src="./images/all/photo_footer.png" alt="фото человека" />
        <figcaption class="footer__center_left_text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar
          purus condimentum“
        </figcaption>
      </figure>
      <div class="footer__center_right">
        <h6 class="footer__center_right_heading">SUBSCRIBE</h6>
        <p class="footer__center_right_text">
          FOR OUR NEWLETTER AND PROMOTION
        </p>
        <form class="footer__center_wrapper">
          <input class="footer__center_input" type="email" name="text" id="input_footer" required
            placeholder="Enter Your Email" />
          <button class="footer__center_button">Subscribe</button>
        </form>
      </div>
    </div>
    `,
});
