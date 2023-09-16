<template>
    <div class="dd-table">
        <div class="dd-filter">
            <h3>All Products</h3>
            <div class="dd-search">
                <Icon name="mdi:magnify" />
                <input type="search" v-model="search" placeholder="Search" 
                @input="$emit('searchData' , $event.target.value )" >
            </div>
        </div>

        <table>
            <tr>
                <th>
                    <div>
                        Product
                        <Icon name="carbon:chevron-sort" @click="sortNumber%2==0 ? tabledata.sort((a , b) => a.id - b.id) : tabledata.sort((a , b) => b.id - a.id) , sortNumber++" />
                    </div>
                </th>
                <th>
                    <div>
                        Rate
                        <Icon name="carbon:chevron-sort" @click="sortNumber%2==0 ? tabledata.sort((a , b) => a.rate - b.rate) : tabledata.sort((a , b) => b.rate - a.rate) , sortNumber++" />
                    </div>
                </th>
                <th>
                    <div>
                        Price
                        <Icon name="carbon:chevron-sort" @click="sortNumber%2==0 ? tabledata.sort((a , b) => a.sell - b.sell) : tabledata.sort((a , b) => b.sell - a.sell) , sortNumber++" />
                    </div>
                </th>
                <th>
                    <div>
                        Reviwe
                        <Icon name="carbon:chevron-sort" @click="sortNumber%2==0 ? tabledata.sort((a , b) => a.review - b.review) : tabledata.sort((a , b) => b.review - a.review) , sortNumber++" />
                    </div>
                </th>
                <th>
                    <div>
                        Stock
                        <Icon name="carbon:chevron-sort" @click="sortNumber%2==0 ? tabledata.sort((a , b) => a.stock - b.stock) : tabledata.sort((a , b) => b.stock - a.stock) , sortNumber++" />
                    </div>
                </th>
                <th>
                    <p style="text-align: center;">Brand</p>
                </th>
                <th>
                    <p>Action</p>
                </th>
            </tr>

            <tr class="table-data" v-for="(tdata, index) in tabledata" :key="index">
                <td>
                    <div class="t-product">
                        <img :src="`${baseURL}/images/${tdata.image.split(',')[0]}`" class="dd-card-img"
                            alt="card">
                        <div>
                            <h4>{{ tdata.pname }}</h4>
                            <p>ID : <smart>{{ tdata.id }}</smart></p>
                        </div>
                    </div>
                </td>
                <td>
                    <p class="t-rate">{{ Number(tdata.rate).toFixed(1) }}</p>
                </td>
                <td>
                    <p class="t-price">₹ {{ Number(tdata.sell).toFixed(2) }}</p>
                </td>
                <td>
                    <p class="t-reviwe">{{ tdata.review }} customers</p>
                </td>
                <td>
                    <p class="t-stock">{{ tdata.stock }} In Available</p>
                </td>
                <td>
                    <p class="t-brand">{{ tdata.brand }}</p>
                </td>
                <td>
                    <slot name="action" :pid="tdata.id" />
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
    const props = defineProps(
        {
            data : {
                default : [] 
            }
        }
    )
    const { baseURL } = useRuntimeConfig().public
    const tabledata = computed(() => props.data)
    const search = ref(null)

    const sortNumber = ref(0)

</script>

<style lang="scss" scoped>
.dd-table {
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #E4E7EC;
    margin-bottom: 50px;
    overflow-x: auto;
    font-family: 'Nunito';



    .dd-filter {
        padding: 16px 16px;
        border-bottom: 1px solid #E4E7EC;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
            margin: 0;
        }

        .dd-search {
            // flex-grow: 1;
            padding: 0 5px;
            height: 30px;
            border-radius: 10px;
            border: 1px solid #E4E7EC;
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
    }

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: max-content;

        tr {

            th {
                text-align: start;
                min-width: max-content;


                &:first-child {
                    padding-left: 16px;
                }

                &:last-child {
                    padding-right: 16px;
                    text-align: end;
                }

                svg {
                    cursor: pointer;
                }
            }

            td {

                &:first-child {
                    padding-left: 16px;
                }

                &:last-child {
                    padding-right: 16px;
                    text-align: end;
                }

                .t-product {
                    display: flex;
                    align-items: center;
                    min-width: max-content;

                    img {
                        height: 50px;
                        margin-right: 15px;
                        background-color: #eee;
                        border: 1px solid #E4E7EC;
                        border-radius: 5px;
                        object-fit: contain;
                        aspect-ratio: 1;
                    }

                    h4 {
                        margin: 0;
                        text-align: start;
                    }

                    p {
                        margin: 0;
                        font-size: 14px;
                    }
                }

                .t-rate,
                .t-price,
                .t-reviwe,
                .t-stock,
                .t-brand {
                    text-align: start;
                    font-weight: 600;
                    min-width: max-content;
                }

                .t-brand {
                    text-align: center;
                }
            }

        }

        .table-data {

            & {
                border-bottom: 1px solid #E4E7EC;
                border-top: 1px solid #E4E7EC;
            }
            
            &:last-child {
                border-bottom: none;
            }
            
            td {
                padding: 7.5px 0;
            }

            &:hover {
                background-color: #f5f7f8;
            }
        }
    }
}</style>