import { createApp } from "vue";
import ProductPage from "./ProductPage.vue";

class ProductElement extends HTMLElement {
  connectedCallback() {
    this._app = createApp(ProductPage);
    this._app.mount(this);
  }

  disconnectedCallback() {
    this._app.unmount();
  }
}

customElements.define("product-app", ProductElement);
