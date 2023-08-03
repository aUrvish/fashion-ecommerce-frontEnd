<template>
    <div style="height: 100%;">

        <swiper @slideChange="slideChangeFunc" direction="horizontal" :slidesPerView="1" :spaceBetween="30" :mousewheel="{
            forceToAxis: false,
            sensitivity: 1,
            releaseOnEdges: true,
        }" :modules="[Mousewheel]" class="mySwiper">
            <SwiperSlide v-for="(item, index) in itemapi">
                <div class="dd-leftside" :style="{ backgroundColor: item.backColor }">
                    <div class="dd-fashion-head">New Fashion</div>
                    <img :src="item.img" alt="product_slide">
                    <div class="dd-slide-desc">
                        <p>{{ item.desc }}</p>
                        <Button class="dd-hero-btn" text="Show Details" bgColor="#fff" color="#000" radius="5px" />
                    </div>
                </div>
                <div class="dd-rightside">
                    <div class="dd-mini-ads">
                        <div class="dd-ads-div">
                            <img :src="item.subProduct[0].img" alt="">
                            <div>
                                <p>{{ item.subProduct[0].desc }}</p>
                                <strong>{{ item.subProduct[0].price }}</strong>
                                <NuxtRating :read-only="true" ratingSize="1.5vw" inactiveColor="#fff"
                                    :ratingValue="item.subProduct[0].rate" />
                                <Icon name="mdi:arrow-right-thin-circle-outline" class="dd-ads-btn" />
                            </div>
                        </div>
                    </div>


                    <div class="dd-cus-slide">
                        <div class="dd-slide-div">
                            <Icon name="mdi:arrow-left-thin-circle-outline" @click="miniSlide > 0 ? miniSlide-- : ''" />
                            <Icon name="mdi:arrow-right-thin-circle-outline"
                                @click="item.subProduct.filter((curr, ind) => ind > 0).length > miniSlide + 1 ? miniSlide++ : ''" />
                        </div>
                        <template v-for="(subitem, i) in item.subProduct.filter((curr, ind) => ind > 0)" :key="i">
                            <div class="dd-slide-card" v-show="i == miniSlide">
                                <Icon class="dd-card-icon" name="mdi:arrow-right-thin" />
                                <img :src="subitem.img" class="dd-card-img" alt="shoes">
                                <div class="dd-brand-head">{{ subitem.name }}</div>
                                <div class="dd-brand-prize">{{ subitem.price }}</div>
                                <div class="dd-barnd-name">{{ subitem.brand }}</div>
                            </div>
                        </template>
                    </div>
                </div>
            </SwiperSlide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const miniSlide = ref(0)

const btnTest = ref('#000')

const slideChangeFunc = () => {

}


const itemapi = reactive(
    [
        {
            img: 'http://localhost:3000/_nuxt/assets/images/shirt.png',
            backColor: '#9bafca',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et quam laudantium incidunt, quoeaque! Culpa quaerat incidunt voluptates, voluptate quibusdam aut a unde consectetur at veniamblanditiis sapiente velit.",
            subProduct: [
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/shirt-green.png',
                    name: 'New Fashion',
                    brand: "Levi's",
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/shirt-orange.png',
                    name: 'New Fashion',
                    brand: "Levi's",
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/shirt-red.png',
                    name: 'New Fashion',
                    brand: "Levi's",
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/shirt.png',
                    name: 'New Fashion',
                    brand: "Levi's",
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
            ]
        },
        {
            img: 'http://localhost:3000/_nuxt/assets/images/shoes.png',
            backColor: '#07aea0',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et quam laudantium incidunt, quoeaque! Culpa quaerat incidunt voluptates, voluptate quibusdam aut a unde consectetur at veniamblanditiis sapiente velit.",
            subProduct: [
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/shoes-ads.png',
                    name: 'New Fashion',
                    brand: 'Nike',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/shoes-blue.png',
                    name: 'New Fashion',
                    brand: 'Nike',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/shoes.png',
                    name: 'New Fashion',
                    brand: 'Nike',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/shoes-green.png',
                    name: 'New Fashion',
                    brand: 'Nike',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
            ]
        },
        {
            img: 'http://localhost:3000/_nuxt/assets/images/watch.png',
            backColor: '#c7c7c7',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et quam laudantium incidunt, quoeaque! Culpa quaerat incidunt voluptates, voluptate quibusdam aut a unde consectetur at veniamblanditiis sapiente velit.",
            subProduct: [
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/watch-color.png',
                    name: 'New Fashion',
                    brand: 'Noise',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/watch-color.png',
                    name: 'New Fashion',
                    brand: 'Noise',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/watch-color.png',
                    name: 'New Fashion',
                    brand: 'Noise',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
                {
                    img: 'http://localhost:3000/_nuxt/assets/images/watch-color.png',
                    name: 'New Fashion',
                    brand: 'Noise',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis?',
                    price: '₹ 500.00',
                    rate: 4.5
                },
            ]
        },
    ]
)

