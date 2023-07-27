<template>
    <div style="height: 100%;" ref="refDiv">

        <swiper direction="horizontal" :slidesPerView="1" :spaceBetween="30" :mousewheel="{
            forceToAxis: false,
            sensitivity: 1,
            releaseOnEdges: true,
        }" :modules="[Mousewheel]" class="mySwiper">
            <SwiperSlide>
                <div class="dd-leftside">
                    <div class="dd-fashion-head">New Fashion</div>
                    <img src="@/assets/images/shoes.png" alt="product_slide">
                    <p class="dd-slider-aption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat et quam laudantium incidunt, quo eaque! Culpa quaerat incidunt voluptates, voluptate quibusdam aut a unde consectetur at veniam blanditiis sapiente velit.</p>
                    <Button class="dd-slide-btn" text="Show Details" bgColor="#fff" color="#000" radius="5px" />
                </div>
                <div class="dd-rightside">
                    <!-- <div class="dd-mini-ads"></div> -->
                </div>
            </SwiperSlide>
            <SwiperSlide>slide2</SwiperSlide>
            <SwiperSlide>slide3</SwiperSlide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
</script>

<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
        display: flex;
        position: relative;
        overflow: hidden;

        .dd-leftside {
            width: 100%;
            background-color: #ce071e;

            img {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 30%;
            }

            .dd-fashion-head {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -100%);
                white-space: nowrap;
                font-size: 10vw;
                white-space: nowrap;
            }

            .dd-slider-aption {
                position: absolute;
                width: 30%;
                margin-left: 10%;
                font-size: 1.3vw;
                color: white;
                top: 50%;
            }

            .dd-slide-btn {
                top: 68%;
                position: absolute;
                margin-left: 10%;
            }
        }

        .dd-rightside {
            width: 100%;

            .dd-mini-ads {
                width: 300px;
                height: 120px;
                bottom: 20%;
                right: 0;
                transform: translate(-20%, 50%);
                background: rgba(0, 0, 0, 0.15);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-radius: 10px;
                border: .1px solid rgba(0, 0, 0, 0.18);
                position: absolute;
            }
        }
    }

}
</style>
