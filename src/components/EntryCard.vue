<!-- working -->
<template>
  <div class="main-container">
    <router-link :to="{ name: 'show-entry', params: { id: entry.id } }">
      <div class="entry-card">
        <h3>{{ entry.attributes.Title }}</h3>
        <p>{{ entry.attributes.Body }}</p>
      </div>
    </router-link>
    <div class="delete-container">
      <BaseButton size="sm" variant="outline-primary" @click.native="deletePost"
        >Delete
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["entry"],
  methods: {
    deletePost() {
      this.$store
        .dispatch("entries/deleteEntry", this.entry.id)
        .then(() => {
          this.$store.dispatch("entries/fetchEntries");
        })
        .catch((error) => {
          console.log(error);
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
.delete-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
}
</style>
