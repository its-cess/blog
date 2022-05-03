<template>
  <div class="form-container">
    <form>
      <h4>New Post</h4>
      <div class="input">
        <b-form-input placeholder="Title" v-model="entry.Title" />
      </div>
      <div>
        <b-form-textarea
          placeholder="Blog away!"
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
      this.$store.dispatch("entries/createEntry", { data: this.entry });
      (this.entry.Title = ""), (this.entry.Body = "");
    },
    createId() {
      const id = Math.floor(Math.random() * 10000000);
      return id;
    }
    //this hardcoded test was SUCCESSFUL, need to refactor to be able to
    //put this into an action that runs the mutation to set it to state
    //and link to these inputs in data() above.

    // createNewEntry() {
    //   axios.post('http://localhost:1337/api/entries', {
    //     data: {
    //       id: 1230948,
    //       Title: 'API Test',
    //       Body: 'Test using hard coded API request'
    //     }
    //   })
    // }
  }
};
</script>

<style scoped>
.form-container {
  margin: 0 0.8rem;
  padding: 0 2.5rem;
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
