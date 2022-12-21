<template>
  <div class="topNav-center">
    <div class="top-nav">
      <div class="top-nav-items">
        <input class="admin-searchbox" type="text" placeholder="Search..." />
      </div>
    </div>
    <div v-if="leftMenu == 'orders'" class="mainPart">
      <Order />
    </div>
    <div v-if="leftMenu == 'customers'" class="mainPart">
      <Customer />
    </div>
    <div v-if="leftMenu == 'catalog'" class="mainPart">
      <Catalog />
    </div>
  </div>
</template>

<script>
import Order from "./order.vue";
import Customer from "./customers.vue";
import Catalog from "./catalog.vue";
export default {
  name: "TopNavbar",
  components: {
    Order,
    Customer,
    Catalog,
  },
  props: ["leftMenu"],
};
</script>

<style>
.topNav-center {
  width: 100%;
  height: 100%;
}
.top-nav {
  height: 80px;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  background-color: hsl(0, 8%, 95%);
  display: flex;
  align-items: center;
}
.top-nav-items {
  margin: 0 20px;
}
</style>
