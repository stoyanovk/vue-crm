<template>
  <div class="card light-blue bill-card">
    <div class="card-content white-text">
      <span class="card-title">Счет в валюте</span>

      <p :key="cur" v-for="cur in currency" class="currency-line">
        <span>{{bill/cur}}</span>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "BillCard",
  props: ["currency", "bill"],

  filters: {
    getNormalCurrency(currency) {
      return new Intl.NumberFormat("ru-RU").format(currency);
    },
  },
  mounted() {
    console.log(this.currency);
  },
};
</script>
