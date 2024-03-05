<!-- src/components/DataDisplay.vue -->
<template>
  <div>
    <h2 class="data-header">Stored Data</h2>
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in allFormData" :key="index">
          <td>{{ data.name }}</td>
          <td>{{ data.phone }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    allFormData() {
      return this.$store.getters.getAllFormData
    }
  }
}
</script>

<style scoped>
.data-header {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.data-table th {
  background-color: #f2f2f2;
}
</style>

