<script setup>
const companyApi = [
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/mantis.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Calypso.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/grass.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/country.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/InfinityParker.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Kinetic.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/PacificTrim.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/omega.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/Wheelapp.svg'
    },
    {
        logo: 'http://192.168.0.105:3000/_nuxt/assets/images/company/YellowBook.svg'
    },
]
</script>

<template>
    <NuxtLayout name="default">
        <div>

            <!-- hero slide  -->
            <HeroSlide />

            <!-- company logos -->
            <div class="mt-0 bg-black text-white py-4">
                <div class="dd-max-div
                container 
                mx-auto 
                w-[90%] 
                relative 
                overflow-hidden 
                lg:pt-0 
                pt-3">
                    <div class="dd-logo-img items-center flex w-fit">
                        <template v-for="(item, index) in companyApi" :key="item">
                            <img :src="item.logo" class="flex-1 mx-6" :alt="index">
                        </template>
                    </div>
                </div>
            </div>

            <!-- our sevices -->
            <div class="dd-service">
                <div>
                    <Icon name="fa6-solid:truck-fast" class="icon" />
                    <p>Super Fast and Free Delivery</p>
                </div>
                <div>
                    <Icon name="mdi:security" class="icon" />
                    <p>Non-contact Shipping</p>
                </div>
                <div>
                    <Icon name="fa6-solid:money-bill-1-wave" class="icon" />
                    <p>Money-back Guaranteed</p>
                </div>
                <div>
                    <Icon name="fa6-solid:money-check-dollar" class="icon" />
                    <p>Super Secure Payment System</p>
                </div>
            </div>

            <!-- best offer -->
            <ShortList head="Best Offer">
                <Card v-for="i in 4" :key="i" />
            </ShortList>

            <!-- category -->
            <div
                class="container 
                mx-auto 
                lg:my-[50px] 
                my-[100px] 
                w-[90%] 
                grid 
                grid-cols-1 
                gap-[20px] 
                [&>*]:rounded-[10px] 
                [&>*]:overflow-hidden 
                [&>*]:shadow-lg 
                [&>*:hover]:shadow-md 
                lg:grid-cols-3">
                <NuxtLink to="#">
                    <img src="@/assets/images/cat-female.png" alt="cat1">
                </NuxtLink>
                <NuxtLink to="#">
                    <img src="@/assets/images/cat-child.png" alt="cat2">
                </NuxtLink>
                <NuxtLink to="#">
                    <img src="@/assets/images/cat-male.png" alt="cat3">
                </NuxtLink>
            </div>

            <!-- trending collection -->
            <ShortList head="Trending Collection">
                <Card v-for="i in 12" :key="i" />
            </ShortList>
        </div>
    </NuxtLayout>
</template>

<style scoped>
.dd-max-div::after {
    @apply absolute w-[3%] h-full bg-gradient-to-r from-black to-transparent top-0 left-0 content-[''] z-50
}

.dd-max-div::before {
    @apply absolute w-[3%] h-full bg-gradient-to-r from-transparent to-black top-0 right-0 content-[''] z-50
}

.dd-logo-img {
    animation: companyAnimation 120s linear infinite;
}

.dd-logo-img:hover {
    animation-play-state: paused;
}

.dd-service {
    @apply font-['Nunito'] my-12 mx-auto w-[90%] container sm:grid block items-center grid-cols-3 gap-7
}

.dd-service>* {
    @apply text-center border border-[#647eff80] p-4 grid items-center text-lg rounded-[16px] bg-gradient-to-br from-[#42dd924d] to-[#647eff4d] text-black shadow-lg font-semibold my-4 sm:my-0
}

.dd-service>*:first-child {
    @apply row-start-1 row-end-3 h-1/2
}

.dd-service>*:last-child {
    @apply row-start-1 row-end-3 col-start-3 col-end-4 h-1/2
}

.icon {
    @apply text-[45px] mx-auto text-black mb-1
}

@keyframes companyAnimation {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-150%);
    }
}
</style>

