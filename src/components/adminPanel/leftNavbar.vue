<template>
  <div class="admin">
    <div class="admin-left">
      <span class="admin-profile">
        <!-- <h3>Yedi Tilsim</h3> -->
        <img class="profile-img" src="./1671511373438.png" />
        <div class="admin-detail">
          <p class="admin-name">Shamil Jemhurov</p>
          <p class="admin-job">Admin</p>
        </div>
      </span>
      <div class="admin-choice">
        <span class="dashboard"
          ><fa class="icon" :icon="['fas', 'store']" />
          <p>Dashboard</p></span
        >
        <span @click="() => chooseMenu('orders')" class="orders"
          ><fa class="icon" :icon="['fas', 'basket-shopping']" />
          <p>Orders</p></span
        >
        <span @click="() => chooseMenu('catalog')" class="catalog"
          ><fa class="icon" :icon="['fas', 'folder-open']" />
          <p>Catalog</p></span
        >
        <span @click="() => chooseMenu('customers')" class="customers"
          ><fa class="icon" :icon="['fas', 'user']" />
          <p>Customers</p></span
        >
        <span class="payments"
          ><fa class="icon" :icon="['fas', 'circle-dollar-to-slot']" />
          <p>Payments</p></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftNavbar",
  methods: {
    chooseMenu(m) {
      this.$emit("chooseLeftMenu", m);
    },
  },
};
</script>

<style>
.admin {
  background-color: #efecec;
  width: 20%;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.admin-left {
  margin: 0px;
}
.profile-img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
}

.admin-profile {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.admin-detail p {
  height: 10px;
}
.admin-detail {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.admin-choice {
  margin: 50px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.admin-choice span:hover {
  background-color: gray;
}
.admin-choice span {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: rgb(3, 3, 54);
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 5px;
}
.admin-choice span .icon {
  font-size: 25px;
}
</style>
