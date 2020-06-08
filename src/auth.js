import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import store from "~/store.js";

function tokenInterceptor() {
  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${store.keycloak.token}`;
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

export default async function initKeycloak() {
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
      tokenInterceptor();
      createAuthRefreshInterceptor(axios, refreshAuthLogic);
      try {
        store.user = await store.keycloak.loadUserProfile();
      } catch (err) {
        console.error(`Failed to load user profile: ${err}`);
      }
    } else {
      console.error("Authentication failed");
    }
  } catch (err) {
    console.error(`Auto-login failed: ${err}`);
  }
}