</script>

<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
        display: flex;
        position: relative;
        overflow: hidden;

        .dd-leftside {
            width: 100%;

            img {
                position: absolute;
                bottom: 0;
                left: 50%;
                width: 30%;
                transform: translateX(-50%);
            }

            .dd-fashion-head {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -100%);
                white-space: nowrap;
                font-size: 10vw;
                white-space: nowrap;
                color: rgba(0, 0, 0, 0.15);
                font-weight: 900;
            }

            .dd-slide-desc {
                position: absolute;
                margin-left: 7%;
                width: 30%;
                top: 50%;
                font-size: 1.3vw;
                color: white;
            }
        }

        .dd-rightside {
            width: 100%;

            .dd-mini-ads {
                width: 20vw;
                height: 10vh;
                top: 20%;
                right: 0;
                transform: translate(-50%, 0%);
                background: rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-radius: 10px;
                border: .1px solid rgba(0, 0, 0, 0.18);
                position: absolute;
                padding: .2%;

                .dd-ads-div {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    position: relative;

                    .dd-ads-btn {
                        position: absolute;
                        bottom: 5%;
                        right: 1%;
                        cursor: pointer;
                    }

                    img {
                        height: 100%;
                        aspect-ratio: 1/1;
                        object-fit: cover;
                        background-color: white;
                        border-radius: 10px;
                        object-fit: cover;
                    }

                    div {
                        width: 12vw;
                        padding: 0 3%;

                        // color: #fff;
                        p {
                            margin: .5vh 0;
                            overflow: hidden;
                            white-space: nowrap;
                            font-size: 1.2vw;
                            text-overflow: ellipsis;
                        }

                        strong {
                            font-size: 1.2vw;
                        }
                    }
                }
            }


            .dd-cus-slide {
                position: absolute;
                width: 15vw;
                height: min-content;
                bottom: 3%;
                right: 1.5%;

                .dd-slide-div {
                    display: flex;
                    justify-content: end;

                    svg {
                        font-size: 1.7vw;
                        cursor: pointer;
                        margin: 0 0 .5vw 1vw;
                    }
                }

                .dd-slide-card {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    height: 100%;
                    width: 100%;
                    background-color: rgba(0, 0, 0, .1);
                    backdrop-filter: blur(10px);
                    border-radius: 10px;
                    border: .1px solid rgba(0, 0, 0, 0.18);
                    animation: slide .5s ease-in-out;

                    .dd-card-icon {
                        z-index: 99;
                        position: absolute;
                        right: 0;
                        top: 0;
                        padding: 1% 2%;
                        font-size: larger;
                        color: #aaa;
                        cursor: pointer;
                        display: none;
                    }

                    .dd-card-img {
                        margin: 5% auto 0;
                        width: 60%;
                        transition: all .5s;
                        object-fit: cover;
                    }

                    .dd-barnd-name {
                        font-size: 3vw;
                        color: #ddd;
                        line-height: 3vw;
                        text-align: center;
                        width: 100%;
                        font-family: 'Poppins';
                        letter-spacing: 1px;
                        font-weight: 900;
                    }

                    .dd-brand-head {
                        font-family: 'Teko';
                        text-align: center;
                        text-transform: uppercase;
                        font-size: 2vw;
                        line-height: 2vw;
                        letter-spacing: 0.2ch;
                    }

                    .dd-brand-prize {
                        font-weight: 900;
                        text-align: center;
                        line-height: 1.8vw;
                        font-size: 1.8vw;
                        color: #aaa;
                    }

                    &:hover {
                        .dd-card-img {
                            transform: scale(.8);
                        }

                        .dd-card-icon {
                            display: block;
                        }
                    }
                }

                @keyframes slide {
                    0% {
                        opacity: 0;
                    }

                    100% {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 991px) {
        .swiper-slide {
            flex-direction: column;

            .dd-leftside {
                height: 70%;

                img {
                    width: auto;
                    height: 50%;
                }

                .dd-fashion-head {
                    font-size: 13vw;
                    transform: translate(-50%, 0%);
                }

                .dd-slide-desc {
                    top: 0%;
                    transform: translate(0% ,100%);
                    font-size: 4vw;
                    width: 100%;
                    margin: 0;

                    p , .dd-hero-btn {
                        margin: 20px 20px;
                    }
                }
            }

            .dd-rightside {
                .dd-mini-ads {
                    display: none;
                }

                .dd-cus-slide {
                    display: none;
                }
            }
        }
    }
}
</style>

