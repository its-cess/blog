<template>
  <div class="form-container">
    <form>
      <h4>New Post</h4>
      <div class="input">
        <label for="title">TITLE</label>
        <b-form-input id="title" v-model="entry.Title" />
      </div>
      <div>
        <label for="body">BODY</label>
        <b-form-textarea
          id="body"
          v-model="entry.Body"
          rows="8"
          no-resize
        ></b-form-textarea>
      </div>

      <BaseButton
        @click.prevent.native="createNewEntry"
        size="lg"
        variant="primary"
        >Submit</BaseButton
      >
    </form>
  </div>
</template>

<script>
import apiClient from "@/services/index.js";
import BaseButton from "../base/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      entry: {
        id: this.createId(),
        Title: "",
        Body: ""
      }
    };
  },
  methods: {
    createNewEntry() {
      apiClient.post("entries", { data: this.entry }).then(() => {
        this.$router
          .push({
            name: "show-entry",
            params: { id: this.entry.id }
          })
          .catch((error) => {
            console.log(error);
          });
        (this.entry.Title = ""), (this.entry.Body = "");
      });
    },
    createId() {
      const id = Math.floor(Math.random() * 10000000);
      return id;
    }
  }
};
</script>

<style scoped>
.form-container {
  margin: 0 0.6rem;
}
label {
  margin-bottom: 0;
  font-size: 12px;
}
input {
  font-size: 1.2rem;
}
.input {
  margin: 0.5rem 0;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
}
</style>
