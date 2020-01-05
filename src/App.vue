<template>
  <div id="app">
    <!-- layout management (multiple layout system) -->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    //layout management
    //documentation: https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05
    layout() {
      console.log(this.$route.meta)
      //standard procedure tu return a layout
      //the names (empty, main) needs to be equal to components
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
