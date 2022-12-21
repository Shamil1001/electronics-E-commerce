<template>
  <div class="admin-panel">
    <LeftNavbar @chooseLeftMenu="(m) => onClick(m)" />
    <TopNavbar :leftMenu="menu" />
  </div>
</template>

<!-- <fa :icon="['fas', 'user-secret']" size="2x" /> -->
<!-- <fa :icon="['far', 'heart']" size="2x" /> -->
<!-- <fa :icon="['far', 'phone']" /> -->
<!-- <i class="user"></i> -->
<!-- <font-awesome-icon icon="store" size="2x"> </font-awesome-icon> -->
<script>
import LeftNavbar from "./leftNavbar.vue";
import TopNavbar from "./topNavbar.vue";
export default {
  name: "Admin",
  components: {
    LeftNavbar,
    TopNavbar,
  },
  // emits: ["m"],
  methods: {
    onClick(item) {
      this.menu = item;
      console.log(this.menu);
    },
  },
  data() {
    return {
      menu: "orders",
    };
  },
};
</script>

<style>
.admin-panel {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}
</style>
