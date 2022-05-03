<template>
  <!-- figure out why block size button is not working -->
  <div>
    <b-button :size="size" class="btn" :variant="variant">
      <slot></slot>
    </b-button>
  </div>
</template>

<script>
export default {
  props: ['size', 'variant']
};
</script>

<style scoped>
.btn {
  margin: 0.5rem 0;
}
.btn:hover {
  color: white;
}
</style>
