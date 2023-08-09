<script setup>
const companyApi = [
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/mantis.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Calypso.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/grass.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/country.svg'
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
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/omega.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Wheelapp.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/YellowBook.svg'
    },
]
</script>

<template>
    <NuxtLayout name="default">
        <div class="dd-home">

            <!-- hero slide  -->
            <HeroSlide />

            <!-- company logos -->
            <div class="dd-company">
                <div class="dd-max-div">
                    <div>

                        <template v-for="(item, index) in companyApi" :key="item">
                            <img :src="item.logo" :alt="index">
                        </template>
                    </div>
                </div>
            </div>

            <!-- our sevices -->
            <div class="dd-service">
                <div class="s1">
                    <Icon name="fa6-solid:truck-fast" class="icon" />
                    <p>Super Fast and Free Delivery</p>
                </div>
                <div class="s2">
                    <Icon name="mdi:security" class="icon" />
                    <p>Non-contact Shipping</p>
                </div>
                <div class="s3">
                    <Icon name="fa6-solid:money-bill-1-wave" class="icon" />
                    <p>Money-back Guaranteed</p>
                </div>
                <div class="s4">
                    <Icon name="fa6-solid:money-check-dollar" class="icon" />
                    <p>Super Secure Payment System</p>
                </div>
            </div>

            <!-- best offer -->
            <ShortList head="Best Offer">
                <Card v-for="i in 4" :key="i" />
            </ShortList>

            <!-- category -->
            <div class="dd-cat">
                <div class="dd-cat-female">
                    <NuxtLink to="#">
                        <img src="@/assets/images/cat-female.png" alt="">
                    </NuxtLink>
                </div>
                <div class="dd-cat-child">
                    <NuxtLink to="#">
                        <img src="@/assets/images/cat-child.png" alt="">
                    </NuxtLink>
                </div>
                <div class="dd-cat-male">
                    <NuxtLink to="#">
                        <img src="@/assets/images/cat-male.png" alt="">
                    </NuxtLink>
                </div>
            </div>

            <!-- trending collection -->
            <ShortList head="Trending Collection">
                <Card v-for="i in 12" :key="i" />
            </ShortList>
        </div>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.dd-home {


    // company logos
    .dd-company {
        margin-top: 0;
        background-color: black;
        color: white;
        padding: 15px 0;


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
                animation: companyAnimation 120s linear infinite;

                img {
                    flex: 1 1 0px;
                    margin: 0 25px;
                }

                @keyframes companyAnimation {
                    0% {
                        transform: translateX(100%);
                    }

                    100% {
                        transform: translateX(-100%);
                    }
                }

                &:hover {
                    animation-play-state: paused;
                }
            }

            &::after {
                position: absolute;
                width: 3%;
                height: 100%;
                background-image: linear-gradient(to right, black 50%, transparent);
                top: 0;
                left: 0;
                z-index: 98;
                content: "";
            }

            &::before {
                position: absolute;
                width: 3%;
                height: 100%;
                background-image: linear-gradient(to right, transparent, black 50%);
                top: 0;
                right: 0;
                z-index: 98;
                content: "";
            }
        }

        @media screen and (max-width:991px) {
            padding: 10px 0;
        }
    }


    // our services
    .dd-service {
        font-family: 'Nunito';
        margin: 50px auto;
        width: 90%;
        max-width: 1536px;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
        overflow: hidden;
        gap: 2rem;

        .s1,
        .s2,
        .s3,
        .s4 {
            text-align: center;
            border: 1px solid rgba(100, 126, 255, .5);
            padding: 16px;
            display: grid;
            place-items: center;
            font-size: 1.5rem;
            border-radius: 16px;
            background-image: linear-gradient(to bottom right, rgba(66, 211, 146, .3), rgba(100, 126, 255, 0.3));
            color: #000;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, .15);

            .icon {
                font-size: 45px;
            }
        }


        .s1 {
            grid-row: 1/3;
            height: 50%;
        }

        .s4 {
            height: 50%;
            grid-row: 1/3;
            grid-column: 3/4;
        }


        @media (max-width: 600px) {
            display: block;

            .s1,
            .s2,
            .s3,
            .s4 {
                margin: 15px 0;
            }
        }
    }


    // category
    .dd-cat {
        display: grid;
        width: 90%;
        max-width: 1536px;
        margin: 50px auto;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        .dd-cat-female,
        .dd-cat-male,
        .dd-cat-child {
            img {
                width: 100%;
                border-radius: 10px;
                box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .4);

                &:hover {
                    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .15);
                }
            }
        }

        @media screen and (max-width: 991px) {
            margin: 100px auto;
            grid-template-columns: 1fr;
        }
    }
}
</style>
