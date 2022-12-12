<template>
  <div class="footer">
    <div class="footer-left">
      <h1>YediTilsim.com</h1>
      <i class="fa fa-home"></i>
      <font-awesome-icon :icon="['fa-solid fa-user-secret']" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  width: 100%;
  height: 150px;
  bottom: 0;
  color: white;
  background-color: #172a4c;
}
</style>
