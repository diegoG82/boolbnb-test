<script>
 export default{
    name:"AppAboutUs",
 }
</script>


<template>
    <div class="hero">
        <div class="hero__content">
            <h1 class="big-text">TEAM</h1>
        </div>
        <img  id="homehero" src="../assets/img/team.jpeg" alt="">
    </div>
    

    <!-- SECONDO TIPO TEAM -->
    <section class="section2">
      <div class="container">
         <h1 class="heading">TEAM</h1>
         <div class="card_wrapper">
            <div class="card2">
               <img src="../assets/img/homeloft.jpg" alt="cardback.png" class="card_img">
               <img src="../assets/img/homeloft.jpg" alt="profilo.png" class="profile_img">
               <h1>Luca Petrosa</h1>
               <p class="job_title">Jr. Full-Stack developer</p>
               <p class="a_bout">
                  breve desrizione
               </p>
               <a href="#" class="btn">Contact</a>
               <ul class="social_media">
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
               </ul>
            </div>
            <div class="card2">
               <img src="../assets/img/homeloft.jpg" alt="cardback.png" class="card_img">
               <img src="../assets/img/homeloft.jpg" alt="profilo.png" class="profile_img">
               <h1>Stefano Martino</h1>
               <p class="job_title">Jr. Full-Stack developer</p>
               <p class="a_bout">
                  breve desrizione
               </p>
               <a href="#" class="btn">Contact</a>
               <ul class="social_media" >
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
               </ul>
            </div>
            <div class="card2">
               <img src="../assets/img/homeloft.jpg" alt="cardback.png" class="card_img">
               <img src="../assets/img/homeloft.jpg" alt="profilo.png" class="profile_img">
               <h1>Diego Giardina</h1>
               <p class="job_title">Jr. Full-Stack developer</p>
               <p class="a_bout">
                  breve desrizione   
               </p>
               <a href="#" class="btn">Contact</a>
               <ul class="social_media" >
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
               </ul>
            </div>
            <div class="card2">
               <img src="../assets/img/homeloft.jpg" alt="cardback.png" class="card_img">
               <img src="../assets/img/homeloft.jpg" alt="profilo.png" class="profile_img">
               <h1>Luigi De Filippo</h1>
               <p class="job_title">Jr. Full-Stack developer</p>
               <p class="a_bout">
                  breve desrizione
               </p>
               <a href="#" class="btn">Contact</a>
               <ul class="social_media" >
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
                  <li><a href="#"></a>Social</li>
               </ul>
            </div>
         </div>
      </div>
    </section>
    

</template>

<style lang="scss" scoped>
body{
   background-color: #f5f5f5;
}


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
.big-text{
   text-align: center;
}




/* CARD 2 PROVA  */
.section2{
   padding: 5rem 0;
   background-color: #ffffff;
}
.heading{
   text-transform: uppercase;
   font-size: 3.5rem;
   letter-spacing: 3px;
   margin-right: -3px;
   margin-bottom: 5rem;
   text-align: center;
   color: #333;
   position: relative;

}
.heading:after{
   content: "";
   width: 10rem;
   height: 0.8rem;
   background-color: #02e7dc;
   position: absolute;
   bottom: -2rem;
   left: 50%;
   transform: translateX(-50%);
   border-radius: 2rem;
}

.card_wrapper{
   display: flex;
   align-items: center;
   align-content: center;
   flex-direction: column;

}

.card2{
   width: 34rem;
   background-color: #ebeef8 ;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 2rem 0;
   box-shadow: .5rem .5rem 3rem rgba(0 , 0 , 0 , 0.2);
}
.card2 .card_img{
   width: 100%;
   height: 26rem;
   object-fit: cover;
   clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
}
.profile_img{
   width: 15rem;
   height: 15rem;
   object-fit: cover;
   border-radius: 50%;
   margin-top: -11rem;
   z-index: 999;
   border: 1rem solid rgb(12, 190, 202) ;
}

.card2 h1{
   font-size: 2.5rem;
   color: #333;
   margin: 1.5rem 0 ;
}

.job_title{
   color: #777;
   font-size: 1.5rem;
   font-weight: 300;
}

.a_bout{
   font-size: 1.5rem;
   margin: 1.5rem 0;
   font-style: italic;
   text-align: center;
   color: #333;
}

.card2 .btn{
   padding: 1rem 2.5rem;
   background-color: #00ccff;
   border-radius: 2rem;
   margin: 1rem 0;
   text-transform: uppercase;
   color: white;
   font-size: 1.4rem;
   transition: all .5s;
}

.card2 .btn:hover{
   transform: translateY(-2px);
   box-shadow: .5rem .5rem 2rem rgba(0 , 0 ,0.2);
}
.card2 .btn:activer{
   transform: translateY(-2px);
   box-shadow: none;
}

.social_media{
   width: 100%;
   list-style: none;
   display: flex;
   justify-content: space-evenly;
   padding: 2rem 0;
   margin-top: 1.5rem;
   border-top: 1px solid black;
}

.social_media i{
   font-size: 3rem;
}

@media  screen and (min-width: 700px) {
   .card_wrapper{
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
   }
   .card2{
      margin: 2rem;
   }
   
   @keyframes fadeIn{
      from{
         opacity: 0;
      }
      to{
         opacity: 1;
      }
   }

   .card2:nth-child(1){
      animation: fadeIn .5s .5s backwards;
   }
   .card2:nth-child(2){
      animation: fadeIn .5s 1s backwards;
   }
   .card2:nth-child(3){
      animation: fadeIn .5s 1.5s backwards;
   }
   .card2:nth-child(4){
      animation: fadeIn .5s 2s backwards;
   }
   
   .card2:hover{
      transform: scale(1.05);
   }

}



</style>