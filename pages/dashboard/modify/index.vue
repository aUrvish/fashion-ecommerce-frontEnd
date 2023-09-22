<template>
    <NuxtLayout name="app">
        <div class="dd-modify">
            <h1>Modify Product</h1>
        </div>

        <Table :data="fetchalldata" @searchData="(sVal) => filterdata(sVal)" v-if="fetchalldata">
            <template #action="{ pid }">
                <RouterLink :to="{name : 'dashboard-modify-id', params : {id : pid}}" >
                    <Icon name="material-symbols:edit-rounded"
                    style="color: green; font-size: 20px; cursor: pointer;" />
                </RouterLink>
            </template>
        </Table>

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
.dd-modify {
    font-family: 'Nunito';
}
</style>