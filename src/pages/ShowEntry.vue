<!--EventShow.vue-->
<template>
 <div class="entry-container">
   <h2>{{ entry.attributes.Title }}</h2>
   <p>{{ entry.attributes.Body }}</p>
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