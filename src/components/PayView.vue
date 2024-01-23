<template>
  <div>
    <div v-if="productsStore().startCheckout === true">
      <stripe-checkout
        ref="checkoutRef"
        :line-items="productsStore().getLineItems()"
        :pk="publishableKey"
        billing-address-collection="required"
        mode="payment"
        @loading="(v) => (loading = v)"
      />
    </div>
    <button
      class="border border-white rounded-xl p-1.5 text-xs hover:bg-white hover:text-white-700"
      @click="submit"
    >
      PAY NOW
    </button>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import { productsStore } from "@/store/products";

const publishableKey = process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY;
console.log("key", publishableKey);
const loading = ref(false);
const checkoutRef = ref(null);

//const successURL = 'https://localhost/success';
//const cancelURL = 'https://localhost/cancel';

const submit = async () => {
  // starts the rendering of stripe
  productsStore().startCheckout = true;
  console.log("lineItems", productsStore().getLineItems());

  // Wait for the next DOM update cycle
  await nextTick();

  // Wait for the component to load
  if (checkoutRef.value) {
    checkoutRef.value.redirectToCheckout();
  } else {
    console.error("Stripe Checkout component not fully loaded.");
  }
};
</script>
