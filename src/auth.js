import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import store from "~/store.js";

function tokenInterceptor(Vue) {
  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
      return config;
    },
    error => Promise.reject(error)
  );
}

function refreshAuthLogic() {
  store.keycloak.updateToken(5).then(() => {
    return Promise.resolve();
  });
}

export default async function initKeycloak(Vue) {
  // The js library should be fetched directly from the server at some point to make upgrading easier.
  const { default: Keycloak } = await import("keycloak-js");
  Vue.prototype.$keycloak = Keycloak("/keycloak.json");
  store.loading = true;
  try {
    if (
      await Vue.prototype.$keycloak.init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html"
      })
    ) {
      // Use token in future requests
      tokenInterceptor(Vue);
      // Refresh the token automatically when requests fail
      createAuthRefreshInterceptor(axios, refreshAuthLogic);
      try {
        store.user = await Vue.prototype.$keycloak.loadUserProfile();
      } catch (err) {
        store.error = err;
        console.error(`Failed to load user profile: ${err}`);
      }
    } else {
      store.error = "Failed login";
      console.error("Authentication failed");
    }
  } catch (err) {
    store.error = err;
    console.error(`Auto-login failed: ${err}`);
  }
  store.loading = false;
}
