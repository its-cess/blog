<template>
  <div class="profile-column">
    <!-- <img src="" /> -->
    <div class="profile-info">
      <h5>Name:</h5>
      <span>Cecily Toro</span>
    </div>
    <div class="profile-info">
      <h5>Location:</h5>
      <span>United States</span>
    </div>
    <!-- dropbown box. countrypicker dependency. vue-country-region-select -->
    <div class="profile-info">
      <h5>Birthday:</h5>
      <p>July 23</p>
    </div>
    <!-- <p>
      Interests: (separate component, for-loop to output ordered list of
      interests, dropdown picker??)
    </p> -->
    <div class="profile-info">
      <!-- member since: date when signed up. sign in functionality, store that data? -->
      <h5>Member Since:</h5>
      <p>March 2022</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-column {
  padding: 20px 0;
}
h5 {
  margin-bottom: 0;
}
.profile-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
