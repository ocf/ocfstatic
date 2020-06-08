// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Buefy from "buefy";
import "~/assets/styles.scss"; // Our css options on top of bulma styles
import "bulma-divider/dist/css/bulma-divider.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import axios from "axios";
import initKeycloak from "~/auth.js";

export default async function(Vue, { isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.prototype.$http = axios;
  Vue.use(Buefy);

  if (isClient) {
    initKeycloak();
  }
}
