<template>
  <div class="main">
    <div class="phone-number">
      <p>Is wagty: 9:00-20:00</p>
      <div class="menu">
        <p data-bs-toggle="modal" data-bs-target="#exampleModal">
          Kategoriyalar
        </p>
        <router-link to="/sargyt">
          <p>Sargyt etmek</p>
        </router-link>
        <p>Biz barada</p>
        <p>Kepillik</p>
        <p>Eltip bermek</p>
        <router-link to="/technicalServe">
          <p>Tehniki hyzmat</p>
        </router-link>
      </div>

      <!-- <font-awesome-icons :icon="['fa-solid', 'fa-phone']" /> -->
      <p>
        <font-awesome-icon icon="phone" size="1x"> </font-awesome-icon>
        +99365586747/+99361393852
      </p>
    </div>
    <div class="cat-ads">
      <!-- <Categories /> -->
      <div class="ads">
        <img class="ad-image" src="../images/49635401403_96f9c322dc_o.jpg" />
        <div class="carousel">
          <div class="carousel-inner">
            <div
              class="carousel item"
              v-for="slide in slides"
              v-bind:key="slide"
            >
              <!-- <h3>{{ slide }}</h3> -->
              <!-- <img
                class="ad-image"
                src="../images/49635401403_96f9c322dc_o.jpg"
              /> -->
            </div>
          </div>
        </div>
      </div>

      <Products />
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Kategoriyalar
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p
              v-for="i in kats"
              @click="() => selectCat(i)"
              :class="i.isSelected === false ? '' + i.name : 'active'"
              v-bind:key="i"
            >
              {{ i.name }}
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Ayyr
            </button>
            <button @click="onSelect" type="button" class="btn btn-primary">
              Sayla
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <Footer /> -->
</template>

<script>
import Products from "./products.vue";
// import Footer from "./footer.vue";
import Kategoriyalar from "./kategories";

export default {
  name: "Main",
  methods: {
    selectCat(cat) {
      cat.isSelected = !cat.isSelected;
      // console.log(this.);
    },
    onSelect() {
      var j = this.kats.filter((item) => {
        return item.isSelected === true;
      });
      this.selectedCats = [...j];
      console.log(this.selectedCats);
      // console.log(this.kats);
    },
  },
  data: function () {
    return {
      image1: "https://www.robotistan.com/twinbilim",
      catItem: false,
      isActive: false,
      selectedCats: [],
      kats: [],
      slides: [
        "../images/49635401403_96f9c322dc_o.jpg",
        // "../images/49635401403_96f9c322dc_o.jpg",
        // "../images/49635401403_96f9c322dc_o.jpg",
        // "../images/49635401403_96f9c322dc_o.jpg",
      ],
    };
  },
  components: {
    // Footer,
    // Categories,
    Products,
  },
  mounted() {
    this.kats = [...Kategoriyalar.kat];
    console.log(this.kats);
  },
};
</script>

<style>
.main {
  margin: 30px;
}
.modal-body {
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
}
.modal-body p {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: rgb(179, 178, 178);
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  width: 30%;
}

.menu a {
  text-decoration: none;
  color: black;
}

.menu a:hover {
  color: #161938;
}

.modal-body .active {
  background-color: rgb(16, 31, 97);
  color: white;
}

.phone-number {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.ads {
  width: 100%;
  height: 500px;
}

.ads img {
  width: 100%;
  height: 100%;
}

.cat-ads {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
