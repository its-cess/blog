<template>
  <div class="nav-bar">
    <b-nav pills>
      <b-nav-item :to="{ name: 'profile' }" active-class="active" exact
        >Profile</b-nav-item
      >
      <b-nav-item :to="{ name: 'create-new' }" active-class="active" exact>
        Create New Post</b-nav-item
      >
    </b-nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  max-width: 1600px;
  margin: 0.25rem auto;
  padding: 1.5rem;
}
</style>
