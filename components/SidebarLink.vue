<script setup>
    defineProps(
        {
            to : {
                default : '#'
            }
        }
    )
</script>

<template>
    <NuxtLink :to="to" exactActiveClass="active-bar">
        <slot/>
    </NuxtLink>
</template>
