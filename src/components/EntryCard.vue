<!-- working -->
<template>
  <div>
    <router-link :to="{ name: 'show-entry', params: { id: entry.id } }">
      <div class="entry-card">
        <h3>{{ entry.attributes.Title }}</h3>
        <p>{{ entry.attributes.Body }}</p>
      </div>
    </router-link>
    <BaseButton @click.native="deletePost">Delete</BaseButton>
  </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
export default {
  components: { BaseButton },
  props: ["entry"],
  methods: {
    deletePost() {
      this.$store.dispatch("entries/deleteEntry", this.entry.id);
      //then push to /profile path if delete successful
    }
  }
};
</script>

<style scoped>
.entry-card {
  margin: 2rem 0;
  padding: 1rem;
  border-right: 3px solid #0275d8;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
