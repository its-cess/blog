<template>
<!-- figure out why block size button is not working -->
  <b-button size="lg" class="btn" variant="outline-info">
    <slot></slot>
  </b-button>
</template>

<script>
export default {}
</script>

<style scoped>
.btn {
  margin: .5rem 0;
}
.btn:hover {
  color: white;
}
</style>