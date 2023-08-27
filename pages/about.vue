<template>
    <NuxtLayout name="default">
        <div class="dd-about">

            <TopBanner head="About Us" />

            <div class="dd-containt">
                <div class="dd-about-img">
                    <img src="../assets/images/about.png" alt="AboutUs" style="width: 100%;">
                </div>
                <div class="dd-about-text">
                    <h1>About pages</h1>
                    <p>
                        Welcome to Desi Dukaan, your ultimate destination for a seamless online shopping experience. As
                        passionate
                        curators of quality and style, we're here to redefine the way you shop in the digital realm.
                        <br> <br>
                        At Desi Dukaan, we're not just an online store – we're a gateway to an expansive world of products
                        that
                        cater to
                        your every need and desire. From trendsetting fashion pieces to cutting-edge gadgets, from home
                        essentials
                        that
                        transform spaces to unique finds that spark joy – we've carefully curated a collection that reflects
                        your
                        diverse tastes.
                        <br> <br>
                        Our commitment goes beyond providing products; it's about crafting a journey. With a user-friendly
                        interface,
                        secure transactions, and prompt customer support, we're dedicated to making your shopping experience
                        as
                        delightful as it is convenient.
                    </p>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.dd-about {
    max-width: 1536px;
    margin: 60px auto 0;
    font-family: 'Nunito';

    .dd-containt {
        margin: 0 auto;
        width: 90%;
        display: flex;
        align-items: center;

        .dd-about-img , .dd-about-text {
            width: 100%;
            padding: 10px;
        }
    }


    @media screen and (max-width : 991px) {
        .dd-containt {
            flex-direction: column;
        }
    }
}</style>