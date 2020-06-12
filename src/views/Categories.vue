<template>
  <div>
    <div class="page-title">
      <h3>{{'Menu_Categories' | localize}}</h3>
    </div>
    <section>
      <Loader v-if="loading"></Loader>
      <div v-else class="row">
        <CategoryCreate @created="addNewCategory"></CategoryCreate>

        <CategoryEdit
          v-if="categories.length"
          :key="categories.length + updateCount"
          :categories="categories"
          @updated="updateCategories"
        ></CategoryEdit>
        <p v-else class="center">{{'No_Cat_Yet' | localize}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from "@/components/CategoryCreate";
import CategoryEdit from "@/components/CategoryEdit";
export default {
  name: "Categories",
  //VueMeta component for page titles
  metaInfo() {
    return {
      title: this.$title("Menu_Categories")
    };
  },
  data() {
    return {
      categories: [],
      loading: true,
      updateCount: 0
    };
  },
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;
  },
  components: {
    CategoryCreate,
    CategoryEdit
  },
  methods: {
    addNewCategory(category) {
      this.categories.push(category);
    },
    updateCategories(category) {
      const idx = this.categories.findIndex(c => (c.id = category.id));
      this.categories[idx].title = category.title;
      this.categories[idx].limit = category.limit;
      this.updateCount++;
    }
  }
};
</script>

<style>
</style>