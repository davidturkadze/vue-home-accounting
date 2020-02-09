<template>
  <!-- if navbar clicked open/close the sidebar (css class open) -->
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <!-- without EXACT home page will be also visible every time  -->
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'

export default {
  
  // navbar click state (isOpen)
  props: ["isOpen"],
  data() {
    return {
      links: [
        { title: localizeFilter('Menu_Bill'), url: "/", exact: true },
        { title: localizeFilter('Menu_History'), url: "/history" },
        { title: localizeFilter('Menu_Planning'), url: "planning" },
        { title: localizeFilter('Menu_NewRecord'), url: "/record" },
        { title: localizeFilter('Menu_Categories'), url: "categories" }
      ]
    };
  }
};
</script>

<style>
</style>