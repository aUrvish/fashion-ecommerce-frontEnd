<script setup>
const props = defineProps({
    navToggle : {
        default : false
    }
})
</script>

<template>
    <header class="dd-header">
        <div class="dd-container">
            <NuxtLink :to="{ name: 'index' }" class="dd-logo">
                <img src="@/assets/images/logo-dark.svg" alt="Logo">
            </NuxtLink>

            <div class="dd-right">
                <div class="dd-user">
                    <img src="../assets/images/avtar.svg" alt="Avtar">
                    <h3>Admin</h3>
                </div>
                <Button bgColor="#3b71ca" text="Logout" radius="5px" />
                <Icon :name="navToggle ? 'mdi:close' : 'mdi:menu'" @click="navToggle = !navToggle , $emit('navtoggle' , navToggle)" class="dd-nav-collapse" size="25px" />
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.dd-header {
    padding: 5px 0;  
    z-index: 99;
    font-family: 'Nunito';
    background-color: #fff;
    border-bottom: 1px solid #E4E7EC;
    .dd-container {
        width: 97.5%;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        display: flex;
        position: relative;

        .dd-logo {
            width: 150px;
            outline: none;
        }

        .dd-right {
            display: flex;
            align-items: center;
            .dd-user {
                display: flex;
                align-items: center;
                margin: 0 15px;
                
                img {
                    height: 30px;
                }

                h3 {
                    margin: 0 5px;
                }
            }

            .dd-nav-collapse {
                display: none;
                margin-left: 10px;

                @media screen and (max-width : 1199px) {
                    display: block;
                }
            }
        }
    }
}
</style>