<template>
    <h2 class="text-center mt-2 mb-2">OUR APARTMENTS:</h2>
    <swiper :spaceBetween="5" :slidesPerView="3" :centeredSlides="false"
        :autoplay="{ delay: 2500, disableOnInteraction: true }" :pagination="{ clickable: true }"
        
        
        
        :breakpoints="{
            '375': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 5,
            },
        }" :navigation="true" :modules="modules" class="mySwiper" loop :loopedSlides="2">



        <swiper-slide><img src="../assets/img/homeloft.jpg" alt="">
            <div class="details">
                <h5>Superhotel fighissimo</h5>
                <p><i class="fa-solid fa-location-dot"></i> Bologna</p>
                <p>300<i class="fa-solid fa-euro-sign"></i> at night</p>
            </div>
            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

        <swiper-slide><img src="../assets/img/loft1.jpg" alt="">
            <div class="details">
                <h5>Apartment name</h5>
                <p>Apartment city</p>
                <p>apartment price</p>
            </div>

            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

        <swiper-slide><img src="../assets/img/bolobnb.jpg" alt="">
            <div class="details">
                <h5>Apartment name</h5>
                <p>Apartment city</p>
                <p>apartment price</p>
            </div>
            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

        <swiper-slide><img src="../assets/img/bolobnb.jpg" alt="">
            <div class="details">
                <h5>Superhotel fighissimo missisi</h5>
                <p><i class="fa-solid fa-location-dot"></i> Bologna</p>
                <p>300<i class="fa-solid fa-euro-sign"></i> at night</p>
            </div>

            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

        <swiper-slide><img src="../assets/img/bolobnb.jpg" alt="">
            <div class="details">
                <h5>Apartment name</h5>
                <p>Apartment city</p>
                <p>apartment price</p>
            </div>

            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

        <swiper-slide><img src="../assets/img/bolobnb.jpg" alt="">
            <div class="details">
                <h5>Apartment name</h5>
                <p>Apartment city</p>
                <p>apartment price</p>
            </div>
            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

        <swiper-slide><img src="../assets/img/home.jpg" alt="">
            <div class="details">
                <h5>Hotel Bologna </h5>
                <p><i class="fa-solid fa-location-dot"></i> Bologna</p>
                <p>300<i class="fa-solid fa-euro-sign"></i> at night</p>
            </div>

            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

        <swiper-slide><img src="../assets/img/bolobnb.jpg" alt="">
            <div class="details">
                <h5>Apartment name</h5>
                <p>Apartment city</p>
                <p>apartment price</p>
            </div>



            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

        <swiper-slide><img src="../assets/img/loft1.jpg" alt="">
            <div class="details">
                <h5>Apartment name</h5>
                <p>Apartment city</p>
                <p>apartment price</p>
            </div>
            <div class="sponsored"><i class="fa-solid fa-star"></i></div>
        </swiper-slide>

    </swiper>
    <div class="containerbtn">
        <a href="#" class="button mt-3 ">See All</a>
    </div>
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
<style lang="scss" scoped>
.swiper {
    margin-top: 10px;
    width: 100%;
    height: 100%;
}

.swiper-slide {
    font-size: 0.7rem;
    position: relative;


}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    padding: 1.5rem;
    filter: brightness(80%);
    /* Modifica la percentuale di luminosità (50% in questo esempio) */



}

.details {
    position: absolute;
    width: 250px;
    top: 210px;
    right: 295px;
    color: whitesmoke;
    z-index: 999;



}

.details h5 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    font-weight: 700;
}

.details p {
    margin-bottom: 0.1rem;
}



.sponsored {
    color: red;
    font-weight: 700;
    position: absolute;
    bottom: 245px;
    right: 35px;
}

.sponsored i {
    font-size: 1.2rem;
}



.containerbtn {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}



@media screen and (max-width: 768px) {
    .swiper-slide {
        width: 100%;
    }

    .details {
        top: 160px;
        right: 10px;
    }

    .sponsored {
        bottom: 185px;
        right: 10px;
    }
}

@media screen and (max-width: 375px) {
    .swiper-slide {
        width: 100%;
    }

    .details {
        top: 160px;
        right: 10px;
        width: 200px;
    }

    .details h5 {
        font-size: 0.8rem;
    }

    .sponsored {
        bottom: 185px;
        right: 10px;
    }
}


@media screen and (max-width: 768px) {
    .swiper-slide {
        width: 100%;
    }

    .details {
        top: 160px;
        right: 10px;
    }

    .sponsored {
        bottom: 185px;
        right: 10px;
    }
}

/* Regole per la risoluzione inferiore a 375px */
@media screen and (max-width: 375px) {
    .swiper-slide {
        width: 100%;
    }

    .details {
        top: 160px;
        right: 10px;
        width: 200px;
    }

    .details h5 {
        font-size: 0.8rem;
    }

    .sponsored {
        bottom: 185px;
        right: 10px;
    }
}
</style>
  