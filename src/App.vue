<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppAboutUs from './pages/AppAboutUs.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
    AppAboutUs
  },
};

</script>

<template>
  <AppHeader />
  <router-view />
  <AppAboutUs></AppAboutUs>
  <AppFooter />

</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
