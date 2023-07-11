<template>
    <h2 class="text-center mb-4 mt-4">TRENDING APPARTMENTS</h2>
    <p>Sponsored:</p>
    <swiper :spaceBetween="5" :slidesPerView="3" :centeredSlides="false"
        :autoplay="{ delay: 2500, disableOnInteraction: true }" :pagination="{ clickable: true }" :navigation="true"
        :modules="modules" class="mySwiper" loop :loopedSlides="2">
        <swiper-slide><a href=""><img src="../assets/img/bolobnb.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href=""><img src="../assets/img/loft1.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href=""><img src="../assets/img/bolobnb.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href=""><img src="../assets/img/bolobnb.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href=""><img src="../assets/img/bolobnb.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href=""><img src="../assets/img/bolobnb.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href=""><img src="../assets/img/homeloft.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href=""><img src="../assets/img/bolobnb.jpg" alt=""></a></swiper-slide>
        <swiper-slide><a href=""><img src="../assets/img/bolobnb.jpg" alt=""></a></swiper-slide>


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
.swiper {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    /* background: #fff; */
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {

    display: block;
    width: 550px;

    height: 310px;
    object-fit: cover;
    border-radius: 50px
}
</style>
  