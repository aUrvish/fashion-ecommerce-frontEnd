<template>
    <NuxtLayout name="default">
        <div class="dd-fashion">
            <TopBanner head="Tranding Fashion" />
            <!-- category -->
            <div class="dd-cat">
                <div class="dd-cat-female">
                    <NuxtLink to="#">
                        <img src="@/assets/images/cat-female.png" alt="">
                    </NuxtLink>
                </div>
                <div class="dd-cat-child">
                    <NuxtLink to="#">
                        <img src="@/assets/images/cat-child.png" alt="">
                    </NuxtLink>
                </div>
                <div class="dd-cat-male">
                    <NuxtLink to="#">
                        <img src="@/assets/images/cat-male.png" alt="">
                    </NuxtLink>
                </div>
            </div>

            <div class="dd-fashion-cat">
                <!--  Shirts & Jeans -->
                <ShortList head="Shirts & Jeans">
                    <Card v-for="i in 4" :key="i" />
                </ShortList>

                <!--  Sarees -->
                <ShortList head="Sarees">
                    <Card v-for="i in 4" :key="i" />
                </ShortList>

                <!--  Shoess -->
                <ShortList head="Shoes">
                    <Card v-for="i in 4" :key="i" />
                </ShortList>

                <!--  Watches -->
                <ShortList head="Watches">
                    <Card v-for="i in 4" :key="i" />
                </ShortList>

                <!--  Sunglasses -->
                <ShortList head="Sunglasses">
                    <Card v-for="i in 4" :key="i" />
                </ShortList>

                <!--  Kurtas -->
                <ShortList head="Kurtas">
                    <Card v-for="i in 4" :key="i" />
                </ShortList>

                <!--  Baby Boys -->
                <ShortList head="Baby Boys">
                    <Card v-for="i in 4" :key="i" />
                </ShortList>

                <!--  Baby Girls -->
                <ShortList head="Baby Girls">
                    <Card v-for="i in 4" :key="i" />
                </ShortList>
            </div>

        </div>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.dd-fashion {
    max-width: 1536px;
    margin: 60px auto 0;
    font-family: 'Nunito';

    // category
    .dd-cat {
        display: grid;
        width: 90%;
        max-width: 1536px;
        margin: 50px auto;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;

        .dd-cat-female,
        .dd-cat-male,
        .dd-cat-child {
            img {
                width: 100%;
                border-radius: 10px;
                box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .4);

                &:hover {
                    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .15);
                }
            }
        }

        @media screen and (max-width: 991px) {
            margin: 100px auto;
            grid-template-columns: 1fr;
        }
    }

    .dd-fashion-cat {
        &>* {
            margin: 50px auto;
        }
    }
}
</style>