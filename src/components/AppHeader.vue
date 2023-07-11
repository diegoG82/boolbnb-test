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

    };
  },


};
</script>

<template>
  <div class="header">
    <div class="logo">
        <img src="" alt="logo.pnh">
      </div>
        <ul class="menu">
          <li class="nav-item" v-for="menuItem in menuItems" :key="menuItem.routeName">
                <router-link class="nav-link" :to="menuItem.routeName">{{ menuItem.label }}</router-link>
              </li>
        </ul>
      <div class="cta">
        <a href="#" class="button">Contatti</a>
      </div>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
  </div>
  
  
  
  </template>
  
  <style lang="scss" sccoped>
  .header{
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
  
  .menu{
    width: 100%;
  }
  
  .menu li{
    display: inline-block;
  }
  .menu li a {
    color: black;
    font-size: 20px ;
    display: block;
    padding: 15px;
    text-decoration: none;
    
  }
  .button{
    padding: 18px 28px;
    background: #316bff; 
    color: white;
    display: inline-block;
    border-radius: 4px;
    text-decoration: none;
  }
   
  
  
  
  .hamburger{
    display: none;
  }
  @media(max-width:768px) {
  .cta{
      display: none;
  }
  .menu{
    position: absolute;
    top: 0;
    right:-100;
    height: 100vh;
    padding-top:80px ;
  }
  .menu li {
    display: block;
  }
  
  .hamburger{
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 40px;
    right:30px;
  }
  .hamburger span{
    background-color: white;
    height: 3px;
    width: 100%;
    display:block ;
    margin-bottom: 5px;
  }
   }
  </style>