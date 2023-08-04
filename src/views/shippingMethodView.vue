<template>
    <defaultLayout>

        <div class="bg-[#eafdfc]">

            <div class="">
                <!-- customer Information shipping address -->
                <div class="flex flex-wrap mx-8 p-32">
                    <div class="w-[55%] py-4">
                        <!-- <div class="flex flex-wrap justify-between p-7 font-mono">
                            <h1 class="font-bold text-2xl">Customer Information</h1>
                            <p>Already have an account? <small class="text-blue-600 font-semibold">Log in</small></p>
                        </div> -->

                        <!-- box information -->
                        <div class="border-black border-2 w-full shadow-lg">
                            <div class="flex w-full justify-between pt-4 px-4">
                                <div class="flex flex-wrap gap-4 items-center">
                                    <h1 class="font-bold text-2xl">Shipping Address</h1>
                                    <p class="">12 Waldo Point Road, Mishuaken, NY 11200</p>
                                </div>
                                <div class="text-blue-600">
                                    <a href="">Edit</a>
                                </div>
                            </div>
                            <hr class="my-6 bg-[#CAC0C0] h-1 border-t-0 " />
                            <h1 class="px-4 pb-4 font-semibold text-2xl">Shipping Method</h1>
                            <div class="px-4">
                                <label for="choose1">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center">
                                            <input type="radio" id="choose1" name="contact" value="email">
                                            <p class="px-4 py-1">UPS Groud</p>
                                        </div>
                                        <div>
                                            <p>$29.00</p>
                                        </div>
                                    </div>
                                </label>
                                <label for="choose2">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center">
                                            <input type="radio" id="choose2" name="contact" value="email">
                                            <p class="px-4 py-1">UPS 3 Day Select</p>
                                        </div>
                                        <div>
                                            <p>$27.00</p>
                                        </div>
                                    </div>
                                </label>
                                <label for="choose3">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center">
                                            <input type="radio" id="choose3" name="contact" value="email">
                                            <p class="px-4 py-1">UPS 2nd Day Air</p>
                                        </div>
                                        <div>
                                            <p>$22.00</p>
                                        </div>
                                    </div>
                                </label>
                                <label for="choose4">
                                    <div class="flex justify-between items-center">
                                        <div class="flex items-center">
                                            <input type="radio" id="choose4" name="contact" value="email">
                                            <p class="px-4 py-1">UPS Next Day Air</p>
                                        </div>
                                        <div>
                                            <p>$24.00</p>
                                        </div>
                                    </div>
                                </label>
                            </div>

                        </div>
                        <!-- footer shipping address -->
                        <div class="flex justify-between flex-wrap">
                            <div class="pt-6">
                                <RouterLink to="/shippingAddr"><button> ⬅️Return to Customer Information</button></RouterLink>
                            </div>
                            <div
                                class="bg-[#f8815c] flex justify-center items-center p-2 drop-shadow-xl mt-5 hover:bg-slate-500 text-white font-mono">
                                <RouterLink to="/payment"><button>Continue to Payment</button></RouterLink>
                            </div>
                        </div>
                    </div>

                    <!-- Summary Item -->
                    <div class="w-[30%] m-auto pb-6 ">
                        <div class="bg-[#bfeaf5] drop-shadow-xl p-8">
                            <h1 class="font-bold text-2xl">Summary item</h1>

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
                                    <p class="font-bold text-lg">$29.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    </defaultLayout>
</template>

<script setup>
import defaultLayout from '../layout/default.layout.vue';
import { RouterLink } from 'vue-router';
</script>
