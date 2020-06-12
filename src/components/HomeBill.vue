<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">{{'Bill_In' | localize}} {{this.currencies.join(", ")}}</span>

        <p
         v-for="cur of currencies"
         :key="cur"
         class="currency-line">
          <span>{{getCurrency(cur) | currency(cur)}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates'],
  data() {
    return {
      currencies: ['EUR', 'USD', 'GBP']
    }
  },
  computed: {
    base() {
      //return main currency EUR in the HomeBill component
      return this.$store.getters.info.bill
    }
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency])
    }
  }
};
</script>

<style>
</style>