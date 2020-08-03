<template>
  <div>
    <div class="app-main-layout">
      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view />
        </div>
      </main>
      <navbar @toggle="toggleOpen"></navbar>
      <sidebar :isOpen="isOpen"></sidebar>
      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to='/record'>
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "MainLayout",
  data: () => {
    return {
      isOpen: false,
    };
  },
  components: { sidebar: Sidebar, navbar: Navbar },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    toggleOpen () {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
