import Services from "./Services/Services";
import Subscribe from "./Subscribe/Subscribe";
import SocialLinks from "./SocialLinks/SocialLinks";
// Vue.component("Bottom", {
const Bottom = {
  components: {
    Services,
    Subscribe,
    SocialLinks,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  template: `
  <footer class="footer">
    <Services 
      :setCurrentTab="$root.setCurrentTab"
    ></Services>
    <Subscribe></Subscribe>
    <SocialLinks></SocialLinks>
  </footer>
  `,
};
// );
export default Bottom;
