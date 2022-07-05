<template>
  <div class="form-container">
    <h4>Edit Post</h4>

    <BaseButton
      @click.prevent.native="createNewEntry"
      size="lg"
      variant="primary"
      >Submit</BaseButton
    >
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["entry"],
  created() {
    //not getting the ID
    this.$store.dispatch("entries/getEntry", this.id);
  }
};
</script>

<style scoped>
input {
  font-size: 1.2rem;
}
.input {
  margin: 0.5rem 0;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
}
</style>
