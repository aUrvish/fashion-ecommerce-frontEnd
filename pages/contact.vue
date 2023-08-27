<template>
    <NuxtLayout name="default">
        <div class="dd-contact">
            <TopBanner head="Contact Us" />
            <div class="dd-containt">
                <div class="dd-textarea">
                    <h1 class="text-red-500">Contact Us</h1>
                    <p>Empowering Your Shopping Experience.</p>
                    <div class="dd-input-div">
                        <Textbox />
                        <Textbox />
                        <Textbox />
                        <Textbox />
                        <div class="dd-end-div">
                            <Textarea />
                            <ButtonType2 text="Send" bgImg="linear-gradient(120deg,#42d392,#647eff)" radius="5px"
                                style="width: 100%; margin-top: 10px;" />
                        </div>
                    </div>
                </div>
                <div class="dd-info">
                    <div>
                        <div class="dd-info-item">
                            <div class="dd-svg-icon">
                                <Icon name="mdi:map-marker" />
                            </div>
                            <div>
                                <h4>Address</h4>
                                <p>4 Stemson Way, Port Wentworth GA 31407</p>
                            </div>
                        </div>
                        <div class="dd-info-item">
                            <div class="dd-svg-icon">
                                <Icon name="mdi:email" />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <NuxtLink to="mailto:desidukaan@gmail.com">desidukaan@gmail.com</NuxtLink>
                            </div>
                        </div>
                        <div class="dd-info-item">
                            <div class="dd-svg-icon">
                                <Icon name="mdi:phone" />
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <NuxtLink to="tel:6500065000">+6500065000</NuxtLink>
                            </div>
                        </div>
                    </div>

                </div>
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
        margin: 60px auto;
        width: 90%;
        display: flex;
        align-items: center;

        .dd-textarea {
            width: 100%;

            h1 {
                margin-bottom: 0;
            }

            p {
                margin-top: 0;
            }

            .dd-input-div {
                // border: 1px solid red;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;

                .dd-end-div {
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
            }
        }

        .dd-info {
            width: 100%;
            padding: 10px;
            display: grid;
            place-items: center;

            .dd-info-item {
                display: flex;
                align-items: center;
                margin: 10px 0;

                .dd-svg-icon {
                    height: 50px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    display: grid;
                    place-items: center;
                    border: 1px dashed #999;


                    svg {
                        font-size: 30px;
                        color: #999;
                    }
                }
                
                h4 {
                    margin: 0 10px;
                }
                
                a , p {
                    margin: 0 10px;
                    color: #999;
                    text-decoration: none;
                }
            }
        }
    }


    @media screen and (max-width : 991px) {
        .dd-containt {
            flex-direction: column;
        }
    }
}
</style>