<script setup>
    defineProps({
            bgColor: {
                default : 'red'
            } ,
            to : {
                default : '#'
            } , 
            text : {
                require : true
            }
    })
</script>

<template>
    <NuxtLink :to="to">
        {{ text }}
    </NuxtLink>
</template>

<style lang="scss" scoped>
    $color : v-bind(bgColor);

    a {
        background-color: $color;
        padding: 5px 20px;
        border-radius: 20px;
        color: white !important;
        box-shadow: 0 10px 20px -9px $color;
    }
</style>