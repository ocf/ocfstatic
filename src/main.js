// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import Buefy from "buefy";
import "~/assets/styles.scss"; // Our css options on top of bulma styles
import "bulma-divider/dist/css/bulma-divider.min.css";
import "@mdi/font/css/materialdesignicons.min.css";
import Axios from "axios";
import store from "~/store.js";

export default async function(Vue, { isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.prototype.$http = Axios;
  Vue.use(Buefy);

  function tokenInterceptor() {
    Vue.prototype.$http.interceptors.request.use(
      config => {
        config.headers.Authorization = `Bearer ${store.keycloak.token}`;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
  }

  // Init Keycloak on the client.
  if (isClient) {
    // The js library should be fetched directly from the server at some point to make upgrading easier.
    const { default: Keycloak } = await import("keycloak-js");

    store.keycloak = Keycloak("/keycloak.json");
    try {
      if (
        await store.keycloak.init({
          onLoad: "check-sso",
          silentCheckSsoRedirectUri:
            window.location.origin + "/silent-check-sso.html"
        })
      ) {
        try {
          store.user = await store.keycloak.loadUserProfile();
        } catch (err) {
          console.error(`Failed to load user profile: ${err}`);
        }
        tokenInterceptor();
      } else {
        console.error("Authentication failed");
      }
    } catch (err) {
      console.error(`Auto-login failed: ${err}`);
    }
  }
}
