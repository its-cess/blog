<template>
  <div class="nav-bar">
    <b-nav pills>
      <b-nav-item :to="{ name: 'profile' }" active-class="active" exact
        >Profile</b-nav-item
      >
      <b-nav-item :to="{ name: 'create-new' }" active-class="active" exact>
        Create New Post</b-nav-item
      >
    </b-nav>

    <!-- LOGIN nav button (open modal) -->
    <div class="login">
      <b-button v-b-modal.modal-1 variant="outline-secondary">LOGIN</b-button>
    </div>

    <!-- LOGIN modal -->
    <b-modal id="modal-1" centered title="LOGIN" hide-footer>
      <b-form @submit.prevent="onSubmit">
        <b-form-group class="group">
          <label for="email">EMAIL</label>
          <b-form-input
            id="email"
            type="email"
            v-model="email"
            required
          ></b-form-input>

          <label for="password">PASSWORD</label>
          <b-form-input
            id="password"
            type="password"
            v-model="password"
            required
          ></b-form-input>

          <b-button type="submit" variant="primary" class="login-btn"
            >LOGIN</b-button
          >
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  max-width: 1600px;
  margin: 0.25rem auto;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
}

.group {
  padding: 2rem;
}

label {
  margin-bottom: 0;
  font-size: 12px;
}

.login-btn {
  margin-top: 1rem;
}
</style>
