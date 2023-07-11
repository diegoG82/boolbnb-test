<template>
    <h2 class="text-center mb-4 mt-4">TRENDING APPARTMENTS</h2>
    <p>Sponsored:</p>
    <swiper :spaceBetween="5" :slidesPerView="3" :centeredSlides="false"
        :autoplay="{ delay: 2500, disableOnInteraction: true }" :pagination="{ clickable: true }" :navigation="true"
        :modules="modules" class="mySwiper" loop :loopedSlides="2">
        <swiper-slide><a href=""><img src="../assets/img/bolobnb.jpg" alt=""></a>
            <div class="tranding-slide-content">
                <h1 class="appartament-price">$20</h1>
                <div class="tranding-slide-content-bottom">
                  <h2 class="appartament-name">
                    Special Pizza
                  </h2>
                  <h3 class="appartament-rating">
                    <span>4.5</span>
                    <div class="rating">
                        <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                        <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                        <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                        <i class="fa-solid fa-star" style="color: #fbff00;"></i>
                    </div>
                  </h3>
                </div>
              </div>
        
        </swiper-slide>
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
    height: 600px;
    margin-bottom: 20px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 550px;
    height: 510px;
    object-fit: cover;
    border-radius: 50px
}

.tranding-slide .tranding-slide-content {
  position: absolute;
  left: 5;
  top: 5;
  right: 10;
  bottom: 10;
}

.tranding-slide-content .appartament-price {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: white;
}

.tranding-slide-content .tranding-slide-content-bottom {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: white;
}

.appartament-rating {
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
  