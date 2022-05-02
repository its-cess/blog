<!--EventShow.vue
fetching/displaying info from API correcrly. 
now need to make the id in API call dynamic and changes depending on which entry is clicked
 -->
<template>
 <div class="entry-container">
   <!-- <h2>{{ entry }}</h2> -->
   <h2>{{ entry.attributes.Title }}</h2>
   <p>{{ entry.attributes.Body }}</p>
   <!-- <h2>{{ entries.entry.Title }}</h2> -->
   <!-- <h2>{{ entries.entry.attributes.Title }}</h2> -->
   <!-- <p>{{ entries.entry.Body }}</p> -->
   <!-- <p>{{ entries.entry.attributes.Body }}</p> -->
 </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  data(){
    return {
      entry: {}
    }
  },
  created() {
    axios.get('http://localhost:1337/api/entries/' + this.$route.params.id)
    .then(response => {
      this.entry = response.data.data
    })
  },
  // created() {
  //   this.$store.dispatch("entries/fetchEntry")
  // },
  computed: {
    ...mapState(['entries']),  
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