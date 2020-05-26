<template>
  <b-dropdown mobile-modal hoverable position="is-bottom-left" aria-role="list">
    <g-link slot="trigger" to="/dashboard" tag="span">
      <b-button icon-right="menu-down">
        <figure class="image is-32x32 profile">
          <gravatar-pic :email="user.email" />
        </figure>
      </b-button>
    </g-link>

    <b-dropdown-item custom aria-role="listitem"
      >Signed in as <b>{{ user.username }}</b></b-dropdown-item
    >
    <hr class="dropdown-divider" />
    <b-dropdown-item aria-role="listitem">Example 1</b-dropdown-item>
    <b-dropdown-item aria-role="listitem">Example 2</b-dropdown-item>
    <b-dropdown-item aria-role="listitem">
      <div class="media">
        <b-icon class="media-left" icon="cog" />
        <div class="media-content">
          <h3>Settings</h3>
        </div>
      </div>
    </b-dropdown-item>
    <hr class="dropdown-divider" />
    <b-dropdown-item aria-role="listitem">
      <div class="media" @click="logout">
        <b-icon class="media-left" icon="logout" />
        <div class="media-content">
          <h3>Logout</h3>
        </div>
      </div>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import GravatarPic from "~/components/GravatarPic.vue";
import store from "~/store.js";

export default {
  components: {
    GravatarPic
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    logout() {
      store.keycloak.logout();
    }
  }
};
</script>

<style scoped>
.profile img {
  max-height: initial;
  border-radius: 4px;
}
button {
  box-shadow: none;
  border-color: transparent;
}
</style>
