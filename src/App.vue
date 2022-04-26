<template>
  <app-container>
    <app-header></app-header>
    <app-nav></app-nav>
    <router-view></router-view>
  </app-container>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Navigation from './components/Navigation.vue';
import BaseContainer from './base/BaseContainer.vue';

export default {
  components: {
    appContainer: BaseContainer,
    appHeader: TheHeader,
    appNav: Navigation,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

* {
 font-family: 'Ubuntu', sans-serif; 
}

</style>