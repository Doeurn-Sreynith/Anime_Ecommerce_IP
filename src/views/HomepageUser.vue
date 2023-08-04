<template>
    <defultUserLayout>
        <div class="all">
            
            <div class="sub-header mx-auto flex flex-col items-center justify-center h-[50%] bg-[#eafdfc]">
                <div class="hero-tittle bg-[#06283d] mt-10 flex items-center justify-center rounded-lg w-[80%] p-8">
                    <div class="left-subHeader">
                        <h1 class="text-white font-bold text-3xl pb-7 pr-5">Shopping Favorite Anime</h1>
                        <p class="text-white text-xs pb-7">Do you love the vibrant and colorful world of anime characters and their unique stories?
                            Then, come and explore <br> our anime shop, where you can find all your favorite anime.
                            Our shop is stocked with the latest and greatest anime products, 
                            including items from popular series like Naruto, One Piece, Attack on Titan, and more. 
                        </p>
                        <div class="button w-fit h-10 flex justify-between items-center gap-2 bg-[#aae3e2] p-2 rounded-lg shadow-lg shadow-[#1c5792] border-[#84d8ce] border-2">
                            <img class="h-5 " src="https://cdn-icons-png.flaticon.com/512/3031/3031718.png" alt="">
                            <button class="mr-4 rounded-lg  ">Call To Action</button>
                        </div>
                    </div>
                    <div class="right-subHeader bg-cover">
                        <img src="../assets/pic1-removebg-preview.png" alt="">
                    </div>
                </div>
                <div class="Promotion mt-8 w-[70%] flex justify-center  gap-[3rem] p-4">
                    <div class="coupon  w-full  bg-[#ff8b13] flex items-center justify-between p-8 rounded-lg shadow-lg shadow-[#dc7c5b] border-2 border-[#af6842]">
                        <div class="left-coupon flex flex-col w-full h-full">
                            <h2 class="font-bold h-fit text-white text-2xl"><i>Coupon Saving</i></h2>
                            <p class="text-white h-full text-sm">Up to 70% off everyday essentails</p>
                            <button class=" w-fit bg-[#fcfe8b] h-fit px-4 py-2 font-bold rounded-lg shadow-lg shadow-[#af9746] border-2 border-[#d9ee23]">Coupons</button>
                        </div>
                        <div class="right-coupon bg-cover">
                            <img class="bg-cover" src="../assets/coupon-removebg-preview (1).png" alt="">
                        </div>
                    </div>
                    <div class="delivery w-full bg-[#c6fff5] flex items-center justify-between gap-4 p-8 rounded-lg shadow-lg shadow-[#387475] border-2 border-[#4bc6ee]">
                        <div class="left-delivery flex flex-col w-full h-full">
                            <h2 class="font-bold h-fit text-2xl text-[#ff8b13]"><i>Free Delivery</i></h2>
                            <p class="h-full text-[#ff8b13] text-sm">with selection items</p>
                            <button class="w-fit bg-[#fcfe8b] h-fit px-4 py-2 rounded-lg font-bold shadow-lg shadow-[#387475] border-2 border-[#cde136]">Deliver Now</button>
                        </div>
                        <div class="right-delivery bg-cover">
                            <img src="../assets/pic7-delivery-removebg-preview.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="Products flex my-12 justify-center flex-wrap gap-10 w-[80%] ">
                    <div class="product1 bg-[#06283d] p-4 w-[30%] rounded-md">
                        <RouterLink to="/ViewProduct"><img src="../assets/pic11-removebg-preview.png" class="w-full" alt="product"></RouterLink>
                        <div class="btn w-full flex justify-between items-center px-[1rem]"> 
                            <div class="price font-bold text-xl text-[#ff8b13]">
                                $29.7
                            </div>
                            <button class="cart font-bold text-xl bg-[#aae3e2] flex gap-2 items-center p-2 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                cart
                            </button>
                        </div>
                    </div>
                    <div class="product2 bg-[#06283d] p-4 w-[30%] rounded-md">
                        <RouterLink to="/ViewProduct"><img src="../assets/14pic-removebg-preview.png" class="w-full" alt="product"></RouterLink>
                        <div class="btn w-full flex justify-between items-center px-[1rem]"> 
                            <div class="price font-bold text-xl text-[#ff8b13]">
                                $25
                            </div>
                            <button class="cart font-bold text-xl bg-[#aae3e2] flex gap-2 items-center p-2 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                cart
                            </button>
                        </div>
                    </div>
                    <div class="product3 bg-[#06283d] p-4 w-[30%] rounded-md">
                        <RouterLink to="/ViewProduct"><img src="../assets/pic13-removebg-preview.png" class="w-full" alt="product"></RouterLink>
                        <div class="btn w-full flex justify-between items-center px-[1rem]"> 
                            <div class="price font-bold text-xl text-[#ff8b13]">
                                $32.5
                            </div>
                            <button class="cart font-bold text-xl bg-[#aae3e2] flex gap-2 items-center p-2 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                cart
                            </button>
                        </div>
                    </div>
                    <div class="product4 bg-[#06283d] p-4 w-[30%] rounded-md">
                        <RouterLink to="/ViewProduct"><img src="../assets/demon-slayer-removebg-preview.png" class="w-full" alt="product"></RouterLink>
                        <div class="btn w-full flex justify-between items-center px-[1rem]"> 
                            <div class="price font-bold text-xl text-[#ff8b13]">
                                $28
                            </div>
                            <button class="cart font-bold text-xl bg-[#aae3e2] flex gap-2 items-center p-2 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                cart
                            </button>
                        </div>
                    </div>
                    <div class="product5 bg-[#06283d] p-4 w-[30%] rounded-md">
                        <RouterLink to="/ViewProduct"><img src="../assets/pic9.png" class="w-full" alt="product"></RouterLink>
                        <div class="btn w-full flex justify-between items-center px-[1rem]"> 
                            <div class="price font-bold text-xl text-[#ff8b13]">
                                $46
                            </div>
                            <button class="cart font-bold text-xl bg-[#aae3e2] flex gap-2 items-center p-2 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                cart
                            </button>
                        </div>
                    </div>
                    <div class="product5 bg-[#06283d] p-4 w-[30%] rounded-md">
                        <RouterLink to="/ViewProduct"><img src="../assets/pic8-removebg-preview.png" class="w-full" alt="product"></RouterLink>
                        <div class="btn w-full flex justify-between items-center px-[1rem]"> 
                            <div class="price font-bold text-xl text-[#ff8b13]">
                                29$
                            </div>
                            <button class="cart font-bold text-xl bg-[#aae3e2] flex gap-2 items-center p-2 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                cart
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </defultUserLayout>
    
    </template>
    <script setup>
    import defultUserLayout from '../layout/defultUser.layout.vue';
   
    </script>