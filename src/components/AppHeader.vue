<script>
export default {
  name: "AppHeader",
  data() {
    return {
      menuItems: [
    
        {
          label: "Apartments",
          routeName: "apartments",
        },
        {
          label: "About Us",
          routeName: "aboutus",
        },
      ],
      searchTerm: "",
    };
  },
  methods: {
    search() {
      // Implementazione fittizia della ricerca
      alert("Eseguendo la ricerca per: " + this.searchTerm);
    },
  },
};
</script>

<template>
 


    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand"><router-link class="nav-link" to="/">BOOLBNB</router-link></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="menuItem in menuItems" :key="menuItem.routeName">
              <router-link class="nav-link" :to="menuItem.routeName">{{ menuItem.label }}</router-link>
            </li>
            <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
           <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          </ul>



          <a class=" d-flex btn " type="submit"> <router-link class="nav-link" to="searchpage">Book
              now</router-link>
          </a>




        </div>
      </div>



    </nav>





</template>

<style lang="scss" scoped>

  .navbar {
    height: 55px;
    width: 80%;
    border: 1px solid black;
      padding: 5px;
    margin: 0 auto;
    position: relative;
    top:50px;
    z-index: 999;
    background-color: white;
    border-radius: 120px;

    .btn {
      border-radius: 120px;
      border: 1px solid black;
      background-color: (rgb(182, 177, 173));
      // border-style: hidden;
      color: white;
    }


  }


</style>

