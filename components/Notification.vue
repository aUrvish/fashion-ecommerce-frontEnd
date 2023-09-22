<template>
    <div class="dd-notification" v-if="msg  && display">
        <Icon name="mdi:close" class="icon" @click="display = false" />
        <p>{{ msg }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    msg : {
        default : ''
    },
    isError : {
        default : true
    }
})
const display = ref(true)
const bgColor = computed(() => props.isError ? '#DC3545' : '#198754')
</script>

<style scoped lang="scss">
.dd-notification {
    background-color: v-bind(bgColor);
    position: fixed;
    top: 0;
    z-index: 99;
    right: 0;
    max-width: 250px;
    max-height: 100px;
    padding: 10px 30px 10px 15px;
    box-sizing: border-box;
    border-radius: 8px;
    margin: 5px;
    display: grid;
    place-items: center;
    width: 100%;

    .icon {
        position: absolute;
        right: 2%;
        top: 5%;
        color: white;
        cursor: pointer;
    }

    p {
        margin: 0;
        color: white;
        font-weight: 700;
    }

}
</style>