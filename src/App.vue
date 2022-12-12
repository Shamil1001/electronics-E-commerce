<template>
  <div class="App">
    <Header />
    <!-- <font-awesome-icon :icon="['fas', 'phone']" /> -->
    <!-- <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Check Bootstrap
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div> -->
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Main from "./components/main.vue";
import Footer from "./components/footer.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.App {
  display: flex;
  flex-direction: column;
}
</style>

<!-- <nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</nav>
<router-view /> -->
