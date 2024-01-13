<template>
    <div id="app" class="font-BrunoAce bg-zinc-900 text-white">
        <div class="flex flex-col min-h-screen">
            <!-- Main content area -->
            <div class="flex-1">
                <HeaderBar/>
                <SizingGuide/>
                <div class="grid grid-cols-5 lg:grid-cols-4 gap-y-8 p-2">
                    <ShoppingCart/>
                    <HoodieList/>
                    <SideBarGif/>
                </div>
            </div>
            <div class="">
                <BottomBar/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import BottomBar from "@/components/BottomBar.vue";
import HoodieList from "@/components/HoodieView.vue";
import ProductList from "@/components/ProductList.vue";
import SideBarGif from "@/components/SideBarGif.vue";
import SizingGuide from "@/components/SizingGuide.vue";

export default {
    name: 'App',
    components: {SizingGuide, SideBarGif, ShoppingCart: ProductList, HoodieList, BottomBar, HeaderBar},
}
</script>

<style scoped>

/* Add any additional styles here */
</style>
