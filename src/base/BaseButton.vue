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
  props: ["size", "variant"]
};
</script>

<style scoped>
.btn {
  margin: 0.5rem 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
}
.btn:hover {
  color: white;
}
</style>
