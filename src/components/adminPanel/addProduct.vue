<template>
  <div class="addProduct">
    <div class="card">
      <div class="card-header">Header</div>
      <div class="card-body">
        <div class="product1">
          <div class="productName mb-3 row">
            <label for="inputPassword" class="col col-form-label"
              >Harydyn ady</label
            >
            <div class="col">
              <input type="text" class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="productPrice mb-3 row">
            <label for="inputPassword" class="col col-form-label">Bahasy</label>
            <div class="col">
              <input type="text" class="form-control" id="inputPrice" />
            </div>
          </div>
          <div class="productQuantity mb-3 row">
            <label for="inputQuantity" class="col col-form-label"
              >Harydyn sany</label
            >
            <div class="col">
              <input type="text" class="form-control" id="inputPrice" />
            </div>
          </div>
          <div class="productDescription mb-3 row">
            <label for="inputPassword" class="col col-form-label"
              >Haryt hakynda</label
            >
            <div class="col">
              <textarea
                class="form-control"
                id="descriptionArea"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="productImage">
            <!-- <div class="mb-3">
              <label for="formFile" class="form-label"
                >Harydyn suratyny gos</label
              >
              <input
                v-if="previewImage == null"
                class="form-control file-input"
                type="file"
                id="formFile"
                @change="uploadImage"
              />
            </div> -->
            <div
              class="image-input"
              :style="{ 'background-image': `url(${imageData})` }"
              @click="chooseImage"
            >
              <span v-if="!imageData" class="placeholder">
                Choose an Image
              </span>
              <input
                class="file-input"
                ref="fileInput"
                type="file"
                @input="onSelectFile"
              />
            </div>
          </div>
          <img :src="previewImage" class="uploading-image" />
        </div>
      </div>
      <button @click="onUpload" class="btn btn-primary">Harydy gos</button>
    </div>
  </div>
</template>

<script>
// import { file } from "@babel/types";
import axios from "axios";
export default {
  name: "AddProduct",
  methods: {
    uploadImage(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (e) => {
        this.previewImage = e.target.result;
        // console.log(this.previewImage);
        console.log(this.previewImage);
      };
    },
    onUpload() {
      const fd = new FormData();
      fd.append("image", this.selectedImage, this.selectedImage.name);
      axios.post("http://192.168.1.18:5000/productImage/", fd).then((res) => {
        console.log("ugratmaly ", res);
      });
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },

    onSelectFile(event) {
      console.log(event);
      const input = this.$refs.fileInput;
      const files = input.files;
      console.log(files[0]);
      this.selectedImage = files[0];
      console.log(this.selectedImage);
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
          // console.log(this.imageData.nam);
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
    },
  },
  data() {
    return {
      previewImage: null,
      imageData: null,
      selectedImage: null,
    };
  },
};
</script>

<style>
.productImage .image-input {
  display: block;
  width: 200px;
  height: 200px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}
.placeholder {
  background: #f0f0f0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 18px;
  font-family: Helvetica;
}
.placeholder:hover {
  background: #e0e0e0;
}
.file-input {
  display: none;
}
</style>
