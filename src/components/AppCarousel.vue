<template>
    <h2 class="text-center mt-2 mb-2">OUR APARTMENTS:</h2>
    <swiper :spaceBetween="5" :slidesPerView="5" :centeredSlides="false"
        :autoplay="{ delay: 2500, disableOnInteraction: true }" :pagination="{ clickable: true }" :navigation="true"
        :modules="modules" class="mySwiper" loop :loopedSlides="2">
    
    
    :modules="modules" class="mySwiper">
        <swiper-slide><img src="../assets/img/bolobnb.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/bolobnb.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/loft1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/homeloft.jpg" alt=""></swiper-slide><swiper-slide><img
                src="../assets/img/bolobnb.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/searchloft.jpg" alt=""></swiper-slide><swiper-slide><img src="../assets/img/bolobnb.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/img/home.jpg" alt=""> </swiper-slide><swiper-slide><img src="../assets/img/loft1.jpg" alt=""></swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

// import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>
<style>



/* body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
} */

.swiper {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    /* background-color:#316bff; */

    /* border: 1px solid black; */
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
   
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    padding: 1.5rem;

}
</style>
  