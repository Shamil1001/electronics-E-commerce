<template>
  <div class="products">
    <div class="alert alert-dark" role="alert">
      <p>Ahli harytlar</p>
    </div>
    <div class="product-exp">
      <div class="product-cards">
        <div class="card border-gray mb-5 kart" v-for="n in 6" :key="n">
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
              <span class="zoom-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-zoom-in"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                  <path
                    d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
              </span>
              <span class="like-icon"> </span>
            </div>
          </div>
          <div class="card-body text-dark">
            <!-- <i class="fas fa-home fa-lg"></i> -->
            <img
              class="product-img"
              src="https://sumbar-computer.com/storage/xs/ip/SUBKD4ES9JOzwHt4kGIR.jpg"
            />
            <h4 class="card-title">Block for PC</h4>
            <h5 class="card-text">Bahasy</h5>
            <h5 class="card-text text-danger">10000 man</h5>
            <button class="btn btn-danger">Sebede gos</button>
          </div>
        </div>
      </div>
      <div class="short-explanation">Explanation</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
};
</script>

<style>
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
  grid-template-columns: 1fr 1fr 1fr;
}
.card-body .product-img {
  height: 60%;
  width: 50%;
  cursor: pointer;
}
</style>
