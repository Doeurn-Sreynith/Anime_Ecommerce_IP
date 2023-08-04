<template>
    <defaultLayout>
        <main class="bg-[#eafdfc] w-full">
            <div class="text-lg p-2">
                <p>nidokka@gmail.com</p>
                <p>to me</p>
            </div>
            <div class="flex w-full items-center p-8 gap-8">
                <div class="w-[200px]">
                    <img src="../assets/panda.png" alt="">
                </div>
                <h1 class="font-bold text-sky-400 text-6xl"> Anime Shop</h1>
            </div>
            <h1 class="px-8 font-serif text-3xl">
                Thank You For Your Purchase!🐼
            </h1>
            <div class="flex items-center gap-5 p-8">
                <button class="border p-1 text-lg border-red-200 bg-[#e9f844] shadow-xl hover:bg-slate-400">View Your
                    Order</button>
                <div class="flex gap-2">
                    <p>or</p>
                    <a href="" class="text-blue-600 hover:text-sky-400">Visit our Store</a>
                </div>

            </div>
            <hr class="my-6 bg-[#CAC0C0] h-1 border-t-0 " />
            <h1 class="px-8 font-serif text-3xl">Order Summary</h1>
            <div class="w-full p-8 flex items-center gap-96 m-auto">
                <div class="product5 bg-[#06283d] p-2 w-[12%] rounded-md drop-shadow-xl">
                    <img src="../assets/pic8-removebg-preview.png" class="w-full" alt="product">
                </div>
                <div class="font-bold text-2xl">
                    <p>$29.00</p>
                </div>
            </div>
            <hr class="my-6 bg-[#CAC0C0] h-1 border-t-0 " />
            <div class="w-[30%] m-auto pb-6 ">
                        <div class="drop-shadow-xl p-8">
                            <!-- <h1 class="font-bold text-2xl">Summary item</h1> -->

                            <div class="items-center p-4 ">
                                <div class="flex flex-wrap justify-between pb-6">
                                    <p class="text-lg">Subtotal</p>
                                    <p class="text-lg font-bold">$29.00</p>
                                </div>
                                <div class="pb-6 flex justify-between">
                                    <p class="text-lg">Shipping</p>
                                    <p class="text-lg font-bold">$17.00</p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="text-lg">Est. Taxes</p>
                                    <p class="text-lg font-bold">$1.00</p>
                                </div>

                                <hr class="my-6 bg-[#CAC0C0] h-1 border-t-0 " />

                                <div class="flex flex-wrap justify-between">
                                    <p class="font-bold text-xl">Total</p>
                                    <p class="font-bold text-lg">$47.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
        </main>
    </defaultLayout>
</template>

<script setup>
import defaultLayout from '../layout/default.layout.vue';

</script>