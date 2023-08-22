<template>
    <div class="dd-input-div">
        <input type="text" placeholder="Name">
        <p>* error</p>
    </div>
</template>

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

            &:focus {
                outline: 1px solid #000;
                outline-offset: 1px;
            }
            
        } 

        p {
            color: red;
            margin: 0;
            font-size: 14px;
        }

    }
</style>