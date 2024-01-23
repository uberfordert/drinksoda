<template>
    <Transition>
        <div
            v-if="popUpStore().showSizingGuide"
            class="mx-6 my-6 bg-fuchsia-500 border border-red-400 text-red-700 px-4 py-3 rounded absolute"
            role="alert"
        >
            <div class="grid grid-cols-12 grid-rows-3">
                <button class="col-span-1 col-start-1 row-start-1 text-xs" @click="closeSizingGuide">x</button>
                <div class="col-start-1 row-start-2 col-span-auto">
                    <table class="table-auto border border-black">
                        <thead>
                        <tr>
                            <th>EU</th>
                            <th>NA</th>
                            <th>UK</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>20</th>
                            <th>40</th>
                            <th>30</th>
                        </tr>
                        </tbody>
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