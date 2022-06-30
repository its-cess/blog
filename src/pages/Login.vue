<template>
  <div class="login-container">
    <b-form @submit.prevent="onSubmit">
      <b-form-group class="group">
        <h2>LOGIN</h2>
        <label for="email">EMAIL</label>
        <b-form-input
          id="email"
          type="email"
          v-model="form.email"
          required
        ></b-form-input>

        <label for="password">PASSWORD</label>
        <b-form-input
          id="password"
          type="password"
          v-model="form.password"
          required
        ></b-form-input>

        <b-button type="submit" variant="primary">LOGIN</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      alert("submitted!");
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
}

h2 {
  margin-bottom: 2rem;
}

label {
  margin-bottom: 0;
  font-size: 12px;
}

input {
  width: 400px;
  margin-bottom: 12px;
}

button {
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
