<template>
    <div class="dd-company">
        <div class="dd-max-div">
            <div>

                <template v-for="(item, index) in companyApi" :key="item">
                    <img :src="item.logo" :alt="index">
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
const companyApi = [
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Logo.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Calypso.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/ColdGecko.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/EdgeKart.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/InfinityParker.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Kinetic.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/PacificTrim.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Pastel&Co..svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Wheelapp.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/YellowBook.svg'
    },
]
</script>

<style scoped lang="scss">
.dd-company {
    margin-top: 0;
    background-color: black;
    color: white;
    padding: 25px 0;


    .dd-max-div {
        max-width: 1536px;
        width: 90%;
        margin: 0 auto;
        overflow-x: hidden;
        position: relative;
        
        div {
            align-items: center;
            display: flex;
            width: fit-content;
            animation: companyAnimation 120s ease-in-out infinite;

            img {
                flex: 1 1 0px;
                margin: 0 25px;
            }

            @keyframes companyAnimation {
                0% {
                    transform: translateX(0%);
                }

                50% {
                    transform: translateX(100%);
                }

                50% {
                    transform: translateX(-100%);
                }
            }

            &:hover {
                animation-play-state: paused;
            }
        }

        &::after{
            position: absolute;
            width: 3%;
            height: 100%;
            background-image: linear-gradient(to right ,black 50% , transparent);
            top: 0;
            left: 0;
            z-index: 99;
            content: "";
        }
        
        &::before{
            position: absolute;
            width: 3%;
            height: 100%;
            background-image: linear-gradient(to right ,transparent , black 50%);
            top: 0;
            right: 0;
            z-index: 99;
            content: "";
        }
    }

    @media screen and (max-width:991px) {
        padding: 10px 0;
    }
}
</style>