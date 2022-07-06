<template>
  <div class="form-container">
    <h4>Edit Post</h4>
    <div class="input">
      <b-form-input v-model="entryToEdit.Title" :placeholder="entry.Title" />
    </div>
    <div>
      <b-form-textarea
        :placeholder="entry.Body"
        v-model="entryToEdit.Body"
        rows="8"
        no-resize
      ></b-form-textarea>
    </div>

    <BaseButton @click.prevent.native="editEntry" size="lg" variant="primary"
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
      },
      entryToEdit: {
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
    editEntry() {
      apiClient
        .put("entries/" + this.entry.id, { data: this.entryToEdit })
        .then(() => {
          this.$router
            .push({
              name: "profile"
            })
            .catch((error) => {
              console.log(error);
            });
        });
    }
  }
};
</script>

<style scoped>
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
