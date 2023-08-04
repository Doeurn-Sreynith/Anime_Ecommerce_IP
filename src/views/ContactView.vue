
<template>
    <defaultLayout>
        <div class="container" :style="isShow ? '--translateX-pos:0;':'--translateX-pos:110%;'">
            <main>
                <div class="manu">
                    <div class="svg" @click="isShow=!isShow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    
                </div>
                <form action="">
                    <div class="form_header">
                        
                    <h1>Contact us</h1>
                    <small>Feel free to contact us any time . we will get back to you as soon as we can!</small>
                    </div>
                    <div class="input">
                        <input type="text"  placeholder="Name">
                    </div>
                    <div class="input">
                        <input type="text"  placeholder="Email">
                    </div>
                    <div class="input">
                        <input type="text"  placeholder="Message">
                    </div>
                    <input type="submit"  value="Send">
                    
                </form>
                <div class="socail">
                    <a href="#">
                        <faceBookIcon/>
                    </a>                    
                    <a href="#">
                        <instagramIcon/>
                    </a>                    
                    <a href="#">
                        <linkedInIcon/>
                    </a>                    
                </div>
                
                <div class="infor">
                    <h1>Info</h1>
                    <div class="content">
                        <emailIcon/> 
                        example@example.com
                    </div>
                    <div class="content">
                        <phoneIcon/> 
                        +855 74874838
                    </div>
                    <div class="content">
                        <locationIcon/> 
                        Phnom penh
                    </div>
                    <div class="content">
                        <clockIcon/> 
                        09:00 - 18:00
                    </div>
                </div>
                
            </main>
            
        </div>
        
        
    </defaultLayout>
</template>
<script setup>
import {ref} from "vue"

import defaultLayout from '../layout/default.layout.vue';
import faceBookIcon from "../components/icons/facebookIcon.vue";
import instagramIcon from "../components/icons/instagramIcon.vue";
import linkedInIcon from "../components/icons/linkedInIcon.vue";
import emailIcon from "../components/icons/emailIcon.vue";
import phoneIcon from "../components/icons/phoneIcon.vue";
import locationIcon from "../components/icons/locationIcon.vue";
import clockIcon from "../components/icons/clockIcon.vue";

const isShow=ref(false)


</script>

<style scoped lang="scss">
.container{
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    main{
        overflow: hidden;
        width: 60%;
        min-height:70%;
        display:grid;
        grid-template-columns:.15fr 1fr .25fr;
        place-items: center;
        justify-content: center;
        background-color: white;
        position: relative;
        &>*{
            width: 100%;
        }
        .manu{  
            
            .svg{
                cursor: pointer;
                padding: .5rem;
                background-color: yellow;
                width: fit-content;
                svg{
                    --size:2rem;
                    width:  var(--size);
                    height: var(--size);
                    color: #d4a373;
                    stroke-width: 3px;
                    
                }
            }
        }
        
        form{
            width: 60%;
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            justify-self: flex-start;
            gap: 2.5rem;
            h1{
                font-size: 2rem;
                font-weight: bold;
                text-transform: capitalize;
            }
            
            small{
                text-transform: capitalize;
                font-weight: bold;
                color: #8a8a8a;
            }
            .form_header{
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .input{
                width: 100%;
                input{
                    width: 100%;
                    border: none;
                    outline: none;
                    border-bottom:2px solid black ;
                }
            }
            input[type=submit]{
                width: 100%;
                padding: .5rem;
                color:white;
                font-size: 1rem;
                text-transform: uppercase;
                font-weight: bold;
                background-color: black;
            }
        }
        .socail{
            padding: 2rem;
            height: 100%;
            background-color: #ffde3b;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }
        .infor{
            width: 30%;
            position: absolute;
            background-color: #06283d;
            right: 0;
            color: white;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-content: flex-end;
            gap: 1.5rem;
            transition: 300ms;
            transform: translateX(var(--translateX-pos));
            h1{
                font-size: 2rem;
                font-weight: bold;

            }
            .content{
                display: flex;
                align-items: center;
                gap: 1rem;
                svg{
                    --size:1.5rem;
                    width: var(--size);
                    height: var(--size);
                }
            }
        }
    }
}
</style>