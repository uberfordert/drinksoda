<template>
  <div id="app" class="font-BrunoAce bg-black text-white">
    <div class="flex flex-col min-h-screen">
      <!-- Main content area -->
      <HeaderBar />
      <div class="flex-1">
        <div class="grid grid-cols-5 lg:grid-cols-4 gap-y-8 p-2">
          <ShoppingCart />
          <HoodieList />
          <SideBarGif />
        </div>
      </div>
      <div class="">
        <BottomBar />
      </div>
    </div>
  </div>
</template>

<script>
import BottomBar from "@/components/BottomBar.vue";
import HoodieList from "@/components/HoodieView.vue";
import ProductList from "@/components/ProductList.vue";
import SideBarGif from "@/components/SideBarGif.vue";
import HeaderBar from "./components/HeaderBar.vue";

export default {
  name: "App",
  components: {
    SideBarGif,
    ShoppingCart: ProductList,
    HoodieList,
    BottomBar,
    HeaderBar,
  },
};
</script>
<style scoped>
/* Add any additional styles here */
</style>
