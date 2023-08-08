<template>
    <div class="dd-default">
        <Navbar class="navbar"/>
        <slot/>
        <Banner />
        <Footer/>
    </div>
</template>

<style scoped lang="scss">

.dd-default {
    position: relative;
    .navbar {
        position: fixed;
        width: 100%;
        top: 0%;
    }
}
</style>