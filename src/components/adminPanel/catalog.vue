<template>
  <div class="products">
    <div class="catalog-title">
      <h3>Harytlar</h3>
      <button class="add-product">Taze haryt gos</button>
    </div>
    <div class="card" style="width: 90%">
      <div class="card-header">
        <h4>Harytlar(3)</h4>
        <div class="card-header-right">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filtrle
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">sene</a></li>
              <li><a class="dropdown-item" href="#">bahasy</a></li>
              <li><a class="dropdown-item" href="#">toleg yagdayy</a></li>
            </ul>
          </div>
          <input
            class="admin-searchbox"
            type="text"
            placeholder="sena gora gozle"
          />
        </div>
      </div>
      <div class="card-body">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sayla</th>
              <th scope="col">Id</th>
              <th scope="col">Harydyn suraty</th>
              <th scope="col">Harydyn ady</th>
              <th scope="col">Gosulan senesi</th>
              <th scope="col">Bahasy</th>
              <th scope="col">Harydy ayyr</th>
              <th scope="col">Uytget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
              </td>
              <th scope="row">1</th>
              <td><img class="product-image" src="./Mega.jpg" /></td>
              <td>Arduino mega</td>
              <td>19.12.2022</td>
              <td>250man</td>
              <td class="payment-status">
                <button class="btn btn-warning">Uytget</button>
              </td>
              <td class="payment-status">
                <button class="btn btn-danger">Ayyr</button>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
              </td>
              <th scope="row">2</th>
              <td><img class="product-image" src="./uno.jpg" /></td>
              <td>Arduino uno</td>
              <td>23.12.2022</td>
              <td>150man</td>
              <td class="payment-status">
                <button class="btn btn-warning">Uytget</button>
              </td>
              <td class="payment-status">
                <button class="btn btn-danger">Ayyr</button>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
              </td>
              <th scope="row">3</th>
              <td><img class="product-image" src="./tester.webp" /></td>
              <td>Uniwersal tester</td>
              <td>25.12.2022</td>
              <td>120man</td>
              <td class="payment-status">
                <button class="btn btn-warning">Uytget</button>
              </td>
              <td class="payment-status">
                <button class="btn btn-danger">Ayyr</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// <!-- <img :src="previewImage" class="uploading-image" />
// <input
//   class="inputImage"
//   type="file"
//   accept="image/jpeg"
//   @change="uploadImage"
// /> -->
// import { ImageInput } from "vue3-image-input";

export default {
  name: "Catalog",
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    // uploadImage(e) {
    //   const image = e.target.files[0];
    //   const reader = new FileReader();
    //   reader.readAsDataURL(image);
    //   reader.onload = (e) => {
    //     this.previewImage = e.target.result;
    //     console.log(this.previewImage);
    //   };
    // },
  },
};
</script>

<style>
.products {
  margin: 40px;
}
.inputImage {
}
.uploading-image {
  width: 100px;
}

.catalog-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 20px;
}

.payment-status {
  margin: 5px;
}

.card-header-right {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.add-product {
  background: #661aff;
  border-radius: 10px;
  color: white;
  border: none;
  padding: 10px;
}

.product-image {
  width: 100px;
}
</style>
