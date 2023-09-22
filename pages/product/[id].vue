<template>
    <NuxtLayout to="default">
        <div class="dd-single-product">
            <div class="dd-single">
                <div class="dd-product-images">
                    <div class="multi-images">
                        <img :src="`${baseURL}/images/${img}`" alt="card"
                            v-for="(img, index) in rowData.image.filter((curr, ind) => ind < 4)" :key="index"
                            @click="selectImage = index">
                    </div>
                    <div class="single-images-div">
                        <img :src="`${baseURL}/images/${rowData.image[selectImage]}`" class="single-images" alt="card">
                    </div>
                </div>
                <div class="dd-product-info">

                    <h1>{{ rowData.name }}</h1>
                    <div class="dd-single-rate">
                        <Rate :ratevalue="ratecomval" class="dd-rate" />
                        <p>({{ rowData.reviwe }} customers reviwe)</p>
                    </div>

                    <p class="dd-mrp">MRP : <del>₹ {{ Number(rowData.mrp).toFixed(2) }}</del></p>
                    <p class="dd-price">₹ {{ Number(rowData.sell).toFixed(2) }}</p>
                    <p class="dd-card-desc">{{ rowData.description }}</p>

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

                    <p class="available">Available : <strong> {{ rowData.stock > 0 ? 'In stock' : 'Out of stock' }} </strong>
                    </p>
                    <p class="id">ID : <strong> {{ gid }} </strong></p>
                    <p class="brand">Brand : <strong> {{ rowData.brand }} </strong></p>

                    <hr>

                    <p class="dd-color-para">Color :

                        <span class="dd-color">
                            <button
                                :style="{ backgroundColor: col, outline: selectcolorIndex == index ? '1px solid #555' : 'none' }"
                                v-for="(col, index) in rowData.color" :key="index"
                                @click="selectcolorIndex = index, selectcolor = col"></button>
                        </span>
                    </p>

                    <div class="total-item">
                        <button @click="quantity < 2 ? '' : quantity--">-</button>
                        <p>{{ quantity }}</p>
                        <button @click="quantity > rowData.stock ? '' : quantity++">+</button>
                    </div>

                    <ButtonType2 bgColor="#3b71ca" text="Add to Cart" @click="addToCart" radius="5px" >Add to Cart</ButtonType2>
                </div>
            </div>
        </div>
        <ShortList :head="rowData.catagory">
            <Card v-for="(card , index) in [...alldata.filter((curr , ind) => curr.catagory == rowData.catagory)].filter((c , i) => i < 4)" :carddata="card" :key="i" />
        </ShortList>
    </NuxtLayout>
</template>

<script setup>
const { baseURL } = useRuntimeConfig().public
const message = ref({ msg: '', isError: false })
const fetchalldata = ref(null)
const gid = ref(null)
const route = useRoute()
const ratevalue = ref(2)
const ratecomval = computed(() => ratevalue)
const selectImage = ref(0)
const selectcolorIndex = ref(0)
const selectcolor = ref(null)
const quantity = ref(1)
const alldata = ref([])

const addToCart = () => {
    if(JSON.parse(localStorage.getItem('fashion'))){
        console.log("get");
        localStorage.setItem('fashion', JSON.stringify([ ...JSON.parse(localStorage.getItem('fashion')) ,rowData]))
    }else{
        localStorage.setItem('fashion', JSON.stringify([rowData]))
    }
}

onMounted(() => {
    fetchrealdata();
    fetch(`${baseURL}/product`, { method: 'GET', redirect: 'follow' })
        .then(response => response.text())
        .then(result => alldata.value = [...JSON.parse(result)])
        .catch(error => console.log('error', error));
})

const fetchrealdata = () => {
    fetch(`${baseURL}/product/single/`, { method: 'POST', body: JSON.stringify({ id: route.params.id }), redirect: 'follow' })
        .then(response => response.text())
        .then(result => {
            fetchalldata.value = JSON.parse(result)
            gid.value = fetchalldata.value.data.id;
            rowData.name = fetchalldata.value.data.pname;
            rowData.id = fetchalldata.value.data.id;
            rowData.image = fetchalldata.value.data.image.split(',');
            rowData.color = fetchalldata.value.data.color.split(',');
            ratevalue.value = Number(fetchalldata.value.data.rate);
            rowData.catagory = fetchalldata.value.data.catagory;
            rowData.reviwe = fetchalldata.value.data.review;
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
    id : null,
    name: null,
    image: [],
    catagory: '',
    reviwe: 0,
    ptype: '',
    psize: '',
    color: [],
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
}</style>