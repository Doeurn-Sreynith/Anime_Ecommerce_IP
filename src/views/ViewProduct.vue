<template>
    <defaultLayout>
    <body class="bg-[#eafdfc]">
        <!-- header -->
       
        <main >
          <!-- forbacktohome -->
          <!-- bg-[#e0e7ff]
          <div class="flex gap-6 mx-5 my-5 text-xl  ">
            <RouterLink to="/homepage">
              <p>Home</p>
            </RouterLink>
            <i class="fa-solid fa-forward" style="color: #7f72b1;padding-top:4px ;"></i>
            <p>ZEROBASEONE - The 1st Mini Album</p>
          </div> -->
          <!-- fororderproduct --> 
          <div class="flex flex-wrap pb-10 mx-8 w-full">
            <div class="w-[35%] h-auto ">
              <div class="w-[100%] mx-20 my-10 flex flex-wrap">
                <img src="../assets/Megumin-removebg-preview.png" class="w-full bg-cover">
              </div>
            </div>
            <div class="w-[40%] m-auto"> 
              <div class="flex bg-[#bfeaf5] flex-wrap justify-between p-8 drop-shadow-xl my-9">
                <p class="font-bold text-2xl text-[#f8815c]">NAME HERO</p>
                <p class="font-bold text-2xl text-[#f36474] ">49.99$</p>
              </div>
              <div class="bg-[#bfeaf5] drop-shadow-xl p-8">
                <div class="flex mx-5 justify-between text-xl">
                <p >Megumin - Konosuba</p>
                <p>49.99$</p>
              </div>
              <hr class="my-12 mx-5 h-0.5 border-t-0 bg-black " />
                <div class="flex mx-5 justify-between text-xl">
                  <p>Size</p>
                  <p href="#">Detail</p>
                </div>
                <div class=" my-12 mx-5 relative h-10 w-72 min-w-[200px]">
                  <select class="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-black empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                    <option value="youthver">S</option>
                    <option value="bshadever">M</option>
                    <option value="bshadever">L</option>

                  </select>
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Choose Size
                    </label>
                </div>
                <div class="flex my-12 mx-5 ">
                  <button type="button" onclick="minus()" class="bg-[#3fdbf3] p-1.5 font-bold rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                  </button>
            
                    <input id="item_count" type="number" value="1" class="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
                        block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
                        focus:outline-none
                        focus:border-sky-500
                        focus:ring-1
                        focus:ring-sky-500
                        focus:invalid:border-red-500  focus:invalid:ring-red-500">
          
                    <button type="button" onclick="plus()" class="bg-[#3fdbf3] p-1.5 font-bold rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                      </svg>
                    </button>
                </div>

                <hr class="my-12 mx-5 h-1 border-t-0  bg-[#CAC0C0] " />
                <div class="mx-5 justify-between text-xl flex flex-wrap">
                  <button  type="submit" onclick="myorder()" class=" my-4 text-white w-48 rounded-lg h-10 bg-[#f8815c] hover:bg-indigo-300 active:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-200">
                    Add To Cart
                  </button>
                        <!-- <RouterLink :to="{ name: 'order' }">
                        <button  type="submit" class="w-40 my-4 rounded-lg h-10 text-white bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-200">
                        Order Now
                    </button>
                    </Routerlink> -->
                </div>
            
                
              </div>
              </div>
              
            </div>
        
            <!-- relatetoproduct -->
            <div>
              <hr class="my-5 mx-8  h-1 border-t-0 bg-[#CAC0C0] " />
            </div>
            <div class="mx-8 text-2xl font-medium mb-10 pb-30">
              <h1>Relate Product</h1>
              <div class="flex justify-center flex-wrap gap-7 p-8 ">
                <!-- <div class="w-48 h-auto mx-9 my-10 bg-[#CAC0C0]">
                  <img src="../assets/pic4-removebg-preview.png" class="w-full bg-cover">
                </div>
                <div class="w-48 h-auto mx-9 my-10">
                  <img src="../assets/pic9.png" class="w-full bg-cover">
                </div>
                <div class="w-48 h-auto mx-9 my-10">
                  <img src="../assets/pic7-removebg-preview.png" class="w-full bg-cover">
                </div> -->

                <div class="product5 bg-[#06283d] p-2 w-[20%] rounded-md drop-shadow-xl">
                    <img src="../assets/pic8-removebg-preview.png" class="w-full" alt="product">
                </div>
                <div class="product5 bg-[#06283d] p-2 w-[20%] rounded-md drop-shadow-xl">
                    <img src="../assets/14pic-removebg-preview.png" class="w-full" alt="product">
                </div>
                <div class="product5 bg-[#06283d] p-2 w-[20%] rounded-md drop-shadow-xl">
                    <img src="../assets/10pic-removebg-preview.png" class="w-full" alt="product">
                </div>
                <div class="product5 bg-[#06283d] p-2 w-[20%] rounded-md drop-shadow-xl">
                    <img src="../assets/pic5-removebg-preview.png" class="w-full" alt="product">
                </div>
                
              </div>
            </div>
        
        
          </main>
          
      
    </body>
  </defaultLayout>
</template>
<script setup>
    import defaultLayout from '../layout/default.layout.vue';
</script>