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
export default {
  // navbar click state (isOpen)
  props: ["isOpen"],
  data() {
    return {
      links: [
        { title: "Счет", url: "/", exact: true },
        { title: "История", url: "/history" },
        { title: "Планирование", url: "planning" },
        { title: "Новая запись", url: "/record" },
        { title: "Категории", url: "categories" }
      ]
    };
  }
};
</script>

<style>
</style>