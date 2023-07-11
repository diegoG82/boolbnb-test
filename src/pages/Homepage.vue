<script>
import Swiper from 'swiper';

export default {
  mounted() {
    new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  },
  data() {
    return {
      slides: [
        {
          image: '../assets/img/home.jpg',
          alt: 'Tranding',
          price: '$20',
          name: 'michale jordan 23',
          rating: '4.5',
        },
        {
          image: '../assets/img/home.jpg',
          alt: 'Tranding',
          price: '$20',
          name: 'Meat 23',
          rating: '4.5',
        },
        {
          image: '../assets/img/home.jpg',
          alt: 'Tranding',
          price: '$40',
          name: 'villa bye',
          rating: '4.5',
        },
        {
          image: '../assets/img/home.jpg',
          alt: 'Tranding',
          price: '$15',
          name: 'Villa ciao',
          rating: '4.5',
        },
        {
          image: '../assets/img/home.jpg',
          alt: 'Tranding',
          price: '$15',
          name: 'Bayer moncao',
          rating: '4.5',
        },
        {
          image: '../assets/img/home.jpg',
          alt: 'Tranding',
          price: '$20',
          name: 'Montecarlo Appart',
          rating: '4.5',
        },
        {
          image: '../assets/img/home.jpg',
          alt: 'Tranding',
          price: '$8',
          name: 'Polo Nord',
          rating: '4.5',
        },
      ],
    };
  },
};
</script>



<template>
    <div class="hero">
        <div class="hero__content">
            <p class="intro-text">BoolBnB</p>
            <h1 class="big-text">Host indimenticabili per <br>  soggiorni indimenticabili</h1>
            <a  href="#" class="button mt-5">Discover More</a>
        </div>
        <img  id="homehero" src="../assets/img/home.jpg" alt="">
    </div>
   
</template>






<style lang="scss" scoped>
#homehero{
    position: absolute;
    top: 2;
    right: 30 ;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
}


.hero{
    position: relative;
    height: 100vh;
    display: flex;
    width: 100%;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,.2) rgba(0,0,0,0.9) 70.71%), url() no-repeat center center;
    background-size: cover;
    overflow: hidden;
}

.hero::after{
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.4;
}
.hero__content{
    width: 100%;
    max-width: 1350px;
    margin: 0 auto;
    z-index: 1;
    position: relative;
}
.hero__content h1,
.hero__content p
{
color: white;
}
.ciao1{
  display: flex;
  flex-direction: row-reverse;
}
.intro-text{
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
}
.big-text{
    font-size: 70px;
}

.mission{
    margin-top: 30px;
    // INSERIRE IMG BACKGROUND QUI
}
// Card

.card{
  border: none;
}

.card img {
  width: 100%;
  height: auto;
}

.card h3 {
  margin-top: 10px;
  font-size: 18px;
}

.card p {
  margin-top: 5px;
  font-size: 14px;
}

.poster{
  display: flex;
  height: 600px;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
}
.poster__img{
  width: 50%;
  height: 500px;
}
.poster__img img{
  object-fit: contain;
  width:100%;
  height: 550px;
}
.poster__content{
  width: 50%;
}
.text-poster{
  font-size: 2rem;
}

.cntfl{
  margin-top: 100px;
  margin-bottom: 100px;
  background-image: url(../assets/img/homeloft.jpg);
   background: linear-gradient(0deg, rgba(0,0,0,.2) rgba(0,0,0,0.9) 70.71%), url() no-repeat center center;
}

.colfaqdet{
  flex-wrap: wrap;
}
.faqdet{
  flex-basis: calc(100% / 3);
  margin-bottom: 10px;
}


@media(max-width:768px) {
.big-text{
    font-size: 40px;
}

 }

 
</style>