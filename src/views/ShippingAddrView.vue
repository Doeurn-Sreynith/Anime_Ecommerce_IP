<template>
    <defaultLayout>

        <body>

            <main class="bg-[#eafdfc]">
                <!-- customer Information shipping address -->
                <div class="flex flex-wrap p-8 mx-8">
                    <div class="w-[55%] h-auto py-4">
                        <div class="flex flex-wrap justify-between p-7 font-mono">
                            <h1 class="font-bold text-2xl">Customer Information</h1>
                            <p>Already have an account? <small class="text-blue-600 font-semibold">Log in</small></p>
                        </div>
                        <div class="border-black border-2 w-full shadow-lg">
                            <div class="p-6 boder border-gray-300 sm:rounded-md w-full">
                                <form action="" method="post" enctype="multipart/form-data">
                                    <label for="" block mb-6>
                                        <input type="email" name="email" placeholder="Email"
                                            class="block w-full mt-1 border-gray-300 shadow-sm p-1 border-0">
                                    </label>
                                    <h1 class="pt-4 font-bold text-2xl font-mono">Shipping Address</h1>
                                    <div class="flex w-full gap-8 py-4">
                                        <div class="w-1/2">
                                            <label for="" block mb-6>
                                                <input type="text" name="firstname" placeholder="First Name"
                                                    class="block mt-1 border-gray-300 shadow-sm p-1 border-0 w-[100%]">
                                            </label>
                                        </div>
                                        <div class="w-1/2">
                                            <label for="" block mb-6>
                                                <input type="text" name="lastname" placeholder="Last Name"
                                                    class="block mt-1 w-full border-gray-300 shadow-sm p-1 border-0">
                                            </label>
                                        </div>

                                    </div>
                                    <!-- <select>
                                        <option>select state</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select> -->
                                    <label for="" block mb-6>
                                        <input type="text" name="optionCompany" placeholder="Company Option"
                                            class="block w-full mt-1 border-gray-300 shadow-sm p-1 border-0">
                                    </label>
                                    <div class="flex w-full gap-8 py-4">
                                        <div class="w-2/3">
                                            <label for="" block mb-6>
                                                <input type="text" name="Address" placeholder="Address"
                                                    class="block mt-1 border-gray-300 shadow-sm p-1 border-0 w-[100%]">
                                            </label>
                                        </div>
                                        <div class="w-1/3">
                                            <label for="" block mb-6>
                                                <input type="text" name="apt option" placeholder="Apt (Option)"
                                                    class="block mt-1 border-gray-300 shadow-sm w-full p-1 border-0">
                                            </label>
                                        </div>

                                    </div>
                                    <div class="flex w-full gap-8">
                                        <div class="w-1/3">
                                            <label for="" block mb-6>
                                                <input type="text" name="Country" placeholder="Country"
                                                    class="block mt-1 border-gray-300 shadow-sm p-1 border-0 w-[100%]">
                                            </label>
                                        </div>
                                        <div class="w-1/3">
                                            <label for="" block mb-6>
                                                <input type="text" name="State" placeholder="State"
                                                    class="block mt-1 border-gray-300 shadow-sm p-1 border-0 w-[100%]">
                                            </label>
                                        </div>
                                        <div class="w-1/3">
                                            <label for="" block mb-6>
                                                <input type="text" name="Zip" placeholder="Zip"
                                                    class="block mt-1 border-gray-300 shadow-sm p-1 border-0 w-[100%]">
                                            </label>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                        <!-- footer shipping address -->
                        <div class="flex justify-between flex-wrap">
                            <div class="pt-6">
                                <RouterLink to="/order"><button> ⬅️Return to Cart</button></RouterLink>
                            </div>
                            <div
                                class="bg-[#f8815c] flex justify-center items-center p-2 drop-shadow-xl mt-5 hover:bg-slate-500 text-white font-mono">
                                <RouterLink to="/shippingMethod"><button>Continue to Shipping</button></RouterLink>
                            </div>
                        </div>
                    </div>

                    <!-- Summary Item -->
                    <div class="w-[30%] m-auto pt-8">
                        <div class="bg-[#bfeaf5] drop-shadow-xl p-8">
                            <h1 class="font-bold text-2xl">Summary item</h1>

                            <div class="items-center p-4 ">
                                <div class="flex flex-wrap justify-between pb-6">
                                    <p class="text-lg">Subtotal</p>
                                    <p class="text-lg font-bold">$29.00</p>
                                </div>
                                <div class="pb-6">
                                    <p>Shipping</p>
                                </div>
                                <div>
                                    <p>Est. Taxes</p>
                                </div>

                                <hr class="my-6 bg-[#CAC0C0] h-1 border-t-0 " />

                                <div class="flex flex-wrap justify-between">
                                    <p class="text-lg">Total</p>
                                    <p class="font-bold text-lg">$29.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>


        </body>
    </defaultLayout>
</template>

<script setup>
import defaultLayout from '../layout/default.layout.vue';
import { RouterLink } from 'vue-router';
</script>
