<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>
      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading" />
    <div v-else class="row">
      <div class="col s12 m6 l4">
        <BillCard :currency="currency" :bill="bill" />
      </div>

      <div class="col s12 m6 l8">
        <CurrencyCard />
      </div>
    </div>
  </div>
</template>

<script>
import BillCard from "@/components/BillCard";
import CurrencyCard from "@/components/CurrencyCard";

export default {
  name: "Home",
  components: { BillCard, CurrencyCard },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    currency() {
      return this.$store.getters.currency;
    },
    bill() {
      return this.$store.getters.info?.bill;
    },
  },
  watch: {
    currency() {
      this.loading = false;
    },
  },
  mounted() {
    this.$store.dispatch("fetchCurrency");
  },
};
</script>
