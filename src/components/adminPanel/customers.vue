<template>
  <div class="customer">
    <div class="custom-title">
      <h3>Alyjylar</h3>
      <button class="add-customer">New customer</button>
    </div>
    <div class="card" style="width: 90%">
      <div class="card-header">
        <h4>Alyjylar(3)</h4>
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
              <th scope="col">Alyjy ady we familyasy</th>
              <th scope="col">Gosulan senesi</th>
              <th scope="col">Telefon belgisi</th>
              <th scope="col">Email</th>
              <th scope="col">Alyjyny ayyr</th>
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
              <td>Begli Welliyev</td>
              <td>19.12.2022</td>
              <td>61214578</td>
              <td>bwelliyev@gmail.com</td>
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
              <td>Jora Abdullayev</td>
              <td>23.12.2022</td>
              <td>63254789</td>
              <td>kerwenabdullayev@mail.ru</td>
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
              <td>Wekil Bekmuradov</td>
              <td>25.12.2022</td>
              <td>65586747</td>
              <td>vbekmuradov1120@gmail.com</td>
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
export default {
  name: "Customers",
};
</script>

<style>
.customer {
  margin: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.custom-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 20px;
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
.add-customer {
  background: #661aff;
  border-radius: 10px;
  color: white;
  border: none;
  padding: 10px;
}
</style>
