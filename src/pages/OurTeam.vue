<template>
  <div>
    <div class="hero">
      <div class="container">
        <h1 class="big-text text-center">OUR TEAM</h1>
      </div>
      <img id="homehero" src="../assets/img/fototeams.jpg" alt="">
    </div>

    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-3 col-md-6 mx-auto">
          <div class="card mb-4 mt-4">
            <img src="../assets/img/back2card.jpg" alt="cardback.png" class="card_img">
            <img src="../assets/img/Luca.jpg" alt="profilo.png" class="profile_img">
            <div class="card_content">
              <h2 class="member_name mt-1">Luca</h2>
              <p class="job_title">Jr. Full-Stack developer</p>
              <p class="a_bout">
                Lorem Ipsum
              </p>
              <a href="#" class="btn">Contact</a>
              <ul class="social_media d-flex gap-2">
                <li><a href="#"></a><i class="fa-brands fa-linkedin"></i></li>
                <li><a href="#"></a><i class="fa-brands fa-github" style="color: #000000;"></i></li>
                <li><a href="#"></a><i class="fa-solid fa-envelope" style="color: #eb0000;"></i></li>
                <li><a href="#"></a><i class="fa-brands fa-instagram" style="color: #ff9500;"></i></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mx-auto">
          <div class="card mb-4 mt-4">
            <img src="../assets/img/back2card.jpg" alt="cardback.png" class="card_img">
            <img src="../assets/img/Stefano.jpg" alt="profilo.png" class="profile_img">
            <div class="card_content">
              <h2 class="member_name mt-1">Stefano</h2>
              <p class="job_title">Jr. Full-Stack developer</p>
              <p class="a_bout">
                Lorem Ipsum
              </p>
              <a href="#" class="btn">Contact</a>
              <ul class="social_media d-flex gap-2">
                <li><a href="#"></a><i class="fa-brands fa-linkedin"></i></li>
                <li><a href="#"></a><i class="fa-brands fa-github" style="color: #000000;"></i></li>
                <li><a href="#"></a><i class="fa-solid fa-envelope" style="color: #eb0000;"></i></li>
                <li><a href="#"></a><i class="fa-brands fa-instagram" style="color: #ff9500;"></i></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="card mb-4 mt-4">
            <img src="../assets/img/back2card.jpg" alt="cardback.png" class="card_img">
            <img src="../assets/img/Luigi.jpg " alt="profilo.png" class="profile_img">
            <div class="card_content">
              <h2 class="member_name mt-1">Luigi</h2>
              <p class="job_title">Jr. Full-Stack developer</p>
              <p class="a_bout">
                Lorem Ipsum
              </p>
              <a href="#" class="btn">Contact</a>
              <ul class="social_media d-flex gap-4">
                <li><a href="#"></a><i class="fa-brands fa-linkedin"></i></li>
                <li><a href="#"></a><i class="fa-brands fa-github" style="color: #000000;"></i></li>
                <li><a href="#"></a><i class="fa-solid fa-envelope" style="color: #eb0000;"></i></li>
                <li><a href="#"></a><i class="fa-brands fa-instagram" style="color: #ff9500;"></i></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mx-auto">
          <div class="card mb-4 mt-4">
            <img src="../assets/img/back2card.jpg" alt="cardback.png" class="card_img">
            <img src="../assets/img/diego.png" alt="profilo.png" class="profile_img">
            <div class="card_content">
              <h2 class="member_name mt-1">Diego</h2>
              <p class="job_title">Jr. Full-Stack developer</p>
              <p class="a_bout">
                Lorem Ipsum
              </p>
              <a href="#" class="btn">Contact</a>
              <ul class="social_media d-flex gap-2">
                <li><a href="#"></a><i class="fa-brands fa-linkedin"></i></li>
                <li><a href="#"></a><i class="fa-brands fa-github" style="color: #000000;"></i></li>
                <li><a href="#"></a><i class="fa-solid fa-envelope" style="color: #eb0000;"></i></li>
                <li><a href="#"></a><i class="fa-brands fa-instagram" style="color: #ff9500;"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAboutUs",
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  position: relative;
  // color: white;
}

#homehero {
  position: absolute;
  top: 2;
  right: 30;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
}

.hero {
  position: relative;
  height: 500px;
  display: flex;
  width: 100%;
  align-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, .2) rgba(0, 0, 0, 0.9) 70.71%), url() no-repeat center center;
  background-size: contain;
  overflow: hidden;
}

.hero::after {
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

.card {
  height: 550px;
  width: 300px;
  margin: 0 auto;
  position: relative;
  box-shadow: .5rem .5rem 3rem rgba(0, 0, 0, 0.2);
}

.card_img {
  width: 100%;
  object-fit: cover;
  clip-path: polygon(0 0, 100% 0, 100% 78%, 0% 100%);
  position: absolute;
  top: 0;
  left: 0;
}

.profile_img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  z-index: 999;
  border: 0.2rem solid rgb(12, 190, 202);
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card_content {
  position: relative;
  padding-top: 180px;
  text-align: center;
}

.card h2,
.card p {
  position: relative;

  // z-index: 1;
}

.card h2 {
  font-size: 1.5rem;
  top: 28%
}

.job_title {
  color: #1508c5;
  top: 30%;
  font-size: 1rem;
}

.a_bout {
  font-size: 1rem;
  text-align: center;
  color: #23a763;
  top: 30%
}

.card .btn {
  padding: 0.5rem 0.5rem;
  width: 40%;
  margin: 0 auto;
  background-color: #00ccff;
  border-radius: 25px;
  text-transform: uppercase;
  color: white;
  transition: all 0.5s;
  position: relative;
  top: 30%;
}

.social_media {
  position: relative;
  top: 30%;
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 0;
  margin-top: 1rem;
  border-top: 1px solid black;
}

.social_media i {
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
