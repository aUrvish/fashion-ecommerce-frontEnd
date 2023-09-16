<template>
    <NuxtLayout name="app">
        <div class="dd-delete">
            <h1>Delete Product</h1>
        </div>

        <Table :data="fetchalldata" @searchData="(sVal) => filterdata(sVal)" v-if="fetchalldata">
            <template #action="{ pid }">
                <Icon name="ic:outline-delete" style="color: red; cursor: pointer;  font-size: 25px;"
                    @click="removeProduct(pid)" />
            </template>
        </Table>
    </NuxtLayout>
</template>

<script setup>
const { baseURL } = useRuntimeConfig().public
const fetchalldata = ref(null)

const removeProduct = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(`${baseURL}/product/remove/`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({ id: id }),
        redirect: 'follow'
    })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    fetchrealdata();
}

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

const fetchrealdata = () => {
    fetch(`${baseURL}/product`, { method: 'GET', redirect: 'follow' })
        .then(response => response.text())
        .then(result => fetchalldata.value = JSON.parse(result))
        .catch(error => console.log('error', error));
}

onMounted(() => {
    fetchrealdata()
})
</script>

<style scoped lang="scss">
.dd-delete {
    font-family: 'Nunito';
}
</style>