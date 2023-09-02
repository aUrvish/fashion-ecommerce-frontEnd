<template>
    <NuxtLayout name="app">
        <div class="dd-delete">
            <h1>Delete Product</h1>
        </div>

        <Table>
            <NuxtLink to="#">
                <Icon name="ic:outline-delete"
                    style="color: red; font-size: 25px;" />
            </NuxtLink>
        </Table>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.dd-delete {
    font-family: 'Nunito';
}
</style>