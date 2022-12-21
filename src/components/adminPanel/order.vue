<template>
  <div class="admin-center">
    <div class="card" style="width: 90%">
      <div class="card-header">
        <h4>Sargyt(3)</h4>
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
              <th scope="col">Sargalan haryt</th>
              <th scope="col">Alyjy</th>
              <th scope="col">Bahasy</th>
              <th scope="col">Toleg gornusi</th>
              <th scope="col">Toleg yagdayy</th>
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
              <td>Arduino uno</td>
              <td>Begli</td>
              <td>150man</td>
              <td>onunden toleg</td>
              <td class="payment-status">
                <button class="btn btn-success">tolendi</button>
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
              <td>Stepper motor</td>
              <td>Jora</td>
              <td>75man</td>
              <td>onunden toleg</td>
              <td class="payment-status">
                <button class="btn btn-success">tolendi</button>
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
              <td>Arduino Mega</td>
              <td>Vekil</td>
              <td>250man</td>
              <td>sonundan toleg</td>
              <td class="payment-status">
                <button class="btn btn-danger">toleg gecilenok</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
};
</script>

<style>
.admin-center {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}
.payment-status {
  margin: 5px;
  border-radius: 10px;
}

.card-header-right {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
