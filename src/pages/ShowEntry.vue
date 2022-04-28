<!--EventShow.vue
fetching/displaying info from API correcrly. 
now need to make the id in API call dynamic and changes depending on which entry is clicked
 -->
<template>
 <div class="entry-container">
   <h2>{{ entries.entry.Title }}</h2>
   <p>{{ entries.entry.Body }}</p>
 </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch("entries/fetchEntry")
  },
  computed: {
    ...mapState(['entries'])
    //mapGetters?? entries.js >getters >getEntry to be able to display Title without having to 
    //add entries.entry before????
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 25px;
}
.entry-container {
  margin: 0;
  padding: 0 3.2rem;
}
</style>