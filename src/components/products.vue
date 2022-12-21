<template>
  <div class="products">
    <div class="product-menu">
      <font-awesome-icon class="home-icon" icon="house" size="1x">
      </font-awesome-icon>
      <p>Ahli harytlar</p>
      <p>Taze onumler</p>
      <p>Skidakadaky onumler</p>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="search" />
        <font-awesome-icon class="search-btn" icon="magnifying-glass">
        </font-awesome-icon>
      </div>
    </div>
    <div class="product-exp">
      <div class="product-cards" v-if="products.data">
        <div
          class="card border-gray mb-5 kart"
          v-for="n in products.data.data"
          :key="n"
        >
          <div class="card-header">
            <div class="compare">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />

              <p>Denesdirmek</p>
            </div>

            <div class="header-icons">
              <font-awesome-icon
                class="zoom-icon"
                data-bs-toggle="modal"
                data-bs-target="#zoomModal"
                icon="magnifying-glass-plus"
              ></font-awesome-icon>
              <font-awesome-icon class="like-icon" icon="heart">
              </font-awesome-icon>
            </div>
          </div>
          <div class="card-body text-dark">
            <!-- <i class="fas fa-home fa-lg"></i> -->
            <router-link
              :to="{
                name: 'OneProduct',
                params: { id: n.id, d: 'Shamil' },
              }"
            >
              <img
                :id="n.id"
                class="product-img"
                :src="n.productImage[0].imgUrl"
              />
            </router-link>
            <h4 class="card-title">{{ products.data.data[0].sku }}</h4>
            <h5 class="card-text">Bahasy</h5>
            <h5 class="card-text text-danger">10000 man</h5>
            <button class="btn btn-danger">Sebede gos</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="zoomModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <h1 class="modal-title fs-5" id="exampleModalLabel">
              Kategoriyalar
            </h1> -->
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img
              class="imageInModal"
              src="https://sumbar-computer.com/storage/xs/ip/SUBKD4ES9JOzwHt4kGIR.jpg"
            />
          </div>
          <!-- <div class="modal-footer">
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Products",
  data() {
    return {
      products: {},
    };
  },
  mounted() {
    axios.get("http://192.168.31.88:5000/products/").then((resp) => {
      this.products = { ...resp };
      console.log(this.products.data.data);
    });
  },
};
</script>

<style>
.product-menu {
  display: flex;
  flex-direction: row;
  height: 50px;
  margin-bottom: 50px;
  border-radius: 10px;
  border: 2px solid brown;
}

.product-menu .search-box {
  height: 100%;
  display: flex;
  flex-direction: row;
  width: 100vw;
}
.product-menu .search-box .search-btn {
  font-size: 20px;
  display: flex;
}

.product-menu .search-box .search-bar {
  height: 100%;
  width: 55vw;
  border: none;
  padding-left: 15px;
  outline-color: brown;
  border-color: brown;
  font-size: 20px;
  font-weight: bold;
  color: brown;
}

.product-menu p {
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  border-right: 2px solid brown;
}

.home-icon {
  height: 100%;
  padding-left: 20px;
  border-right: 2px solid brown;
}

.like-icon,
.zoom-icon {
  cursor: pointer;
}
.card-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.compare .form-check-input {
  cursor: pointer;
}

.compare,
.header-icons {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.product-exp {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.short-explanation {
  width: 30vw;
  background-color: rgb(237, 237, 237);
  border-radius: 5px;
}

.products {
  width: 100%;
}
.product-cards .kart {
  height: 100%;
  width: 100%;
}

.product-cards {
  display: grid;
  width: 100%;
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.card-body .product-img {
  height: 60%;
  width: 50%;
  cursor: pointer;
}
</style>
