<template>
  <div class="nav-bar">
    <b-nav pills>
      <b-nav-item :to="{ name: 'profile' }" active-class="active" exact
        >Profile</b-nav-item
      >
      <b-nav-item
        :to="{ name: 'create-new' }"
        active-class="active"
        exact
        :disabled="!loggedIn"
      >
        Create New Post</b-nav-item
      >
    </b-nav>

    <!-- LOGIN nav button (open modal) -->
    <div class="login">
      <b-button
        v-if="!loggedIn && profileRoute"
        v-b-modal.loginModal
        variant="outline-secondary"
      >
        LOGIN
      </b-button>

      <b-button
        v-else-if="loggedIn && profileRoute"
        variant="outline-secondary"
        @click="handleLogout"
      >
        LOGOUT
      </b-button>

      <b-button v-else style="display: none"></b-button>
    </div>

    <!-- LOGIN modal -->
    <b-modal id="loginModal" centered title="LOGIN" hide-footer>
      <b-form @submit.prevent="handleLogin">
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

          <b-button type="submit" variant="primary" class="login-btn">
            LOGIN
          </b-button>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import apiClient from "@/services/index.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      loggedIn: false
    };
  },
  computed: {
    profileRoute() {
      if (this.$route.name === "profile") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    async handleLogin() {
      await apiClient
        .post("auth/local", {
          identifier: this.email,
          password: this.password
        })
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("token", response.data.jwt);
            this.$root.$emit("bv::hide::modal", "loginModal");
            this.loggedIn = true;
          } else {
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      (this.email = ""), (this.password = "");
    },
    handleLogout() {
      localStorage.removeItem("token");
      this.loggedIn = false;
    }
  }
};
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
