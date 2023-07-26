<template>
    <div style="height: 100%;" ref="refDiv">

        <swiper
            direction="horizontal"
            :slidesPerView="1" 
            :spaceBetween="30" 
            :mousewheel="{
                forceToAxis: false,
                sensitivity: 1,
                releaseOnEdges: true,
            }"
            :modules="[Mousewheel]" 
            class="mySwiper"
        >
            <SwiperSlide>
                <div class="dd-leftside">
                    <div class="dd-brand-name">New Fashion</div>
                    <img src="@/assets/images/shoes.png" alt="product_slide">
                </div>
                <div class="dd-rightside">
                    <div class="dd-mini-ads"></div>
                </div>
            </SwiperSlide>
            <SwiperSlide>slide2</SwiperSlide>
            <SwiperSlide>slide3</SwiperSlide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel} from 'swiper/modules';

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
        .dd-leftside {
            width: 100%;
            background-color: #ce071e;

            img {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 400px;
            }

            .dd-brand-name {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50% , -100%);
                font-size: 150px;
                white-space: nowrap;
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
                background-color: rgba(0,0,0,.18);
                backdrop-filter: blur(100px);
                position: absolute;
            }
        }
    }

}

</style>
