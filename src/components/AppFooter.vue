<template>
  <footer class="footer d-flex justify-content-between">
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex gap-2">
          <!-- <span>BoolBnb</span> -->
          <a href="#">HOME</a>
          <a href="#">APARTMENTS</a>
          <a href="#">ABOUT US</a>
        </div>
        <div class="col-md-6 right d-flex gap-2">
          <p><i class="fa-solid fa-earth-europe"></i> Italiano (IT)</p>
          <p><i class="fa-solid fa-money-bill-1"></i></p>
          <p><i class="fa-solid fa-credit-card"></i></p>
          <p><i class="fa-solid fa-euro-sign"></i> EUR</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #01ABE3;
  display: flex;
  color: whitesmoke;
  height: 70px;
  line-height: 70px;
}

.footer a {
  text-decoration: none;
  color: inherit;
}

p {
  margin-bottom: 0%;
}

.right{
  justify-content: flex-end;
}

@media (max-width: 810px) {
  .footer {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }

 


 
}

@media (max-width: 428px) {
  .footer .col-md-6  {
    justify-content: center;
    height: 30px;
    line-height: 30px;

  }

  .right{
    justify-content: center;
  }

  // .footer .col-md-6 p {
  //   display: none;
  // }


}
</style>
