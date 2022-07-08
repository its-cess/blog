<template>
  <div class="form-container">
    <h4>Edit Post</h4>
    <div class="input">
      <label for="title">TITLE</label>
      <input
        type="text"
        id="title"
        :value="this.entry.Title"
        @input="editTitle"
      />
    </div>
    <div>
      <label for="body">BODY</label>
      <textarea
        id="body"
        :value="this.entry.Body"
        @input="editBody"
        rows="8"
        no-resize
      ></textarea>
    </div>

    <BaseButton @click.prevent.native="submitEntry" size="lg" variant="primary"
      >Update</BaseButton
    >
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import apiClient from "@/services/index.js";

export default {
  components: { BaseButton },
  data() {
    return {
      entry: {
        id: null,
        Title: "",
        Body: ""
      }
    };
  },
  created() {
    apiClient
      .get("entries/" + this.$route.params.id)
      .then((response) => {
        (this.entry.id = response.data.data.id),
          (this.entry.Title = response.data.data.attributes.Title),
          (this.entry.Body = response.data.data.attributes.Body);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    editTitle(event) {
      this.entry.Title = event.target.value;
    },
    editBody(event) {
      this.entry.Body = event.target.value;
    },
    submitEntry() {
      apiClient
        .put("entries/" + this.entry.id, { data: this.entry })
        .then(() => {
          this.toastUpdate();
          this.$router
            .push({
              name: "profile"
            })
            .catch((error) => {
              console.log(error);
            });
        });
    },
    toastUpdate() {
      this.$root.$bvToast.toast("Post updated!", {
        toaster: "b-toaster-bottom-center",
        autoHideDelay: 3000,
        noCloseButton: true,
        variant: "success"
      });
    }
  }
};
</script>

<style scoped>
.form-container {
  margin: 0 0.5rem;
}
label {
  margin-bottom: 0;
  font-size: 12px;
}
input {
  font-size: 1.2rem;
  padding: 6px;
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 3px;
}
.input {
  margin: 0.75rem 0;
}
textarea {
  resize: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 3px;
}
.btn-container {
  display: flex;
  justify-content: flex-end;
}
</style>
