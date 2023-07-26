<template>
    <div class="dd-default">
        <Navbar class="navbar"/>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">

.dd-default {
    position: relative;
    height: 100%;
    .navbar {
        position: fixed;
        width: 100%;
        top: 0%;
    }
}
</style>