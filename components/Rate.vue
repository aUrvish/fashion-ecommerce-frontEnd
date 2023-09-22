<template>
    <NuxtRating :read-only="true" ratingSize="24px" inactiveColor="#eee"
    :rating-value="ratevalue" />
</template>

<script setup>

const props = defineProps({
    ratevalue : {
        default : 4
    }
})
</script>