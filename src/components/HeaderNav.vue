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
          <h1 class="text-[#46e551] font-bold px-3 "><RouterLink to="/login">LOGIN</RouterLink></h1>
          
        </div>
      </div>
      <div class="right-header flex items-center justify-between gap-7 px-8">
        <img class="invert h-1/2" src="https://cdn-icons-png.flaticon.com/512/151/151773.png">
        <div class="flex items-center w-8">
          <RouterLink to="/order"><img class="invert h-1/2 mx-3" src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png" alt=""></RouterLink>
        </div>
        <div class="items-center w-8">
          <h2 class="text-white">Cart(0)</h2>
        </div>
      </div>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

</script>
