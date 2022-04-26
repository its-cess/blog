<!-- working -->
<template>
  <router-link :to="{ name: 'show-entry', params: { id: entry.id } }">
    <div class="entry-card">
      <h3>{{ entry.attributes.Title }}</h3>
      <p>{{ entry.attributes.Body }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
props: ['entry'],
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
