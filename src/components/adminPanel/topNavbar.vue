<template>
  <div class="topNav-center">
    <div class="top-nav">
      <div class="top-nav-items">
        <input class="admin-searchbox" type="text" placeholder="Search..." />
      </div>
    </div>
    <div v-if="leftMenu == 'orders' && customer == ''" class="mainPart">
      <Order />
    </div>
    <div v-if="leftMenu == 'customers' && customer == ''" class="mainPart">
      <Customer @addNewCustom="(customer) => handleCustom(customer)" />
    </div>
    <div v-if="leftMenu == 'catalog' && product == ''" class="mainPart">
      <Catalog @addNewProduct="(product) => handleProducts(product)" />
    </div>
    <div v-if="customer" class="mainPart">
      <router-view name="a" />
      <!-- <NewCustomer /> -->
    </div>
    <div v-if="product" class="mainPart">
      <!-- <router-view name="a" /> -->
      <!-- <NewCustomer /> -->
      <router-view name="b" />
    </div>
  </div>
</template>

<script>
import Order from "./order.vue";
import Customer from "./customers.vue";
import Catalog from "./catalog.vue";
// import NewCustomer from "@/components/adminPanel/newCustomer.vue";
export default {
  name: "TopNavbar",
  components: {
    Order,
    Customer,
    Catalog,
    // NewCustomer,
  },
  props: ["leftMenu"],
  data() {
    return {
      customer: "",
      product: "",
    };
  },
  methods: {
    handleCustom(item) {
      console.log(item);
      this.customer = item;
    },
    handleProducts(item) {
      console.log(item);
      this.product = item;
    },
  },
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
