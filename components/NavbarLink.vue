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
    <NuxtLink :to="to" activeClass="active-nav">
        <slot/>
    </NuxtLink>
</template>
