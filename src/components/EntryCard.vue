<!-- working -->
<template>
  <div class="main-container">
    <router-link :to="{ name: 'show-entry', params: { id: entry.id } }">
      <div class="entry-card">
        <h3>{{ entry.attributes.Title }}</h3>
        <p>{{ entry.attributes.Body }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["entry"],
  methods: {
    editPost() {
      this.$router.push({
        name: "edit-post",
        params: { id: this.entry.id }
      });
    }
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  border: 1px solid #0275d8;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 2px;
  margin: 1rem;
}
.entry-card {
  margin: 2rem 0 0 0;
  padding: 1rem 0 0 1rem;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
