<template>
    <Transition>
        <div
        >
            <div class="grid grid-cols-12 grid-rows-3">
                <button class="col-span-1 col-start-1 row-start-1 text-xs" @click="closeSizingGuide">x</button>
                <div class="col-start-1 row-start-2 col-span-auto">
                    <table class="table-auto border border-black">
                    </table>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup>
import {popUpStore} from "@/store/popUpStore";

const closeSizingGuide = () => {
    if (popUpStore().showSizingGuide === true) {
        popUpStore().showSizingGuide = false;
    }
};
</script>
<style scoped>
.v-enter-active {
    animation: fadeIn 1s;
}

.v-leave-active {
    animation: fadeIn 1s reverse;
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