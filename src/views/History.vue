<template>
  <div>
    <div class="page-title">
      <h3>История записей</h3>
    </div>

    <div class="history-chart">
      <canvas ref="canvas"></canvas>
    </div>

    <Loader v-if="loading"></Loader>

    <p class="center" v-else-if="!records.length">
      No records yet
      <router-link to="/record">Add the first one.</router-link>
    </p>

    <section v-else>
      <HistoryTable :records="items"></HistoryTable>

      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'waves-effect'"
      >></Paginate>
    </section>
  </div>
</template>
  
<script>
import HistoryTable from "@/components/HistoryTable";
import paginationMixin from '@/mixins/pagination.mixin'
import {Pie} from 'vue-chartjs'

export default {
  name: "history",
  extends: Pie,
    //VueMeta component for page titles
  metaInfo() {
    return {
      title: this.$title('Menu_History')
    }
  },
  mixins: [paginationMixin],
  data() {
    return {
      loading: true,
      records: []
    };
  },
  async mounted() {
    this.records = await this.$store.dispatch("fetchRecords");
    const categories = await this.$store.dispatch("fetchCategories");

    this.setup(categories)

    this.loading = false;
  },
  methods: {
    setup(categories) {
      //expand record array with name, class and text
    this.setupPagination(this.records.map(record => {
      return {
        ...record, //spread operator to become records from records array and then append name, class and text
        categoryName: categories.find(c => c.id === record.categoryId)
          .title,
        typeClass: record.type === "income" ? "green" : "red",
        typeText: record.type === "income" ? "Income" : "Outcome"
      };
    }));

this.renderChart({
        labels: categories.map(c => c.title),
        datasets: [{
            label: 'expenses by category',
            data: categories.map(c => {
              return this.records.reduce((total, r) => {
                if(r.categoryId === c.id && r.type === 'outcome' ) {
                  total += +r.amount
                }
                return total
              }, 0)
            }),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    })

    }
  },
  components: {
    HistoryTable
  }
};
</script>

<style>
</style>