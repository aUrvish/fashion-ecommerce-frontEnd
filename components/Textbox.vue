<template>
    <div class="dd-input-div">
        <input type="text" :value="value" :placeholder="placeholder" @input="$emit('atInput' , $event.target.value)">
    </div>
</template>

<script setup>
    const props = defineProps(
        {
            placeholder : {
                default : 'Name'
            },
            value : {
                default : ''
            }
        }
    )
</script>

<style scoped lang="scss">
    .dd-input-div {
        display: block !important;
        input {
            width: 100%;
            height: 30px;
            border: .5px solid #000;
            border-radius: 3px;
            outline: none;
            padding: 0 10px;
            box-sizing: border-box;
            background-color: transparent;

            &:focus {
                outline: 1px solid #000;
                outline-offset: 2px;
            }
            
        } 

        p {
            color: red;
            margin: 0;
            font-size: 14px;
        }

    }
</style>