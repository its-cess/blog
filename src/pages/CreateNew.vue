<template>
  <div class="form-container">
    <form @submit.prevent="createEntry">
      <h4>New Post</h4>
      <div class="input">
        <b-form-input placeholder="Title" v-model="entry.title" />
      </div>
      <div>
        <b-form-textarea
          placeholder="Blog away!"
          v-model="entry.body"
          rows="8"
          no-resize
        ></b-form-textarea>
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entry: this.createNewEntry()
    };
  },
  methods: {
    createEntry() {
      this.$store.dispatch("entries/createEntry", this.entry)
    },
    createEntryObject() {
      const id = Math.foor(Math.random() * 10000000)
      return {
        id: id,
        title: '',
        body: ''
      }
    },
    // createId() {
    //   const id = this.$store.state.entries.id++;
    //   return {
    //     id: id,
    //   }
    // }
    // createNewEntryObject() {
    //   const id = this.$store.state.entries.id++;
    //   return {
    //     id: id,
    //     title: "",
    //     body: "",
    //   };
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
