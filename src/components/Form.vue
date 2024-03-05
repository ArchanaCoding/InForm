
<template>
  <form @submit.prevent="submitForm">
    <label for="name">Name:</label>
    <input v-model="name" required>
    <br><br>
    <label for="phone">Phone:</label>
    <input v-model="phone" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" v-model="email" required>
    <br><br>
    <label for="address">Address:</label>
    <input v-model="address" required>
    <br><br>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
name: 'MyForm', // Change the component name to a multi-word name
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      address: ''
    }
  },
  methods: {
    submitForm() {
      this.$store.dispatch('submitForm', {
        name: this.name,
        phone: this.phone,
        email: this.email,
        address: this.address
      })
      this.$router.push('/display-data') // Redirect to the display data page
    }
  }
}
</script>
