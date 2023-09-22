<template>
    <div class="dd-sidebar">
        <ul>
            <li>
                <NuxtLink exactActiveClass="active-bar" :to="{name : 'dashboard'}">
                    <div>
                        <Icon name="mdi:home" />
                        Dashboard
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink exactActiveClass="active-bar" :to="{name : 'dashboard-add'}">
                    <div>
                        <Icon name="mdi:basket-plus" />
                        Add Product
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink exactActiveClass="active-bar" :class="routes.name == 'dashboard-modify-id' ? 'active-bar' : ''" :to="{name : 'dashboard-modify'}">
                    <div>
                        <Icon name="mdi:basket-check" />
                        Modify Product
                    </div>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink exactActiveClass="active-bar" :to="{name : 'dashboard-delete'}">
                    <div>
                        <Icon name="mdi:basket-minus" />
                        Delete Product
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
const routes = useRoute()
</script>

<style scoped lang="scss">
.dd-sidebar {
    padding: 10px 16px;
    box-sizing: border-box;
    font-family: 'Nunito';

    ul {
        padding: 0 !important;
        list-style: none;

        li {
            border-radius: 10px;
            margin: 2.5px 0;
            padding: 10px 12px;
            
            a {
                text-decoration: none;
                color: black;
                font-weight: 700;
                height: 100%;

                div {
                    display: flex;
                    align-items: center;

                    svg {
                        font-size: 20px;
                        margin-right: 5px;
                    }
                }
            }

            .active-bar {
                color: #fff;
            }
        }

        li:has(> .active-bar) {
            background-color: #3b71ca;
        }
    }
}

</style>