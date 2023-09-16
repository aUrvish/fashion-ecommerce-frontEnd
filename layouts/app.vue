<template>
    <div class="dd-app">
        <Dashnav :navToggle="isNavToggle" @navtoggle="(navVal) => isNavToggle = navVal" class="navbar" />
        <div class="dd-dash-layout">
            <Dashsidebar class="dd-sidebar" :class="isNavToggle ? 'd-block' : 'd-none'" />

            <div class="dd-dash-area">
                <div class="width-div">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const isNavToggle = ref(false)
</script>

<style scoped lang="scss">
.dd-app {
    background-color: #f5f7f8;
    height: 100vh;
    overflow: auto;
    position: relative;

    .navbar {
        position: sticky;
        width: 100%;
        top: 0%;
    }

    .dd-dash-layout {
        display: flex;

        .dd-sidebar {
            position: sticky;
            top: 57px;
            max-width: 260px;
            min-width: 260px;
            height: calc(100vh - 57px);
            background-color: #fff;
            border-right: 1px solid #E4E7EC;
        }

        .dd-dash-area {
            width: 100%;
            box-sizing: border-box;

            .width-div {
                width: 90%;
                max-width: 1536px;
                margin: 0 auto;
            }

            @media screen and (max-width : 600px) {
                .width-div {
                    width: auto;
                    margin: 0 5px;
                }
            }
        }

        @media screen and (max-width:1199px) {
            display: block;

            .dd-sidebar {
                height: auto;
                position: fixed;
                left: 0;
                right: 0;
                max-width: 100%;
                width: 97.5%;
                margin: 0 auto;
            }

            .d-none {
                display: none;
            }

            .d-block {
                display: block;
            }
        }
    }
}
</style>