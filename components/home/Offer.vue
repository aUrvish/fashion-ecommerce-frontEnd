<template>
    <div class="dd-offer">
        <div class="dd-offer-head">
            <h2>Best Offer</h2>
            <NuxtLink to="/">
                Show More
                <!-- <Icon name="mdi:arrow-right-thin"/> -->
            </NuxtLink>
        </div>
        <div class="dd-cart-offer">
            <Card v-for="i in 4" :key="i"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.dd-offer {
    width: 90%;
    margin: 0 auto;
    max-width: 1536px;
    font-family: 'Nunito';

    .dd-offer-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        
        h2{
            font-size: 30px;
            margin: 0;
        }

        a {
            color: blue;
            text-decoration: none;
        }
    }

    .dd-cart-offer {
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
    }

    @media screen and (max-width: 991px) {

        .dd-cart-offer {
            grid-template-columns: repeat(2, 1fr) ;
        }
    }
    @media screen and (max-width: 600px) {

        .dd-cart-offer {
            grid-template-columns: repeat(1, 1fr) ;
        }
    }
}
</style>