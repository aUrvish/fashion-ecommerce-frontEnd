<template>
    <div class="dd-topBanner">
        <div class="dd-topBanner-text">
            <h1>{{ head }}</h1>
            <p>{{ desc }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps( {
        head : {
            require : true,
        },
        desc : {
            default : 'Empowering Your Shopping Experience.'
        }
    })
</script>

<style scoped lang="scss">
.dd-topBanner {
    max-width: 1536px;
    margin: auto;
    display: flex;
    width: 100%;
    aspect-ratio: 7 / 1;
    background-image: url('@/assets/images/topBanner.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    
    .dd-topBanner-text {
        width: 90%;
        margin: auto;
        
        h1,
        p {
            margin: 0;
            color: #fff;
        }
    }
    
    @media screen and (max-width : 600px) {
        aspect-ratio: 7 / 2;
        background-image: url('@/assets/images/topBannerMobile.png');
        .dd-topBanner-text {
            h1 {
                font-size: 20px;
            }
            
            p {
                font-size: 13px;
            }
        }
    }
}
</style>