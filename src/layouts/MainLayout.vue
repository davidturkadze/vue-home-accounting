<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else class="app-main-layout">
      <Navbar @clickMenu="isOpen = !isOpen" />

      <Sidebar :isOpen="isOpen" />

      <!-- bind value to class to spread content on click -->
      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <!-- here render pages -->
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record" v-tooltip="'add new record'">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Sidebar from "@/components/app/Sidebar";
import messages from "@/utils/messages";
export default {
  name: "main-layout",
  components: {
    Navbar,
    Sidebar
  },
  data() {
    return {
      isOpen: true,
      loading: true
    };
  },
  //all asynchrone calls must be done in mounted (DOM is ready)
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch("fetchInfo");
    }

    this.loading = false;
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      /* eslint-disable */
      console.log(fbError);
      this.$error(messages[fbError.code] || 'something went wrong')
    }
  }
};
</script>

<style>
</style>