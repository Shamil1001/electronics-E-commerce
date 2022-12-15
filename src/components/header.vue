<template>
  <fragment>
    <div class="header">
      <div class="logo">
        <router-link to="/">
          <h1>Yedi Tilsim</h1>
        </router-link>
      </div>
      <!-- <div class="nav-center">
        <input class="search" placeholder="search" type="text" />
      </div> -->
      <div class="user-language">
        <span class="globe" data-bs-toggle="dropdown" aria-expanded="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            fill="currentColor"
            class="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
            />
          </svg>
        </span>
        <ul class="dropdown-menu">
          <li>
            <img src="../images/flags/turkmenistan.png" /><a
              class="dropdown-item"
              href="#"
              >Turkmen</a
            >
          </li>
          <li>
            <img src="../images/flags/united-kingdom.png" /><a
              class="dropdown-item"
              href="#"
              >English</a
            >
          </li>
          <li>
            <img src="../images/flags/russia.png" /><a
              class="dropdown-item"
              href="#"
              >Russian</a
            >
          </li>
        </ul>
        <router-link to="/cart">
          <span class="cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              height="30px"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </span>
        </router-link>
        <span class="user">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </span>
      </div>
    </div>
  </fragment>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style>
.header {
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #172a4c;
  height: 120px;
  color: white;
  font-weight: bold;
}

.dropdown-menu li {
  display: flex;
  flex-direction: row;
}
.dropdown-menu li img {
  width: 30px;
}

.search {
  margin-top: 10px;
  width: 20vw;
  height: 35px;
  border-radius: 10px;
  border-style: none;
  padding-left: 10px;
}
.menu {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.menu p {
  cursor: pointer;
}
.user-language {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 25px;
  align-items: center;
}
.user-language span {
  cursor: pointer;
}
</style>
