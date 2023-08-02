<template>
    <div class="dd-cat">
        <div class="dd-cat-female">
            <NuxtLink to="#">
                <img src="../../assets/images/cat-female.png" alt="">
            </NuxtLink>
        </div>
        <div class="dd-cat-child">
            <NuxtLink to="#">
                <img src="../../assets/images/cat-child.png" alt="">
            </NuxtLink>
        </div>
        <div class="dd-cat-male">
            <NuxtLink to="#">
                <img src="../../assets/images/cat-male.png" alt="">
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .dd-cat {
        display: grid;
        width: 90%;
        max-width: 1536;
        margin: 50px auto;
        grid-template-columns: repeat(3 , 1fr);
        gap: 20px;

        .dd-cat-female, .dd-cat-male, .dd-cat-child {
            img {
                width: 100%;
                border-radius: 10px;
                box-shadow: 0 2px 10px 0 rgba(0,0,0, .4);
                
                &:hover {
                    box-shadow: 0 2px 10px 0 rgba(0,0,0, .15);
                }
            }
        }
    }
</style>