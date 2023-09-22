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
                <ShortList v-if="jeans.length" head="Shirts & Jeans">
                    <Card v-for="(carddata , index) in jeans" :carddata="carddata" :key="index" />
                </ShortList>

                <!--  Sarees -->
                <ShortList v-if="sarees.length" head="Sarees">
                    <Card v-for="(carddata , index) in sarees" :carddata="carddata" :key="index" />
                </ShortList>

                <!--  Shoess -->
                <ShortList v-if="shoes.length" head="Shoes">
                    <Card v-for="(carddata , index) in shoes" :carddata="carddata" :key="index" />
                </ShortList>

                <!--  Watches -->
                <ShortList v-if="watches.length" head="Watches">
                    <Card v-for="(carddata , index) in watches" :carddata="carddata" :key="index" />
                </ShortList>

                <!--  Sunglasses -->
                <ShortList v-if="sunglasses.length" head="Sunglasses">
                    <Card v-for="(carddata , index) in sunglasses" :carddata="carddata" :key="index" />
                </ShortList>

                <!--  Kurtas -->
                <ShortList v-if="kurtas.length" head="Kurtas">
                    <Card v-for="(carddata , index) in kurtas" :carddata="carddata" :key="index" />
                </ShortList>

                <!--  Baby Boys -->
                <ShortList v-if="boys.length" head="Baby Boy">
                    <Card v-for="(carddata , index) in boys" :carddata="carddata" :key="index" />
                </ShortList>

                <!--  Baby Girls -->
                <ShortList v-if="girls.length" head="Baby Girls">
                    <Card v-for="(carddata , index) in girls" :carddata="carddata" :key="index" />
                </ShortList>
            </div>

        </div>
    </NuxtLayout>
</template>

<script setup>
const { baseURL } = useRuntimeConfig().public
const alldata = ref([])

onMounted(() => {
    fetch(`${baseURL}/product`, { method: 'GET', redirect: 'follow' })
        .then(response => response.text())
        .then(result => alldata.value = [...JSON.parse(result)])
        .catch(error => console.log('error', error));
})

const jeans = computed(() => alldata.value.filter((curr , index) => curr.ptype == 'jeans'))
const sarees = computed(() => alldata.value.filter((curr , index) => curr.ptype == 'sarees'))
const shoes = computed(() => alldata.value.filter((curr , index) => curr.ptype == 'shoes'))
const watches = computed(() => alldata.value.filter((curr , index) => curr.ptype == 'watches'))
const sunglasses = computed(() => alldata.value.filter((curr , index) => curr.ptype == 'sunglasses'))
const kurtas = computed(() => alldata.value.filter((curr , index) => curr.ptype == 'kurtas'))
const boys = computed(() => alldata.value.filter((curr , index) => curr.ptype == 'boys'))
const girls = computed(() => alldata.value.filter((curr , index) => curr.ptype == 'girls'))
</script>

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