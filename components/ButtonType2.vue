<script setup>
defineProps({
    bgColor: {
        default: '#fff'
    },
    bgImg: {
        default: '#fff'
    },
    text: {
        require: true
    },
    color: {
        default: "#fff"
    },
    radius: {
        default: "20px"
    },  
    type : {
        default: 'text'
    }
})
</script>

<template>
    <button :type="type">
        {{ text }}
    </button>
</template>

<style lang="scss" scoped>
$color : v-bind(bgColor);
$Img : v-bind(bgImg);

button {
    height: 35px;
    border: none;
    cursor: pointer;
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