<!--EventList.vue
working -->
<template>
  <div class="blog-container">
    <h1>{{ authentication.user.username }}'s Blog Posts</h1>

    <div class="scroll">
      <EntryCard
        v-for="entry in latestEntries"
        :key="entry.id"
        :entry="entry"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import EntryCard from "../components/EntryCard.vue";

export default {
  components: {
    EntryCard
  },
  created() {
    this.$store.dispatch("entries/fetchEntries");
  },
  computed: {
    ...mapState(["entries", "authentication"]),
    ...mapGetters("entries", ["latestEntries"])
  }
};
</script>

<style scoped>
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
