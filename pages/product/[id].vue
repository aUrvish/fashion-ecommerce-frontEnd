<template>
    <NuxtLayout to="default">
        <div class="dd-single-product">
            <div class="dd-single">
                <div class="dd-product-images">
                    <div class="multi-images">
                        <img src="http://192.168.0.105:3000/_nuxt/assets/images/shirt-green.png" alt="card">
                        <img src="http://192.168.0.105:3000/_nuxt/assets/images/shirt-green.png" alt="card">
                        <img src="http://192.168.0.105:3000/_nuxt/assets/images/shirt-green.png" alt="card">
                        <img src="http://192.168.0.105:3000/_nuxt/assets/images/shirt-green.png" alt="card">
                    </div>
                    <div class="single-images-div">
                        <img src="http://192.168.0.105:3000/_nuxt/assets/images/shirt-green.png" class="single-images"
                            alt="card">
                    </div>
                </div>
                <div class="dd-product-info">
                    <h1>{{ rowData.name }}</h1>
                    <div class="dd-single-rate">
                        <NuxtRating class="dd-rate" :read-only="true" ratingSize="24px" inactiveColor="#eee"
                            :ratingValue="3" />
                        <p>(60 customers reviwe)</p>
                    </div>

                    <p class="dd-mrp">MRP : <del>₹500.00</del></p>
                    <p class="dd-price">₹ 499.00</p>
                    <p class="dd-card-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis delectus ab mollitia
                        obcaecati ratione illo dolore, provident quibusdam minima eum! Vel, eum cumque ab cum deserunt
                        explicabo
                        quidem totam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique debitis delectus ab mollitia
                        obcaecati ratione illo dolore, provident quibusdam minima eum! Vel, eum cumque ab cum deserunt
                        explicabo
                        quidem totam?
                    </p>

                    <div class="dd-service">
                        <div>
                            <Icon name="fa6-solid:truck-fast" class="icon" />
                            <p>Free Delivery</p>
                        </div>
                        <div>
                            <Icon name="mdi:security" class="icon" />
                            <p>Fast Shipping</p>
                        </div>
                        <div>
                            <Icon name="fa6-solid:money-bill-1-wave" class="icon" />
                            <p>Money-back</p>
                        </div>
                        <div>
                            <Icon name="fa6-solid:money-check-dollar" class="icon" />
                            <p>Secure Payment</p>
                        </div>
                    </div>

                    <p class="available">Available : <strong> In stock </strong></p>
                    <p class="id">ID : <strong> {{ gid }} </strong></p>
                    <p class="brand">Brand : <strong> Eva </strong></p>

                    <hr>

                    <p class="dd-color-para">Color :

                        <span class="dd-color">
                            <button style="background-color: #fff; outline: 1px solid #555;"></button>
                            <button style="background-color: #000;"></button>
                            <button style="background-color: red;"></button>
                            <button style="background-color: #6c745d;"></button>
                            <button style="background-color: skyblue;"></button>
                        </span>
                    </p>

                    <div class="total-item">
                        <button>-</button>
                        <p>3</p>
                        <button>+</button>
                    </div>

                    <Button bgColor="#3b71ca" text="Add to Cart" radius="5px" />
                </div>
            </div>
        </div>
            <ShortList head="T-Shirt">
                <Card v-for="i in 4" :key="i" />
            </ShortList>
    </NuxtLayout>
</template>

<script setup>
const { baseURL } = useRuntimeConfig().public
const message = ref({ msg: '', isError: false })
const fetchalldata = ref(null)
const gid = ref(null)
const route = useRoute()

onMounted(() => { fetchrealdata() })

