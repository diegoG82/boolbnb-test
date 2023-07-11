<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import AppCarousel from './components/AppCarousel.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
    // AppCarousel
  },
};

</script>
<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
