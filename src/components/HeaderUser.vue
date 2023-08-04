<template>
    <div class="header h-14 bg-[#06283d] flex justify-between px-10">
      <div class="left-header w-[64%] flex justify-between">
        <div class="logo flex items-center w-3/5 h-14">
          <img src="https://cdn-icons-png.flaticon.com/512/8372/8372297.png" alt="" class="h-2/3">
          <h1 class="text-white font-bold mx-3">ANIME SHOP</h1>
        </div>
        <div class="categories flex items-center w-full mr-8">
          <h1 class="text-[#46e551] font-bold px-3 "><RouterLink to="/">HOME</RouterLink></h1>
          <h1 class="text-[#46e551] font-bold px-3 border-x-2"><router-link to="/about">ABOUT</router-link></h1>
          <h1 class="text-[#46e551] font-bold px-3 "><RouterLink to="/contact">CONTACT</RouterLink></h1>
        </div>
      </div>
      <div class="right-header flex items-center ">
        <img class="invert h-1/2" src="https://cdn-icons-png.flaticon.com/512/151/151773.png">
        <img class="invert h-1/2 mx-3" src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt="">
        <h2 class="text-white">Cart(0)</h2>
        <li class="h-20 w-full checker-bg flex items-center justify-center  p-2 text-blue-500">
            <div class=" my-4 w-10 h-10  bg-gray-100 rounded-full bg-cover  bg-center" style="background-image: url('https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
            </div>
        </li>
      </div>
      
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

</script>