const fetchrealdata = () => {
    fetch(`${baseURL}/product/single/`, { method: 'POST', body: JSON.stringify({ id: route.params.id }), redirect: 'follow' })
        .then(response => response.text())
        .then(result => {
            fetchalldata.value = JSON.parse(result)
            gid.value = fetchalldata.value.data.id; 
            rowData.name = fetchalldata.value.data.pname;
            rowData.rate = fetchalldata.value.data.rate;
            rowData.catagory = fetchalldata.value.data.catagory;
            rowData.ptype = fetchalldata.value.data.ptype;
            rowData.psize = fetchalldata.value.data.size;
            rowData.description = fetchalldata.value.data.description;
            rowData.stock = fetchalldata.value.data.stock;
            rowData.brand = fetchalldata.value.data.brand;
            rowData.mrp = fetchalldata.value.data.mrp;
            rowData.sell = fetchalldata.value.data.sell;
        })
        .catch(error => console.log('error', error));

}

const rowData = reactive({
    name: null,
    catagory: '',
    ptype : '',
    psize : '',
    description: null,
    stock: null,
    brand: null,
    mrp: null,
    sell: null
})

</script>

<style scoped lang="scss">
.dd-single-product {
    width: 90%;
    margin: 100px auto 75px;
    max-width: 1536px;
    font-family: 'Nunito';

    .prev-page {
        font-weight: 600;
    }

    .dd-single {
        display: flex;
        align-items: center;

        .dd-product-images {
            display: flex;
            align-items: center;
            width: 100%;

            .multi-images {
                display: flex;
                flex-direction: column;

                img {
                    max-width: 120px;
                    aspect-ratio: 12 / 9;
                    cursor: pointer;
                    border: 1px solid #ddd;
                    box-sizing: border-box;
                    object-fit: contain;
                    background-color: #efefef;
                    border-radius: 5px;
                    margin: 2.5px 0;
                }

            }

            .single-images-div {
                width: 100%;
                margin-left: 15px;

                .single-images {
                    width: 100%;
                    object-fit: contain;
                    border: 1px solid #ddd;
                    box-sizing: border-box;
                    aspect-ratio: 12 / 9;
                    background-color: #efefef;
                    border-radius: 5px;
                }
            }
        }

        .dd-product-info {
            width: 100%;
            margin-left: 16px;

            h1 {
                margin: 0;
            }

            .dd-single-rate {
                display: flex;
                align-items: center;
                justify-content: space-between;

                p {
                    margin: 0;
                }
            }

            .dd-mrp {
                margin: 5px 0;

                del {
                    font-weight: 500;
                    color: #aaa;
                    margin-left: 10px;
                }
            }

            .dd-price {
                color: green;
                margin: 5px 0;
                font-weight: bolder;
                font-size: 20px;
            }

            .dd-card-desc {
                margin-top: 0;
                font-size: 15px;
            }

            .available {
                margin-bottom: 0;
            }

            .id,
            .brand {
                margin: 5px 0;
            }

            hr {
                opacity: .5;
            }

            .total-item {
                margin: 10px 0 15px;
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

            .dd-color-para {
                display: flex;
                align-items: center;
                margin: 5px 0;

                .dd-color {
                    display: flex;
                    margin-left: 5px;

                    button {
                        padding: 5px;
                        border: 1px solid #ccc;
                        outline-offset: 2px;
                        border-radius: 50%;
                        height: 20px;
                        aspect-ratio: 1;
                        margin: 0 2px;
                        cursor: pointer;
                    }

                }

            }


            .dd-service {
                font-family: 'Nunito';
                margin: 0;
                display: grid;
                align-items: center;
                grid-template-columns: repeat(4, 1fr);
                overflow: hidden;
                gap: 10px;

                div {
                    text-align: center;
                    border: 1px solid rgba(100, 126, 255, .5);
                    padding: 8px 4px;
                    display: grid;
                    place-items: center;
                    font-size: 16px;
                    white-space: nowrap;
                    border-radius: 16px;
                    background-image: linear-gradient(to bottom right, rgba(66, 211, 146, .3), rgba(100, 126, 255, 0.3));
                    color: #000;
                    box-shadow: 0 0 15px 0 rgba(0, 0, 0, .15);

                    .icon {
                        font-size: 25px;
                    }

                    p {
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style>