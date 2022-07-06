<template>
  <div class="blog-container">
    <h1>Blog Posts</h1>

    <div class="scroll">
      <EntryCard v-for="entry in entries" :key="entry.id" :entry="entry" />
    </div>
  </div>
</template>

<script>
import EntryCard from "../components/EntryCard.vue";
import apiClient from "@/services/index.js";

export default {
  components: {
    EntryCard
  },
  data() {
    return {
      entries: []
    };
  },
  created() {
    apiClient
      .get("entries")
      .then((response) => {
        this.entries = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
h1 {
  margin-left: 15px;
}
.blog-container {
  margin-top: -60px;
  padding: 0 6rem 0 3rem;
}
.scroll {
  overflow-y: scroll;
  max-height: 30rem;
  width: 45rem;
}
</style>
