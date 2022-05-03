<template>
  <div class="form-container">
    <form @submit.prevent="createNewEntry">
      <h4>New Post</h4>
      <div class="input">
        <b-form-input
          placeholder="Title"
          v-model="entry.attributes.Title"
        />
      </div>
      <div>
        <b-form-textarea
          placeholder="Blog away!"
          v-model="entry.attributes.Body"
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
      entry: {
        id: this.createId(),
        attributes: {
          Title: "",
          Body: ""
        }
      }
    };
  },
  methods: {
    createNewEntry() {
      this.$store.dispatch("entries/createEntry", { data: this.entry });
    },
    createId() {
      const id = Math.floor(Math.random() * 10000000);
      return id;
    }
    // createEntryObject() {
    //   const id = Math.floor(Math.random() * 10000000)
    //   return {
    //     data: {
    //       "id": id,
    //       "attributes": {
    //         Title: '',
    //         Body: ''
    //       }
    //     }

    //   }
    // },
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
button {
  color: white;
  background-color: #0275d8;
  border-style: none;
  border-radius: 3px;
  height: 2.65rem;
  width: 6rem;
  margin-top: 15px;
}
</style>
