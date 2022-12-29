<template>
  <div class="newCustomer">
    <div class="card" style="width: 50rem">
      <div class="add-customer-header">
        <h4>Alyjy gosmak</h4>
        <button type="button" class="btn btn-primary">+ add customer</button>
      </div>
      <div class="card-body">
        <div class="card" style="width: 18rem">
          <div class="card-header">New customer 1</div>
          <div class="m-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Ady we familiyasy</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Shamil Jemhurov"
            />
            <label for="exampleFormControlInput1" class="form-label"
              >Telefon belgisi</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="65586747"
            />
            <label for="exampleFormControlInput1" class="form-label"
              >Email adresi</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="card-footer">
            <button type="button" class="btn btn-primary">Add customer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewCustomer",
};
</script>

<style>
.add-customer-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #dbdbdb;
}

.add-customer-header h4,
button {
  margin: 10px;
}
</style>
