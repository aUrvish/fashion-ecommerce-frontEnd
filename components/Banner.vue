<template>
    <div class="dd-baner-div">
        <img src="http://localhost:3000/_nuxt/assets/images/banner.png" alt="banner">
    </div>
</template>

<style scoped lang="scss">
    .dd-baner-div {
        max-width: 1536px;
        width: 100%;
        margin: 25px auto 0;

        img {
            width: 100%;
            aspect-ratio: 13/3;
        }

        @media screen and (max-width : 991px) {
            margin: 50px auto;
        }
    }

</style>