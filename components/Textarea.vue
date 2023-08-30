<template>
    <div class="dd-input-div">
        <textarea type="text" rows="5" placeholder="Name"></textarea>
        <p>* error</p>
    </div>
</template>

<style scoped lang="scss">
    .dd-input-div {
        display: block !important;
        textarea {
            width: 100%;
            resize: none;
            border: .5px solid #000;
            border-radius: 3px;
            outline: none;
            padding: 5px 10px;
            box-sizing: border-box;

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