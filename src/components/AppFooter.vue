<script>

export default {
    name: "AppFooter",

}

</script>

<template>
<footer class="footer">
    <div class="left-section">
      <span>BoolBnb</span>
      <span><a href="#">&middot; Appartament</a></span>
      <span><a href="#">&middot; Team</a></span>
      <span><a href="#">&middot; Home</a></span>
    </div>
    <div class="right-section">
      <span><i class="fa-solid fa-earth-europe"></i> Italiano(IT)</span>
      <span>&middot; <i class="fa-solid fa-euro-sign" style="color: #000000;"></i> EUR</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f2f2f2;
      padding: 20px;
    }

    .footer a {
        text-decoration: none;
        color: inherit;
    }

    .left-section {
      display: flex;
    }

    .left-section span {
      margin-right: 10px;
    }

    .right-section {
      display: flex;
    }

    .right-section span {
      margin-right: 10px;
    }
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> origin/main
