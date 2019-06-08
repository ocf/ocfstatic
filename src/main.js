// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Vue from "vue";
import Buefy from "buefy";
import "~/assets/styles.scss"; // Our css options on top of bulma styles
import "bulma-divider/dist/css/bulma-divider.min.css";

Vue.use(Buefy);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
