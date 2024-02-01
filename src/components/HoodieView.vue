<template>
  <div class="col-span-5 lg:col-span-2 lg:col-start-2 col-start-1">
    <Swiper
      ref="swiperRef"
      class=""
      @slideChange="onSlideChange"
      @swiper="onSwiper"
    >
      <SwiperSlide
        v-for="product in productsStore().products"
        :key="product.id"
      >
        <img
          alt="no image"
          class="mx-auto rounded-2xl"
          src="../assets/drinksoda_tshirt-front.png"
        />
        <div class="grid grid-cols-3 gap-5 lg:m-3 m-2">
          <!-- price size container-->
          <div class="col-span-3 text-center lg:text-4xl text-xl">
            <button
              v-for="size in product.sizes"
              :key="size"
              class="lg:mx-5 mx-3 hover:text-fuchsia-500 hover:text-black focus:text-fuchsia-500 focus:text-black"
              @click="changeSelectedSize(size)"
            >
              {{ size }}
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="grid grid-cols-5 text-center text-4xl lg:m-5">
      <div
        id="previousProduct"
        class="col-start-1 hover:bg-fuchsia-500 hover:text-black"
        @click="previousProduct"
      >
        &lt;
      </div>
      <button
        class="hover:bg-fuchsia-500 hover:text-black col-start-3 flex items-center justify-center text-center text-xs border border-white rounded-md p-1"
        @click="addToCart()"
      >
        CHOOSE
      </button>
      <div
        id="nextProduct"
        class="col-start-5 hover:bg-fuchsia-500 hover:text-black"
        @click="nextProduct"
      >
        &gt;
      </div>
      <!-- product description container-->
      <!-- product prices are fixed.-->
      <div
        class="col-span-5 border rounded-xl lg:m-8 m-4 lg:p-4 p-2 lg:text-xl text-xs"
      >
        <h1 class="lg:m-8 text-md mb-2">34.20€ - Drink Soda T-Shirt</h1>
        <p class="">High Quality T-Shirt with back and front print</p>
        <p class="">Printed in Vienna</p>
      </div>
    </div>
    <div class="grid grid-cols-5"></div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { productsStore } from "@/store/products";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import * as uuid from "uuid";

const selectedItemIndex = ref(null);
const selectedSize = ref("M");
const swiperRef = ref(null);

onMounted(async () => {
  await productsStore().fetchProducts();
});
const onSlideChange = (swiper) => {
  selectedItemIndex.value = swiper.activeIndex;
};
const onSwiper = (swiper) => {
  swiperRef.value = swiper;
  selectedItemIndex.value = swiper.activeIndex;
};

const changeSelectedSize = (size) => {
  // Update selectedSize variable
  selectedSize.value = size;

  // Update button styles in the current product
  const currentProduct = productsStore().products[selectedItemIndex.value];
  if (currentProduct) {
    currentProduct.selectedSize = size;
  }
};
const nextProduct = () => {
  console.log("swiper", swiperRef.value);
  try {
    swiperRef.value.slideNext();
  } catch (e) {
    console.error(e);
  }
};

const previousProduct = () => {
  try {
    swiperRef.value.slidePrev();
  } catch (e) {
    console.error(e);
  }
};

const selectedProduct = computed(() => {
  try {
    return productsStore().products.at(Number(selectedItemIndex.value));
  } catch (e) {
    console.error(e);
    return 0;
  }
});

const addToCart = () => {
  //Todo Error Handling
  if (selectedSize.value == null) {
    return;
  }
  //Todo check if the size is even available
  const price_euro = selectedProduct.value.price_euro;
  const info = selectedProduct.value.info;
  const image = selectedProduct.value.image;
  const name = selectedProduct.value.name;
  const price_ids = selectedProduct.value.price_ids;

  const cartProduct = {
    size: selectedSize.value,
    id: uuid.v4(),
    price_euro: price_euro,
    info: info,
    image: image,
    name: name,
    price_id: price_ids[selectedSize.value],
    quantity: 1,
  };
  // check if the item id already exist in list
  // if yes change the quantity by 1
  productsStore().addToCart(cartProduct);
};
</script>
<style scoped></style>
