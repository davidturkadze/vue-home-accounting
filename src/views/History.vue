<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <Loader v-if="loading"></Loader>

    <p class="center" v-else-if="!records.length">No records yet
      <router-link to="/record">Add the first one.</router-link>
    </p>

    <section v-else>
      <HistoryTable :records="records"></HistoryTable>
    </section>
  </div>
</template>
  
<script>
import HistoryTable from "@/components/HistoryTable";

export default {
  name: "history",
  data() {
    return {
      loading: true,
      records: [],
      categories: []
    };
  },
  async mounted() {
    //this.records = await this.$store.dispatch("fetchRecords");
    const records = await this.$store.dispatch("fetchRecords");
    this.categories = await this.$store.dispatch("fetchCategories");

    //expand record array with name, class and text
    this.records = records.map(record => {
      return {
        ...record, //spread operator to become records from records array and then append name, class and text
        categoryName: this.categories.find(c => c.id === record.categoryId)
          .title,
        typeClass: record.type === "income" ? "green" : "red",
        typeText: record.type === "income" ? "Income" : "Outcome"
      };
    });

    this.loading = false;
  },
  components: {
    HistoryTable
  }
};
</script>

<style>
</style>