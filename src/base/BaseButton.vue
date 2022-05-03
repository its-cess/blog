<template>
  <!-- figure out why block size button is not working -->
  <div>
    <b-button size="lg" class="btn" variant="primary">
      <slot></slot>
    </b-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  margin: 0.5rem 0;
}
.btn:hover {
  color: white;
}
</style>
