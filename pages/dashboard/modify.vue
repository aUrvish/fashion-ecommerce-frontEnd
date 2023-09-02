<template>
    <NuxtLayout name="app">
        <div class="dd-modify">
            <h1>Modify Product</h1>
        </div>

        <Table>
            <NuxtLink to="#">
                <Icon name="material-symbols:edit-rounded"
                    style="color: green; font-size: 20px;" />
            </NuxtLink>
        </Table>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.dd-modify {
    font-family: 'Nunito';
}
</style>