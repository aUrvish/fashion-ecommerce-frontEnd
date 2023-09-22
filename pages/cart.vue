<template>
    <NuxtLayout name="default">
        <div class="dd-cart">
            <div class="dd-cart-item">
                <h2 style="margin-top: 0;">Cart ({{ cartdatacom.length }} Item)</h2>
                    <div class="cart" v-for="(cart ,index) in cartdatacom" :key="index">
                    <div class="dd-cart-img-div">
                        <img :src="`${baseURL}/images/${cart.image[0]}`" alt="card">
                    </div>
                    <div class="dd-cart-info-div">
                        <div class="dd-cart-product">
                            <NuxtLink :to="`/product/${cart.id}`" class="dd-product-name">{{ cart.name }}</NuxtLink>
                            <div class="total-item">
                                <button>-</button>
                                <p>3</p>
                                <button>+</button>
                            </div>
                        </div>
                        <p>color : <smart>Red</smart>
                        </p>
                        <p>category : <smart style="text-transform: capitalize;" >{{ cart.catagory }}</smart>
                        </p>
                        <p>Size : <smart style="text-transform: capitalize;" >{{ cart.psize }}</smart>
                        </p>
                        <div class="dd-cart-footer">
                            <button @click="removeToCart(index)" >Remove</button>
                            <p class="dd-price">₹ {{ Number(cart.sell).toFixed(2) }} <del>₹ {{ Number(cart.mrp).toFixed(2) }}</del></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dd-cart-checkout">
                <div class="dd-amount-div">
                    <h4>The Total Amount Of</h4>
                    <div class="amount-text-div">
                        <p>Product Amount</p>
                        <p>₹ 400.00</p>
                    </div>
                    <div class="amount-text-div">
                        <p>Shipping Change</p>
                        <p>₹ 50.00</p>
                    </div>

                    <hr>

                    <div class="amount-text-div amount-div-last">
                        <p>Shipping Change</p>
                        <p>₹ 50.00</p>
                    </div>

                    <Button bgColor="#3b71ca" text="Checkout" radius="5px" />
                </div>

                <div class="dd-delavery">
                    <h4>Expected delivery date</h4>
                    <p>July 27th 2023 <smart>to</smart> Julty 30th 2023 </p>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
const { baseURL } = useRuntimeConfig().public
    const cartdata = ref([])
    const cartdatacom = computed(() => cartdata.value)
    onMounted(() => localdata())
    
    const localdata = () => {
        cartdata.value = JSON.parse(localStorage.getItem('fashion'))
    }

    const removeToCart = (index) => {
        localStorage.setItem('fashion' , JSON.stringify(cartdata.value.filter((curr , ind) => index != ind)))
        localdata()
    }
</script>

<style lang="scss" scoped>
.dd-cart {
    display: flex;
    max-width: 1536px;
    width: 90%;
    margin: 66px auto 0;
    font-family: 'Nunito';

    .dd-cart-item {
        width: 100%;

        .cart {
            width: 70%;
            margin: 5px auto;
            display: flex;
            justify-content: space-between;
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 5px;
            align-items: center;

            .dd-cart-img-div {
                height: 150px;
                background-color: #f5f6f9;
                padding-top: 5px;
                box-sizing: border-box;
                border-radius: 10px;

                img {
                    aspect-ratio: 16 / 9;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .dd-cart-info-div {
                width: 100%;
                padding: 0 10px;

                .dd-cart-product {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 10px;

                    .dd-product-name {
                        font-size: 18px;
                        font-weight: 600;
                        text-decoration: none;
                        color: black;
                        margin: 0;
                    }

                    .total-item {
                        display: flex;
                        border-radius: 5px;

                        p {
                            margin: 0 5px;
                            color: black;
                        }

                        button {
                            background-color: #f5f6f9;
                            border: 1px solid #ddd;
                            height: 25px;
                            aspect-ratio: 1;
                            font-weight: 900;
                            border-radius: 5px;
                        }
                    }

                }

                p {
                    margin: 0;
                    font-weight: 600;
                    color: #aaa;

                    smart {
                        color: black;
                    }
                }

                .dd-cart-footer {
                    margin-top: 15px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    button {
                        background-color: #ff00001a;
                        border: none;
                        padding: 5px 10px;
                        color: red;
                        cursor: pointer;
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
            }
        }
    }

    .dd-cart-checkout {
        max-width: 300px;
        min-width: 300px;
        padding: 0 5px;
        box-sizing: border-box;

        .dd-amount-div {
            background-color: #f5f7f8;
            padding: 10px 10px 20px;
            border-radius: 10px;
            border: 1px solid #ddd;

            h4 {
                margin-top: 0;
            }

            .amount-text-div {
                display: flex ;
                justify-content: space-between;
                align-items: center;
                margin: 5px 0;

                p {
                    margin: 0;
                }

                
            }

            hr {
                opacity: .5;
            }

            .amount-div-last {
                margin-bottom: 20px;
            }
        }
        .dd-delavery {
            background-color: #f5f7f8;
            padding: 10px;
            margin-top: 5px;
            border-radius: 10px;
            border: 1px solid #ddd;

            h4 {
                margin-top: 0;
                margin-bottom: 5px;
            }

            p {
                margin: 0;
                font-size: 15px;
                color: #555;

                smart {
                    color: #000;
                    font-weight: 900;
                }
            }
        }
    }
}
</style>