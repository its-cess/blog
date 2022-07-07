<!--EventShow.vue-->
<template>
  <div>
    <div class="entry-container">
      <h2>{{ entry.attributes.Title }}</h2>
      <p>{{ entry.attributes.Body }}</p>
    </div>
    <div class="delete-container">
      <BaseButton
        v-if="loggedIn"
        size="sm"
        variant="outline-primary"
        @click.native="startEditPost"
        >Edit
      </BaseButton>
      <BaseButton
        v-if="loggedIn"
        size="sm"
        variant="outline-primary"
        class="button"
        @click.native="deletePost"
        >Delete
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import apiClient from "@/services/index.js";

export default {
  components: { BaseButton },
  data() {
    return {
      entry: {},
      loggedIn: false
    };
  },
  created() {
    apiClient.get("entries/" + this.$route.params.id).then((response) => {
      this.entry = response.data.data;
      let token = localStorage.getItem("token");
      if (token) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  methods: {
    deletePost() {
      apiClient
        .delete("entries/" + this.entry.id)
        .then(() => {
          this.$router.push({
            name: "profile"
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    startEditPost() {
      this.$router.push({
        name: "edit-post",
        params: { id: this.entry.id }
      });
    }
  }
};
</script>

<style scoped>
h2 {
  margin-bottom: 25px;
}
.entry-container {
  margin: 1.78rem 0;
  padding: 0 2.5rem;
  white-space: pre-wrap;
}
.delete-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
}

.button {
  margin-left: 0.5rem;
}
</style>
