import { createApp } from "vue";
// import App from "./App.vue";
import Admin from "./components/adminPanel/admin.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faTiktok } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faStore } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";

library.add(
  faCircleDollarToSlot,
  faFolderOpen,
  faBasketShopping,
  faHeart,
  faUser,
  fas,
  far,
  fab,
  // faPhone,
  faStore
  // faSpinner,
  // faMagnifyingGlassPlus,
  // faHeart,
  // faLocationDot,
  // faEnvelope,
  // faTiktok,
  // faInstagram,
  // faHouse,
  // faMagnifyingGlass
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(Admin).component("fa", FontAwesomeIcon).use(router).mount("#app");
