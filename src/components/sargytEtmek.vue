<template>
  <div class="sargytMain">
    <div class="sargytTitle">
      <h1>
        Hytaýyň we Türkiýäniň islendik ýerinden we saýtyndan dürli görnüşli
        sargytlary tiz wagtda we amatly bahadan getirmek hyzmatyny Size
        hödürleýäris!
      </h1>
    </div>
    <div class="order">
      <div class="sargyt-form">
        <label class="form-label">Ady familiýasy:</label>
        <input
          type="email"
          class="form-control orderer-name"
          placeholder="Shamil Jemhurov"
        />
        <label class="form-label">Telefon belgisi:</label>
        <input
          type="nume=ber"
          class="form-control phone-number"
          placeholder="65586747"
        />
        <label class="form-label">Elektron poçtaňyz:</label>
        <input
          type="email"
          class="form-control email"
          placeholder="shjemhurov@gmail.com"
        />
        <label class="form-label">Nirä eltmeli:</label>
        <input
          type="email"
          class="form-control adress"
          placeholder="Ashgabat, Koshi street, 100"
        />
      </div>
      <div class="order-details">
        <div class="card">
          <div class="card-body">
            <input
              type="link"
              class="form-control link"
              placeholder="Sargydyn linki"
            />
            <input
              type="text"
              class="form-control order-image"
              placeholder="Harydyn suraty"
            />
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Aytjak zadynyz barmy?"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SargytEtmek",
};
</script>

<style>
.sargytMain {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75vh;
}

.sargytTitle h1 {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 70px;
}

.sargyt-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
}
.order {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 30px;
}

.card {
  width: 100%;
  box-shadow: 2px 5px 5px gray;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
