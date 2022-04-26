<template>
  <div>
    <img src="" />
    <p>Name: {{ user.name }}</p>
    <p>Location: {{ user.location }}</p>
    <!-- dropbown box. countrypicker dependency. vue-country-region-select -->
    <p>Birthday: {{ user.birthday }}</p>
    <p>Gender: {{ user.gender }}</p>
    <p>
      Interests: (separate component, for-loop to output ordered list of
      interests, dropdown picker??)
    </p>
    <!-- member since: date when signed up. sign in functionality, store that data? -->
    <p>Member Since: {{ user.memberSince }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"])
  }
};
</script>
