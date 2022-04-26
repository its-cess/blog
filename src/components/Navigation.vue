<template>
  <div class="nav-bar">
    <b-nav pills>
      <b-nav-item :to="{ name: 'profile' }" active-class="active" exact>Profile</b-nav-item>
      <b-nav-item :to="{ name: 'create-new' }" active-class="active" exact>
        Create New Post</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  margin: 1rem;
  padding: 1.5rem;
}
</style>
