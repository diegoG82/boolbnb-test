<script>
import AppHeader from './components/Appheader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooter
  },
};

</script>

<template>
  <AppHeader />
  <AppFooter />
  <router-view />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
