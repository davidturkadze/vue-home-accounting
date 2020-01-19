<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <Loader v-if="loading"></Loader>
      <div v-else class="row">
        <CategoryCreate @created="addNewCategory"></CategoryCreate>

        <CategoryEdit></CategoryEdit>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from "@/components/CategoryCreate"
import CategoryEdit from "@/components/CategoryEdit"
export default {
  name: "Categories",
  data() {
    return {
      categories: [],
      loading: true
    };
  },
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories")
    this.loading = false
  },
  components: {
    CategoryCreate,
    CategoryEdit
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category)
    }
  }
};
</script>

<style>
</style>