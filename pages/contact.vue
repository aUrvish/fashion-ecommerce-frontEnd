<template>
    <NuxtLayout name="default">
        <div class="dd-contact">
            <TopBanner head="Contact Us" />
            <div class="dd-containt">
                <div class="dd-textarea">
                    <h1 class="text-red-500">Contact page</h1>
                    <Textbox/>  
                </div>
                <div class="dd-info"></div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.dd-contact {
    max-width: 1536px;
    margin: 60px auto 0;
    font-family: 'Nunito';

    .dd-containt {
        margin: 0 auto;
        width: 90%;
        display: flex;
        align-items: center;

        .dd-textarea,
        .dd-info {
            width: 100%;
            padding: 10px;
        }
    }


    @media screen and (max-width : 991px) {
        .dd-containt {
            flex-direction: column;
        }
    }
}
</style>
