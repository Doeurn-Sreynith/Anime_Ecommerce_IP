<template>
    <HeaderUser/>
    <slot/>
    <Footers />
    
    
    </template>
    
    <script setup>
    
    import Footers from '../components/Footers.vue'
    import HeaderUser from '../components/HeaderUser.vue';
    
    </script>
    
    <style scoped lang="scss"></style>