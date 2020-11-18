<template>
  <Layout disable-footer>
    <div v-if="data.loading" class="hero is-fullheight-with-navbar">
      <b-loading :active="true" :is-full-page="false" />
    </div>
    <div v-else-if="data.error" class="hero is-fullheight-with-navbar">
      <div class="hero-body has-text-centered">
        <div class="container">
          <a type="is-link" @click="$keycloak.login()">Login</a> or
          <a type="is-link">create an account</a> to view
        </div>
      </div>
    </div>
    <div v-else class="columns is-marginless reverse-row-order">
      <div class="column">
        <slot />
      </div>
      <div class="column is-2 has-background-white-bis">
        <aside-menu />
      </div>
    </div>
  </Layout>
</template>

<script>
import store from "~/store.js";
import AsideMenu from "@/components/dashboard/AsideMenu.vue";

export default {
  components: {
    AsideMenu
  },
  data() {
    return {
      test: null,
      data: store
    };
  },
  methods: {
    async auth_request_test() {
      this.test = await this.$http
        .get("http://localhost:8000/user")
        .then(response => response.data);
    }
  }
};
</script>

<style scoped>
.reverse-row-order {
  flex-direction: row-reverse;
}
</style>
