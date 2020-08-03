<template>
  <ul class="sidenav app-sidenav" :class="{open:isOpen}">
    <router-link
      :key="menuItem.link"
      v-for="menuItem in menu"
      tag="li"
      :to="menuItem.link"
      active-class="active"
      :exact="menuItem.exact"
    >
      <a class="waves-effect waves-orange pointer">{{menuItem.title}}</a>
    </router-link>
  </ul>
</template>

<script>
const menuData = [
  {
    link: "/",
    title: "Счет",
    exact: true,
  },
  {
    link: "/history",
    title: "История",
  },
  {
    link: "/planning",
    title: "Планирование",
  },
  {
    link: "/record",
    title: "Новая запись",
  },
  {
    link: "/category",
    title: "Категории",
  },
];
export default {
  name: "Sidebar",
  props: {
    isOpen: {
      type: Boolean,
    },
  },
  data: () => {
    return { menu: menuData };
  },
};
</script>
