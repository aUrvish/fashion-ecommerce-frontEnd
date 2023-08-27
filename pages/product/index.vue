<template>
    <NuxtLayout name="default">
        <div class="dd-product">
            <div class="dd-filter" :class="isOpenFilterSidebar ? '' : 'dd-filter-none'">
                <Icon name="mdi:window-close" class="dd-close-filter" @click="isOpenFilterSidebar = false" />
                <div class="dd-search">
                    <Icon name="mdi:magnify" />
                    <input type="search" placeholder="Search">
                </div>

                <div>
                    <h3>Category</h3>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Child</li>
                    </ul>
                </div>
                <div>
                    <h3>Product</h3>
                    <ul>
                        <li>Shirts & Jeans</li>
                        <li>Sarees</li>
                        <li>Shoes</li>
                        <li>Watches</li>
                        <li>Sunglasses</li>
                        <li>Kurtas</li>
                        <li>Baby Boys</li>
                        <li>Baby Girls</li>
                    </ul>
                </div>
                <div>
                    <h3>Company</h3>
                    <select>
                        <option v-for="(com, ind) in companyApi" :key="ind" value="com.name">{{ com.name }}</option>
                    </select>
                </div>
                <div>
                    <h3>Size</h3>
                    <div class="dd-size">
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </div>
                <div>
                    <h3>Color</h3>
                    <div class="dd-color">
                        <button style="background-color: #fff; outline: 1px solid #555;"></button>
                        <button style="background-color: #000;"></button>
                        <button style="background-color: red;"></button>
                        <button style="background-color: #6c745d;"></button>
                        <button style="background-color: skyblue;"></button>
                    </div>
                </div>
                <div>
                    <h3>Price</h3>
                    <MultiRangeSlider :min="0" :max="100" :ruler="false" :min-value="0" :max-value="80" />
                </div>
            </div>
            <div class="dd-item">
                <div class="dd-item-header">
                    <div class="dd-grid-list">
                        <button class="dd-filter-bar-btn" @click="isOpenFilterSidebar = true">
                            <Icon name="mdi:menu" />
                        </button>
                        <button @click="isListViwe =! isListViwe">
                            <Icon name="mdi:format-list-bulleted-square" />
                        </button>
                    </div>

                    <div class="dd-result">
                        <p>1,000 results</p>
                    </div>

                    <select>
                        <option value="newest">Newest Fashion</option>
                        <option value="oldest">Oldest Fashion</option>
                    </select>
                </div>

                <div class="dd-sm-result">
                    <p>1,000 results</p>
                </div>
                <div class="dd-item-card" :style="`display : ${isListViwe ? 'block' : 'grid'}`">
                    <Card v-for="i in 24" :is-list="isListViwe" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
import MultiRangeSlider from "multi-range-slider-vue";

const isOpenFilterSidebar = ref(false)
const isListViwe = ref(false)
// const cardDisplay = ref(isListViwe ? 'block' : 'grid')

const companyApi = [
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/mantis.svg',
        name: 'Mantis'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Calypso.svg',
        name: 'Calypso'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/grass.svg',
        name: 'Grass'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/country.svg',
        name: 'Country'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/InfinityParker.svg',
        name: 'Infinity Parker'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Kinetic.svg',
        name: 'Kinetic'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/PacificTrim.svg',
        name: 'Pacidic Trim'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/omega.svg',
        name: 'Omega'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Wheelapp.svg',
        name: 'Wheelapp'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/YellowBook.svg',
        name: 'Yellow Book'
    },
]
</script>

<style scoped lang="scss">
.dd-product {
    max-width: 1536px;
    margin: 60px auto 0;
    width: 90%;
    font-family: 'Nunito';
    display: flex;
    justify-content: center;

    .dd-filter {
        width: 255px;
        max-width: 255px;

        .dd-close-filter {
            font-size: 25px;
            position: absolute;
            right: 0;
            top: 0;
            margin: 10px 15px;
            display: none;
        }

        .dd-search {
            flex-grow: 1;
            padding: 0 5px;
            height: 25px;
            border-radius: 10px;
            border: 1px solid black;
            display: flex;
            align-items: center;

            svg {
                font-size: 20px;
            }

            input {
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                padding-left: 3px;
            }
        }

        h3 {
            margin-bottom: 5px !important;
        }

        ul {
            padding: 0;
            list-style: none;
            margin: 0;
            font-size: 15px;

            li {
                cursor: pointer;
            }
        }

        select {
            background-color: #f5f6f9;
            border: 1px solid #eee;
            outline: none;
            padding: 5px 0;
            width: 100%;
            border-radius: 5px;
        }

        .dd-size {
            grid-template-columns: repeat(3, 1fr);
            display: grid;
            gap: 5px;

            button {
                font-weight: 700;
                background-color: #f5f6f9;
                padding: 5px;
                border: 1px solid #eee;
                border-radius: 5px;
                cursor: pointer;
            }

        }

        .dd-color {
            display: flex;

            button {
                padding: 5px;
                border: 1px solid #ccc;
                outline-offset: 1px;
                border-radius: 50%;
                height: 20px;
                aspect-ratio: 1;
                margin: 0 2px;
                cursor: pointer;
            }

        }

        .multi-range-slider {
            box-shadow: none;
            border: none;
            padding: 5px 10px;
        }
    }

    .dd-item {
        flex-grow: 1;
        width: 100%;
        padding-left: 20px;

        .dd-item-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 10px;

            .dd-grid-list {
                button {
                    background-color: #eee;
                    border: none;
                    border-radius: 5px;
                    padding: 5px 7px;
                    margin-right: 5px;
                    cursor: pointer;

                    svg {
                        font-size: 20px;
                    }
                }

                .dd-filter-bar-btn {
                    display: none;
                }
            }

            .dd-result {

                p {
                    margin: 0;
                }
            }

            select {
                width: 15%;
                border: none;
                outline: none;
            }
        }

        .dd-sm-result {
            padding: 0 10px;
            display: none;
        }

        .dd-item-card {
            // display: v-bind(cardDisplay);
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media screen and (max-width : 1199px) {
        display: block;

        .dd-filter {
            width: 100%;
            max-width: 375px;
            box-sizing: border-box;
            margin: 0 auto;
            height: fit-content !important;
            padding: 50px 25px 25px;
            border-radius: 25px;
            box-shadow: 0 2px 5px 0px rgba(0, 0, 0, .15);
            background-color: #fff;
            z-index: 99;
            position: fixed;
            left: 0;
            right: 0;

            .dd-search {
                height: 35px;
            }

            select {
                height: 35px;
                padding: 0 5px;
            }

            .dd-close-filter {
                display: block;
            }
        }

        .dd-item {
            padding-left: 0px;

            .dd-item-header {
                padding: 0;

                .dd-grid-list {
                    .dd-filter-bar-btn {
                        display: inline-block;
                    }
                }

                .dd-result {
                    display: none;
                }

                select {
                    width: fit-content !important;
                    background-color: transparent;
                }

            }

            .dd-sm-result {
                display: block;
                padding: 0;
            }

            .dd-item-card {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        .dd-filter-none {
            display: none !important;
        }
    }


    @media screen and (max-width : 600px) {
        .dd-item {
            .dd-item-card {
                grid-template-columns: 1fr;
            }
        }
    }

}
</style>