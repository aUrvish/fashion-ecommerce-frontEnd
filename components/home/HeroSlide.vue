<template>
    <div style="height: 100%;" ref="refDiv">

        <swiper
            :direction="direction"
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
            <SwiperSlide>slide1</SwiperSlide>
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

const direction = ref('vertical')

onMounted(
    () => {
        if(window.innerWidth < 991){
            direction.value = 'horizontal'
        }
    }
)
</script>

<style scoped lang="scss">
.swiper {
    width: 100%;
    height: 100%;
    
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        animation: fade 2s ease-in-out;
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;    
    }

}

</style>
