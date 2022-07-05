<template>
  <app-container>
    <app-nav v-if="!['404', 'login'].includes($route.name)"></app-nav>
    <router-view></router-view>
  </app-container>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import BaseContainer from "./base/BaseContainer.vue";

export default {
  components: {
    appContainer: BaseContainer,
    appNav: Navigation
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

* {
  font-family: "Ubuntu", sans-serif;
}
</style>
