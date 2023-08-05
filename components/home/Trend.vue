<template>
    <div class="dd-trend">
        <div class="dd-trend-head">
            <div>
                <h2>Trending Collection</h2>
                <p>Check out most promising product bought by our buyers</p>
            </div>
            <NuxtLink to="/">
                Show More
                <!-- <Icon name="mdi:arrow-right-thin"/> -->
            </NuxtLink>
        </div>
        <div class="dd-cart-trend">
            <Card v-for="i in 12" :key="i"/>
        </div>
        <p class="dd-moble-show">
            <NuxtLink to="/">
                Show More
            </NuxtLink>
        </p>
    </div>
</template>

<style lang="scss" scoped>

.dd-trend {
    width: 90%;
    margin: 0 auto;
    max-width: 1536px;
    font-family: 'Nunito';

    .dd-trend-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        
        h2{
            font-size: 30px;
            margin: 0;
        }
        
        p{
            margin: 0;
        }

        a {
            color: blue;
            text-decoration: none;
        }
    }

    .dd-cart-trend {
        display: grid;
        grid-template-columns: repeat(4 , 1fr);
    }

    .dd-moble-show {
        text-align: center;
        display: none;

        a {
            text-decoration: none;
        }
    }

    @media screen and (max-width: 991px) {

        .dd-cart-trend {
            grid-template-columns: repeat(2, 1fr) ;
        }
    }
    @media screen and (max-width: 600px) {

        .dd-cart-trend {
            grid-template-columns: repeat(1, 1fr) ;
        }

        .dd-trend-head {
            a {
                display: none;
            }
        }

        .dd-moble-show {
            display: block;
        }
    }
}
</style>