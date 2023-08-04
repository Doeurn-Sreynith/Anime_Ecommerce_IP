<template>
    <defaultLayout>
      <body >
      
        <main class="bg-[#eafdfc]">
          <div class="flex flex-wrap p-8 mx-8 ">
            <div class="w-[100%]  h-16 pb-4 pt-4 ">
              <h1 class="text-2xl ">Your Cart</h1>
            </div>
            <div class="w-[55%] h-auto py-4">
              <div class="flex bg-[#ffffff] flex-wrap justify-between p-4 drop-shadow-xl my-9">
                <p class="font-bold text-xl">Item</p>
                <p class="font-bold text-xl ">Price</p>
                <p class="font-bold text-xl">Quantity</p>
              </div>
              <div class="bg-[#ffffff] flex flex-wrap justify-between gap-2 p-6 drop-shadow-xl items-center">
                  <div class="flex flex-wrap items-center">

                    <div class="w-52">
                    <img src="../assets/demon-slayer-removebg-preview.png" alt="" class="w-full bg-cover">
                    </div>

                    <div class="">
                      <p class="font-bold text-xl">Tanjiro</p>
                      <p>Size - Small</p>
                    </div>

                  </div>

                  <div class="font-bold text-xl mr-11">
                    29$
                  </div>
                  <div class="font-bold text-xl pb-5">
                    1
                  </div>

              </div>
              <div class="bg-[#ffffff] drop-shadow-xl p-4 mt-8 font-bold text-xl w-full"> 
                Sub Total: 29$
              </div>
            </div>
            <div class="w-[30%] m-auto"> 
              <div class="bg-[#bfeaf5] drop-shadow-xl p-8">
                <h1 class="font-bold text-2xl">Summary item</h1>

                <div class="items-center p-4 ">
                    <div class="flex flex-wrap justify-between mb-32">
                    <p class="text-lg">Subtotal</p>
                    <p class="text-lg font-bold">$29.00</p>
                  </div>

                  <hr class="my-6 bg-[#CAC0C0] h-1 border-t-0 "/>

                  <div class="flex flex-wrap justify-between">
                    <p class="text-lg">Total</p>
                    <p class="font-bold text-lg">$29.00</p>
                  </div>

                  <div class="bg-[#f8815c] flex justify-center items-center p-2 drop-shadow-xl mt-5 hover:bg-slate-500 text-white font-mono">
                    <RouterLink to="/shippingAddr"><button>Checkout</button></RouterLink>
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
