<script setup>
defineProps({
    bgColor: {
        default: '#fff'
    },
    bgImg: {
        default: '#fff'
    },
    to: {
        default: '#'
    },
    text: {
        require: true
    },
    color: {
        default: "#fff"
    },
    radius: {
        default: "20px"
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
$Img : v-bind(bgImg);

a {
    text-decoration: none;
    background-color: $color;
    background-image: $Img;
    padding: 5px 20px;
    border-radius: v-bind(radius);
    font-family: 'Nunito';
    font-weight: bold;
    color: v-bind(color) !important;
    box-shadow: 0 10px 8px -9px $color;
}
</style>