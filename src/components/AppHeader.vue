<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuItems: [
        {
          label: "Home",
          routeName: "/",
        },
        {
          label: "Apartments",
          routeName: "apartments",
        },
        {
          label: "About Us",
          routeName: "aboutus",
        },

        {
          label: "Dropdown",
          routeName: "dropdown",
        },
      ],

    };
  },


};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand">
        <router-link class="nav-link text-white" to="/"><img class="logo mr-1" src="../assets/img/bnb.png" alt=""> BOOLBNB </router-link></a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <div class="ms-auto">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="menuItem in menuItems" :key="menuItem.routeName">
              <router-link class="nav-link" :to="menuItem.routeName">{{ menuItem.label }}</router-link>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  width: 100%;
  z-index: 999;
 background-color: #01ABE3 !important;


  

  .btn {
    border-radius: 120px;
    border: 1px solid black;
    background-color: #01ABE3;

  }


}

.logo{
  width: 40px;
  border-radius: 50%;
  background-color: white;
}


</style>

