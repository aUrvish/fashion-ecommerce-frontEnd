<script setup>
const props = defineProps(
    {
        isList: {
            default: false,
        }
    }
)

// const 
const clikLike = ref(false)
</script>

<template>
    <div :class="isList ? 'dd-card-list' : 'dd-card-grid'">
        <div class="dd-card-inner">
            <div class="dd-card-head">
                <img src="http://192.168.0.105:3000/_nuxt/assets/images/shirt-green.png" class="dd-card-img" alt="card">
                <div class="dd-card-hover">
                    <Icon :name="clikLike ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'" @click="clikLike = !clikLike" />
                    <NuxtLink to="/">
                        <Icon name="mdi:cart-outline" />
                    </NuxtLink>
                    <Icon name="mdi:arrow-right-thin" />
                </div>
            </div>
            <div class="dd-card-body">
                <div class="dd-cat-rate">
                    <p>Men</p>
                    <NuxtRating class="dd-rate" :read-only="true" ratingSize="24px" inactiveColor="#eee" :ratingValue="3" />
                </div>
                <NuxtLink to="/" class="dd-product-name">Yellow T-Shirt</NuxtLink>
                <p class="dd-card-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis delectus ab mollitia
                    obcaecati ratione illo dolore, provident quibusdam minima eum! Vel, eum cumque ab cum deserunt explicabo
                    quidem totam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis delectus ab mollitia
                    obcaecati ratione illo dolore, provident quibusdam minima eum! Vel, eum cumque ab cum deserunt explicabo
                    quidem totam?
                </p>
                <p class="dd-price">₹ 499.00 <del>₹ 699.00</del></p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dd-card-grid {
    padding: 15px;
    font-family: 'Nunito';

    .dd-card-head {
        border-radius: 10px;
        border: 1px solid rgba(100, 126, 255, .5);
        overflow: hidden;
        aspect-ratio: 1/1;
        width: 100%;
        height: fit-content;
        position: relative;

        .dd-card-img {
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: contain;
            background-image: linear-gradient(to bottom right, rgba(66, 211, 146, .15), rgba(100, 126, 255, 0.15));
            transition: all .2s;
        }

        .dd-card-hover {
            position: absolute;
            right: -100%;
            bottom: 0;
            display: flex;
            flex-direction: column;
            transition: all .2s;
            margin: 5px;

            svg {
                color: #ddd;
                font-size: 22px;
                background-color: rgba(0, 0, 0, .3);
                backdrop-filter: blur(10px);
                margin: 5px;
                border-radius: 50%;
                padding: 5px;
                cursor: pointer;
            }
        }

        &:hover {
            .dd-card-img {
                transform: scale(1.2);
            }

            .dd-card-hover {
                right: 0;
            }
        }
    }

    .dd-card-body {

        // padding: 0 5px;
        .dd-cat-rate {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                margin: 5px 0;
                font-weight: 700;
                color: #ccc;
            }

            .dd-rate::before {
                transform: translateX(-100%);
            }
        }

        .dd-card-desc {
            display: none;
        }

        .dd-product-name {
            margin: 0;
            font-weight: 900;
            font-size: 20px;
            color: black;
            text-decoration: none;
        }

        .dd-price {
            color: green;
            margin: 5px 0;
            font-weight: bolder;

            del {
                font-weight: 500;
                color: #aaa;
                margin-left: 10px;
            }
        }
    }

    @media screen and (max-width:600px) {
        padding: 15px 0;
    }
}

.dd-card-list {
    padding: 15px;
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    font-family: 'Nunito';

    .dd-card-inner {
        display: flex;

        .dd-card-head {
            border-radius: 10px;
            border: 1px solid rgba(100, 126, 255, .5);
            overflow: hidden;
            width: 300px;
            aspect-ratio: 1/1;
            height: fit-content;
            position: relative;

            .dd-card-img {
                width: 100%;
                aspect-ratio: 1/1;
                object-fit: contain;
                background-image: linear-gradient(to bottom right, rgba(66, 211, 146, .15), rgba(100, 126, 255, 0.15));
                transition: all .2s;
            }

            .dd-card-hover {
                position: absolute;
                right: -100%;
                bottom: 0;
                display: flex;
                flex-direction: column;
                transition: all .2s;
                margin: 5px;

                svg {
                    color: #ddd;
                    font-size: 22px;
                    background-color: rgba(0, 0, 0, .3);
                    backdrop-filter: blur(10px);
                    margin: 5px;
                    border-radius: 50%;
                    padding: 5px;
                    cursor: pointer;
                }
            }

            &:hover {
                .dd-card-img {
                    transform: scale(1.2);
                }

                .dd-card-hover {
                    right: 0;
                }
            }
        }

        .dd-card-body {
            width: 100%;
            height: 100% !important;
            margin-left: 25px;

            .dd-cat-rate {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;

                p {
                    margin: 5px 0;
                    font-weight: 700;
                    color: #ccc;
                }

                .dd-rate::before {
                    transform: translateX(-100%);
                }
            }

            .dd-card-desc {
                margin-top: 4px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
            }

            .dd-product-name {
                margin: 0;
                font-weight: 900;
                font-size: 20px;
                color: black;
                text-decoration: none;
            }

            .dd-price {
                color: green;
                margin: 5px 0;
                font-weight: bolder;

                del {
                    font-weight: 500;
                    color: #aaa;
                    margin-left: 10px;
                }
            }
        }

        @media screen and (max-width:740px) {
                align-items: center;
                .dd-card-head {
                    width: 200px;

                    .dd-card-hover {
                        display: none;
                    }
                }

                .dd-card-body {

                    .dd-cat-rate {
                        margin: 0;
                    }
                    .dd-card-desc {
                        -webkit-line-clamp: 2;
                    }
                }
        }

    }


    @media screen and (max-width:600px) {
        padding: 15px 0;
    }
}
</style>