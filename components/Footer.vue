<template>
    <footer>
        <div class="dd-main-footer">
            <div class="dd-footer-logo">
                <img src="../assets/images/logo-light.svg" alt="Logo">
                <p>Empowering Your Shopping Experience.</p>

                <div class="dd-footer-social">
                    <NuxtLink to="#">
                        <Icon name="mdi:facebook" />
                    </NuxtLink>
                    <NuxtLink to="#">
                        <Icon name="mdi:instagram" />
                    </NuxtLink>
                    <NuxtLink to="#">
                        <Icon name="mdi:twitter" />
                    </NuxtLink>
                    <NuxtLink to="#">
                        <Icon name="mdi:google-plus" />
                    </NuxtLink>
                </div>
            </div>
            <div class="dd-footer-info">
                <h4 class="dd-footer-sub-head">About</h4>
                <div class="dd-add">
                    <Icon name="mdi:map-marker"/>
                    <p>4 Stemson Way, Port Wentworth GA 31407</p>
                </div>
                <div class="dd-email">
                    <Icon name="mdi:email"/>
                    <NuxtLink to="mailto:desidukaan@gmail.com">desidukaan@gmail.com</NuxtLink>
                </div>
                <div class="dd-phone">
                    <Icon name="mdi:phone"/>
                    <NuxtLink to="tel:6500065000">+6500065000</NuxtLink>
                </div>
            </div>
            <div class="dd-page-link">
                <div>
                    <h4 class="dd-footer-sub-head">Pages</h4>
                    <p>
                        <NuxtLink :to="{name : 'contact'}">Contact US</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink :to="{name : 'about'}">About US</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink to="#">All Products</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink to="#">Corporate Information</NuxtLink>
                    </p>
                </div>
            </div>
            <div class="dd-policy-link">
                <div>
                    <h4 class="dd-footer-sub-head">Consumer Policy</h4>
                    <p>
                        <NuxtLink to="#">Terms of Use</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink to="#">Privacy Policy</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink to="#">Security</NuxtLink>
                    </p>
                    <p>
                        <NuxtLink to="#">Sitemap</NuxtLink>
                    </p>
                </div>
            </div>
        </div>
        <div class="dd-sub-footer">
            <p>@{{ new Date().getFullYear() }} <a href="https://github.com/aUrvish/fashion-ecommerce-frontEnd">Desi Dukaan</a>. All rights reserved.</p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #3e4450;
    font-family: 'Nunito';

    .dd-main-footer {
        width: 90%;
        max-width: 1536px;
        margin: 0 auto;
        padding: 50px 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;

        .dd-footer-logo {
            p {
                margin: 0;
                color: #bbb;
            }

            .dd-footer-social {
                margin: 12px 0;
                display: flex;

                a {
                    svg {
                        font-size: 24px;
                        margin: 0 5px;
                    }

                    &:nth-child(1) {
                        color: #1877F2;
                    }

                    &:nth-child(2) {
                        color: #d62976;
                    }

                    &:nth-child(3) {
                        color: #00acee;
                    }

                    &:nth-child(4) {
                        color: #db4a39;
                    }

                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }
        }

        .dd-footer-info {

            .dd-footer-sub-head {
                margin-top: 0;
                color: #fff;
            }

            .dd-add , .dd-email , .dd-phone {
                display: flex;
                margin: 15px 0;
                justify-content: space-between;
                
                svg {
                    color: #fff;
                    font-size: 22px;
                }

                p , a {
                    margin: auto 0;
                    width: 90%;
                    color: #bbb;
                    text-decoration: none;
                }
            }
        }

        .dd-page-link {
            display: flex;
            justify-content: center;

            div {
                .dd-footer-sub-head {
                    margin-top: 0;
                    color: #fff;
                }
                
                p > a {
                    text-decoration: none;
                    color: #bbb;
                }
            }
        }
        .dd-policy-link {
            display: flex;
            justify-content: center;

            div {
                .dd-footer-sub-head {
                    margin-top: 0;
                    color: #fff;
                }
                
                p > a {
                    text-decoration: none;
                    color: #bbb;
                }
            }
        }


        @media screen and (max-width : 991px) {
            grid-template-columns:1fr;

            .dd-page-link , .dd-policy-link {
                justify-content: start;
            }
        }
    }

    .dd-sub-footer {
        background-color: #333742;
        padding: 7px 0;

        p , a {
            text-align: center;
            color: white;
            margin: 0;
            font-size: 13px;
            text-decoration: none;
        }
    }
}
</style>