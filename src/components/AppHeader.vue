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
          label: "Team",
          routeName: "ourteams",
        },
        {
          label: "Dropdown",
          routeName: "dropdown",
        },
      ],
      isMenuOpen: false,
      isIPhoneLayout: false,
    };
  },
  mounted() {
    this.checkLayout();
    window.addEventListener('resize', this.checkLayout);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      if (this.isIPhoneLayout) {
        this.isMenuOpen = false;
      }
    },
    checkLayout() {
      this.isIPhoneLayout = window.innerWidth <= 768;
    },
    startNow() {
      // Handle "Inizia ora" button click
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkLayout);
  },
};
</script>


<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <img src="../assets/img/" alt="logo.pnh">
      </div>
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="close-button" v-if="isMenuOpen && !isIPhoneLayout" @click="closeMenu">
        <span>X</span>
      </div>
      <ul class="menu" :class="{ open: isMenuOpen }">
        <li class="nav-item" v-for="menuItem in menuItems" :key="menuItem.routeName">
          <router-link class="nav-link" :to="menuItem.routeName" @click="closeMenu">{{ menuItem.label }}</router-link>
        </li>
        <li v-if="isIPhoneLayout">
          <button class="start-button" @click="startNow">Inizia ora</button>
        </li>
      </ul>
      <div class="cta">
        <a href="#" class="button ">Contatti</a>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 30px;
  display: flex;
  max-width: 1350px;
  z-index: 10;
}

.menu {
  width: 100%;
}

.menu li {
  display: inline-block;
}

.menu li a {
  color: white;
  font-size: 20px;
  display: block;
  padding: 15px;
  text-decoration: none;
}

.button {
  padding: 18px 28px;
  background: #316bff;
  color: white;
  display: inline-block;
  border-radius: 4px;
  text-decoration: none;
}

.hamburger {
  display: none;
}

.start-button {
  margin-top: 10px;
  padding: 12px 20px;
  background-color: #ffffff;
  color: #316bff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.close-button {
  cursor: pointer;
  color: rgb(255, 0, 0);
  font-size: 24px;
  margin-left: 10px;
}

.close-button span {
  color: red;
  display: inline-block;
  transform: rotate(45deg);
}

.close-button:hover span {
  transform: rotate(225deg);
  color: red;
}

@media (max-width: 768px) {
  .cta {
    display: none;
  }

  .menu {
    position: absolute;
    top: 0;
    right: -100%;
    background-color: #316bff;
    height: 100vh;
    padding-top: 80px;
    transition: right 0.3s ease-in;
  }

  .menu.open {
    right: 0;
  }

  .menu li {
    display: block;
  }

  .hamburger {
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 40px;
    right: 30px;
  }

  .hamburger span {
    background-color: white;
    height: 3px;
    width: 100%;
    display: block;
    margin-bottom: 5px;
  }
}
</style>




