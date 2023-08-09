<script setup>
    const props = defineProps(
        {
            head : {
                require : true ,
            },
            caption : {
                default : 'Check out most promising product bought by our buyers'
            }
        }
    )
</script>

<template>
    <div class="dd-short">
        <div class="dd-short-head">
            <div>
                <h2>{{ head }}</h2>
                <p>{{ caption }}</p>
            </div>
            <NuxtLink to="/">
                Show More
            </NuxtLink>
        </div>
        <div class="dd-cart-short">
            <slot/>
        </div>
        <p class="dd-moble-show">
            <NuxtLink to="/">
                Show More
            </NuxtLink>
        </p>
    </div>
</template>

<style lang="scss" scoped>
.dd-short {
    width: 90%;
    margin: 0 auto;
    max-width: 1536px;
    font-family: 'Nunito';

    .dd-short-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;

        h2 {
            font-size: 30px;
            margin: 0;
        }

        p {
            margin: 0;
        }

        a {
            color: blue;
            text-decoration: none;
        }
    }

    .dd-cart-short {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .dd-moble-show {
        text-align: center;
        display: none;

        a {
            text-decoration: none;
        }
    }

    @media screen and (max-width: 991px) {

        .dd-cart-short {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 600px) {

        .dd-cart-short {
            grid-template-columns: repeat(1, 1fr);
        }

        .dd-short-head {
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