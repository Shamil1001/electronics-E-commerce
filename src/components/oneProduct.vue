<template>
  <div class="specific">
    <h2>Product</h2>
    <!-- <h1 v-if="(user.id = '1')">Shamil</h1> -->
  </div>
</template>

<script>
export default {
  name: "OneProduct",
  // props: {
  //   id: {
  //     type: Number,
  //     required: true,
  //   },
  // },
  user: {},
  mounted() {
    this.user = { ...this.$route.params };
    console.log(this.$route.params);
    if (this.$route.params.id === "1") {
      console.log("ady");
    }
  },
};
</script>
