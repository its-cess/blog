<template>
  <b-container class="profile-container" fluid>
    <h1>Profile</h1>
    <b-row>
      <b-col cols="3"><UserInfo /></b-col>
      <b-col cols="9">
          <BlogEntries />  
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import UserInfo from "../components/UserInfo.vue";
import BlogEntries from "../components/BlogEntries.vue";

export default {
  components: {
    UserInfo,
    BlogEntries,
  }
};
</script>

