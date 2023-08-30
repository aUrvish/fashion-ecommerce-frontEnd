<script setup>
const getBtnColor = ref('linear-gradient(120deg,#42d392,#647eff)')
const navToggleBtn = ref(false)
const navDisplay = computed(() => navToggleBtn.value ? 'block' : 'none')
const bgColor = ref('transparent')
const router = useRouter()

onMounted(
  () => {
    window.addEventListener('scroll' , () => { 
        console.log(window.scrollY);
        if(window.scrollY > 5){
            bgColor.value = '#fff'
        }else {
            bgColor.value = 'transparent'
        }
    })
  }
)
</script>

<template>
    <header class="dd-header" :style="{backgroundColor:navToggleBtn?'white':bgColor}">
        <div class="dd-container">
            <NuxtLink :to="{ name: 'index' }" class="dd-logo">
                <img src="@/assets/images/logo-dark.svg" alt="Logo">
            </NuxtLink>

            <ul class="dd-nav">
                <li>
                    <NavbarLink :to="{ name: 'index' }">Home</NavbarLink>
                </li>
                <li>
                    <NavbarLink :to="{ name: 'product' }">Product</NavbarLink>
                </li>
                <li>
                    <NavbarLink :to="{ name: 'fashion' }">fashion</NavbarLink>
                </li>
                <li>
                    <NavbarLink :to="{ name: 'contact' }">Contact</NavbarLink>
                </li>
                <li>
                    <Button class="dd-nav-btn" text="Login" :bgImg="getBtnColor" @click="router.push({ name : 'login'})" />
                </li>
                <li>
                    <NuxtLink :to="{ name: 'cart' }" class="dd-call-icon" data-cart-list="10">
                        <Icon name="mdi:cart" size="25px" />
                    </NuxtLink>
                </li>
            </ul>

            <Icon :name="navToggleBtn ? 'mdi:close' : 'mdi:menu'" @click="navToggleBtn = !navToggleBtn" class="dd-nav-collapse" size="25px" />
        </div>
    </header>
</template>

<style scoped lang="scss">
.dd-header {
    padding: 5px 0;   
    z-index: 99;
    .dd-container {
        width: 90%;
        max-width: 1536px;
        margin: 0 auto;
        justify-content: center;
        align-items: center;
        display: flex;
        position: relative;

        .dd-logo {
            width: 150px;
            outline: none;
        }

        .dd-nav {
            display: flex;
            height: 100%;
            margin: 0 0 0 auto;
            justify-content: center;
            align-items: center;

            li {
                margin: 0 10px;
                list-style-type: none;
                text-transform: capitalize;

                a {
                    text-decoration: none;
                    font-family: 'Nunito';
                    font-weight: bold;
                    color: black;
                }

                .dd-call-icon {
                    position: relative;

                    &::before {
                        content: attr(data-cart-list);
                        color: white;
                        position: absolute;
                        background-color: red;
                        height: 13px;
                        width: 13px;
                        border-radius: 50%;
                        display: grid;
                        place-items: center;
                        font-size: 8px;
                        top: 0;
                        right: 0;
                        transform: translate(30%, -30%);
                    }
                }

                .dd-nav-btn {
                    margin-left: 15px;
                }
            }
        }

        .dd-nav-collapse {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            transform: translate(-50%, 50%);
        }
    }

    @media screen and (max-width : 991px) {
        .dd-container {
            width: 95%;
            display: block;

            .dd-nav-collapse {
                display: block;
            }

            .dd-logo {
                padding-left: 5px;
            }

            .dd-nav {
                display: v-bind(navDisplay);
                padding: 0;
                padding: 25px 0;
                animation: slide .3s ease-in-out;

                li {
                    display: flex;
                    justify-content: center;
                    margin: 20px 0;

                    .dd-nav-btn {
                        margin: 0 auto;
                    }
                }

                @keyframes slide {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }
            }
        }
    }
}
</style>