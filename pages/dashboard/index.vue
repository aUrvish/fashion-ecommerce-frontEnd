<template>
    <NuxtLayout name="app">
        <div class="main-dash">
            <h1>Dashboard</h1>

            <div class="dd-dash-div">
                <div>
                    <Icon name="material-symbols:currency-rupee" />
                    <h4>Profit</h4>
                    <h2>₹20,000</h2>
                </div>
                <div>
                    <Icon name="carbon:delivery" />
                    <h4>Product Sold</h4>
                    <h2>1800</h2>
                </div>
                <div>
                    <Icon name="ic:baseline-shopping-bag" />
                    <h4>Active Product</h4>
                    <h2>{{ fetchalldata?.length }}</h2>
                </div>
            </div>


            <Table :data="fetchalldata" @searchData="(sVal) => filterdata(sVal)" v-if="fetchalldata">
                <template #action="{ pid }">
                    <NuxtLink :to="{ name: 'product-id', params: { id: pid } }">
                        <Icon name="streamline:interface-arrows-expand-5-expand-small-bigger-retract-smaller-big"
                            style="color: blue;" />
                    </NuxtLink>
                </template>
            </Table>
        </div>
    </NuxtLayout>
</template>

<script setup>
const { baseURL } = useRuntimeConfig().public
const fetchalldata = ref(null)

const filterdata = (data) => {
    fetch(`${baseURL}/product`, { method: 'GET', redirect: 'follow' })
        .then(response => response.text())
        .then(
            (result) => {
                let newdata = JSON.parse(result);
                fetchalldata.value = newdata.filter((curr) => curr.pname.toLowerCase().includes(data.toLowerCase()))
            }
        )
        .catch(error => console.log('error', error));
}

onMounted(() => {
    fetch(`${baseURL}/product`, { method: 'GET', redirect: 'follow' })
        .then(response => response.text())
        .then(result => fetchalldata.value = JSON.parse(result))
        .catch(error => console.log('error', error));
})
</script>

<style scoped lang="scss">
.main-dash {
    font-family: 'Nunito';

    .dd-dash-div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 35px;

        div {
            // border: 1px solid red;
            position: relative;
            border: 1px solid #E6E6E6;
            background-color: #fff;
            border-radius: 10px;
            padding: 20px;

            svg {
                font-size: 100px;
                position: absolute;
                top: 50%;
                right: 0%;
                transform: translate(-10%, -50%);
                color: #ddd;
            }

            h4 {
                font-size: 24px;
                margin: 0;
            }

            h2 {
                font-size: 38px;
                margin: 0;
            }
        }
    }
}
</style>