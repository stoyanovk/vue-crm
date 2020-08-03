<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "./assets/index.css";
</style>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "home",
  computed: {
    layout () {
      return this.$route.meta.layout || 'main-layout';
    }
  },
  components: {
    AuthLayout,
    MainLayout
  }
};
</script>
