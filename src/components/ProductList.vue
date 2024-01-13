<template>
    <Transition>
        <div v-if="Number(!productsStore().cart.length) === 0"
             class="col-span-5 col-start-1 lg:col-span-1 lg:col-start-1 ">
            <!-- add an animation every time a new item gets added -->
            <TransitionGroup>
                <div v-for="cartItem in productsStore().cart"
                     :key="cartItem.id"
                     class="animated-cart-item grid grid-cols-5 text-center text-sm lg:p-3 m-3 border border-white rounded-2xl hover:bg-amber-500 hover:text-black">
                    <div>
                        <div class="text-xs lg:text-xs">{{ cartItem.quantity }}</div>
                        <div class="text-xs text-green-700">QTY</div>
                    </div>
                    <div class="">
                        <div class="text-xs lg:text-xs flex items-center justify-center flex-wrap">
                            {{ cartItem.size }}
                        </div>
                        <div class="text-xs text-green-700">SIZE</div>
                    </div>
                    <div>
                        <div class="text-xs lg:text-xs">{{ cartItem.name }}</div>
                        <div class="text-xs align-baseline text-green-700">ITEM</div>
                    </div>
                    <div>
                        <div class="text-xs lg:text-xs ">{{ cartItem.price_euro * cartItem.quantity }}</div>
                        <div class="text-xs text-green-700">€</div>
                    </div>
                    <div class="text-red-700 text-base lg:flex lg:items-center lg:justify-center"
                         @click="decrementAmountCount(cartItem)">-
                    </div>
                </div>
            </TransitionGroup>

            <div class="grid grid-cols-5 lg:grid-cols-10 lg:text-2l py-5">
                <div class="col-span-1 lg:col-span-3 col-start-1 lg:col-start-2 text-center lg:text-left">
                    {{ totalPrice }} €
                </div>
                <PayView class="lg:col-start-5 lg:col-span-2 col-span-2"/>
            </div>
        </div>
    </Transition>

</template>

<script setup>
import {productsStore} from "@/store/products";
import {computed} from "vue";
import PayView from "@/components/PayView.vue";

const decrementAmountCount = (item) => {
    productsStore().decrementAmountCount(item)
    console.log("delete", item)
}

const totalPrice = computed(() => {
    let totalValue = 0;
    for (const product of productsStore().cart) {
        totalValue += Number(product.price_euro) * product.quantity
        console.log(product, "price product")
    }
    return totalValue
})
</script>
<style scoped>
.v-enter-active {
    animation: fadeIn 750ms;
}

.v-leave-active {
    animation: fadeIn 200ms reverse;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>