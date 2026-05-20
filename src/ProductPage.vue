<template>
  <div style="padding: 2rem; background: #e8f5e9">
    <h2>Product App</h2>
    <div
      v-for="product in products"
      :key="product.id"
      style="margin-bottom: 1rem"
    >
      <p>{{ product.name }} - ${{ product.price }}</p>
      <button
        @click="addToCart(product)"
        style="
          padding: 8px 16px;
          background: #2e7d32;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        "
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      products: [
        { id: 1, name: "Nike Shoes", price: 99 },
        { id: 2, name: "Shirt", price: 49 },
        { id: 3, name: "Hat", price: 19 },
      ],
    };
  },
  methods: {
    addToCart(product) {
      // broadcast event to window
      window.dispatchEvent(
        new CustomEvent("cart:item-added", {
          detail: product,
        }),
      );
    },
  },
};
</script>
