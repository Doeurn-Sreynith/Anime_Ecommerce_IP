<template>
    <defaultLayout>

        <div class="bg-[#eafdfc]">

            <div class="">
                <!-- customer Information shipping address -->
                <div class="flex flex-wrap mx-8 p-20">
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
                            <hr class="my-4 bg-[#8f8a8a] h-1 border-t-0 " />
                            <div class="flex w-full justify-between px-4">
                                <div class="flex flex-wrap gap-4 items-center">
                                    <h1 class="font-bold text-2xl">Shipping Method</h1>
                                    <p class="">UPS Ground, $2.20</p>
                                </div>
                                <div class="text-blue-600">
                                    <a href="">Edit</a>
                                </div>
                            </div>
                            <hr class="my-4 bg-[#8f8a8a] h-1 border-t-0 " />
                            <div class="flex justify-between p-2">
                                <h1 class="font-semibold text-2xl px-2">Payment Method</h1>
                                <!-- <div class=" socail gap-2 w-full">
                                    <a class="">
                                        <visacart/>
                                    </a>
                                    <a href="#" >
                                        <mastercard/>
                                    </a>
                                    <a href="#" >
                                        <paypalcart/>
                                    </a>
                                </div> -->
                            </div>

                            <!-- form payment -->
                            <div class="px-6 boder border-gray-300 sm:rounded-md w-full">
                                <form action="" method="post" enctype="multipart/form-data">
                                    <label for="" block mb-6>
                                        <input type="email" name="email" placeholder="Email"
                                            class="block w-full mt-1 border-gray-300 shadow-sm p-1 border-0">
                                    </label>
                                    <div class="flex w-full gap-4 pt-4">
                                        <div class="w-1/3">
                                            <label for="" block mb-6>
                                                <input type="text" name="NameOnCart" placeholder="Name On Cart"
                                                    class="block mt-1 border-gray-300 shadow-sm p-1 border-0 w-[100%]">
                                            </label>
                                        </div>
                                        <div class="w-1/3">
                                            <label for="" block mb-6>
                                                <input type="text" name="date" placeholder="MM/YY"
                                                    class="block mt-1 w-full border-gray-300 shadow-sm p-1 border-0">
                                            </label>
                                        </div>
                                        <div class="w-1/3">
                                            <label for="" block mb-6>
                                                <input type="text" name="date" placeholder="CVV"
                                                    class="block mt-1 w-full border-gray-300 shadow-sm p-1 border-0">
                                            </label>
                                        </div>

                                    </div>
                                </form>
                            </div>
                            <hr class="my-4 bg-[#8f8a8a] h-1 border-t-0 " />
                            <h1 class="font-semibold text-2xl px-2">Billing Address</h1>
                            <div class="px-6 boder border-gray-300 sm:rounded-md w-full py-6">
                                <div class="border border-black w-full p-1">
                                    <a href="">
                                        <h1>Same as Shipping address</h1>
                                    </a>
                                </div>
                                <div class="border border-black w-full p-1">
                                    <a href="">
                                        <h1>Use a different billing address</h1>
                                    </a>
                                </div>
                            </div>

                            <h1 class="font-semibold text-2xl px-2">Remember me</h1>
                            <div class="px-6 boder border-gray-300 sm:rounded-md w-full py-6">
                                <div class="border border-black w-full p-1">
                                    <a href="">
                                        <h1>Save my information for a faster checkout</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!-- footer shipping address -->
                        <div class="flex justify-between flex-wrap">
                            <div class="pt-6">
                                <RouterLink to="/shippingMethod"><button> ⬅️Return to Shipping Method</button></RouterLink>
                            </div>
                            <div
                                class="bg-[#f8815c] flex justify-center items-center p-2 drop-shadow-xl mt-5 hover:bg-slate-500 text-white font-mono">
                                <RouterLink to="/SummaryOrder"><button>Payment Now</button></RouterLink>
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
                                    <p class="font-bold text-lg">$47.00</p>
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
import mastercard from "../components/icons/masterCart.vue";
import visacart from "../components/icons/visaCart.vue"
import paypalcart from "../components/icons/paypalCart.vue"
</script>

<style scoped lang ="scss">
.socail {
    padding: 2rem;
    height: 100%;
    background-color: #ffde3b;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
</style>
