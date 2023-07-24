<template>
    <div class="dd-default">
        <Navbar class="navbar"/>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">

.dd-default {
    position: relative;
    .navbar {
        position: sticky;
        top: 0%;
    }
}
</style>