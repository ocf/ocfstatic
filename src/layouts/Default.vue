<template>
  <div class="has-navbar">
    <nav class="navbar is-spaced has-shadow">
      <div class="navbar-brand">
        <g-link class="navbar-item" to="/">
          <penguin class="penguin" />
          <logo height="30px" class="is-hidden-mobile" :dark-mode="darkMode" />
        </g-link>
        <slot name="navItem" />
        <span
          :class="{ 'is-active': isMenuActive }"
          class="navbar-burger burger"
          @click="isMenuActive = !isMenuActive"
        >
          <!-- These extra spans are the three lines in the hamburger
          menu, they make animation possible, do not remove! -->
          <span />
          <span />
          <span />
        </span>
      </div>
      <div :class="{ 'is-active': isMenuActive }" class="navbar-menu">
        <div class="navbar-end">
          <g-link class="navbar-item" to="/staff-hours">
            Staff Hours
          </g-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">
              Services
            </div>
            <div class="navbar-dropdown is-boxed">
              <g-link
                v-for="(service, index) in services"
                :key="index"
                :to="service.route"
                class="navbar-item"
              >
                {{ service.name }}
              </g-link>
            </div>
          </div>
          <g-link class="navbar-item" to="/docs">
            Documentation
          </g-link>
          <g-link class="navbar-item" to="/about">
            About
          </g-link>
          <g-link class="navbar-item" to="/docs/internal/contact">
            Contact Us
          </g-link>
          <div class="navbar-item">
            <div v-if="user">
              <profile :user="user" />
            </div>
            <b-button v-else outlined type="is-link" @click="$keycloak.login()">
              Login
            </b-button>
          </div>
          <div class="navbar-item" is-clickable @click="toggleTheme">
            {{ darkMode ? "🌑" : "☀️" }}
          </div>
        </div>
      </div>
    </nav>
    <slot />
    <footer
      v-if="!disableFooter"
      class="footer columns is-marginless is-vcentered w-100"
    >
      <div class="column is-4">
        <p class="title is-4" style="margin-bottom: 0.5rem">Quick Links</p>
        <g-link class="subtitle is-6" to="/">Home</g-link>
        <br />
        <g-link class="subtitle is-6" to="/docs/faq">FAQ</g-link>
        <br />
        <g-link class="subtitle is-6" to="/stats">Stats</g-link>
        <br />
        <a class="subtitle is-6" href="https://www.ocf.berkeley.edu/~staff/bod/"
          >Board Meeting Minutes</a
        >
        <br />
        <g-link class="subtitle is-6" to="/account">Manage My Account</g-link>
      </div>
      <div class="column content has-text-centered is-size-7">
        <!-- Use line breaks to avoid line spacing. -->
        The Open Computing Facility is run entirely by student volunteers.
        <br />
        Copyright © 1989–{{ new Date().getFullYear() }} Board of Directors of
        the Open Computing Facility.
        <br />
        The Open Computing Facility is a Chartered Program of the ASUC.
        <br />
        <br />
        View the source code on
        <a href="https://github.com/BernardZhao/ocf">
          <b-icon icon="github" size="is-small"> </b-icon>
          Github
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Penguin from "~/assets/svg/penguin.svg";
import Profile from "~/components/Profile.vue";
import store from "~/store.js";

export default {
  components: {
    Logo,
    Penguin,
    Profile
  },
  props: {
    disableFooter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isMenuActive: false,
      services: [
        { name: "Lab", route: "/docs/services/lab" },
        { name: "Printing", route: "/docs/services/lab/printing" },
        { name: "Web Hosting", route: "/docs/services/web" },
        { name: "Application Hosting", route: "/docs/services/webapps" },
        { name: "SSH/SFTP (Shell)", route: "/docs/services/shell" },
        { name: "Email Hosting", route: "/docs/services/mail" },
        { name: "MySQL Database", route: "/docs/services/mysql" },
        { name: "Software Mirrors", route: "/docs/services/mirrors" },
        { name: "High Performance Computing", route: "/docs/services/hpc" }
      ],
      darkMode: false
    };
  },
  computed: {
    user() {
      return store.user;
    }
  },
  watch: {
    darkMode(newMode) {
      if (
        document.getElementById("app").classList.value.includes("dark") !==
        newMode
      )
        document.getElementById("app").classList.toggle("dark");
      localStorage.darkMode = newMode;
    }
  },
  mounted() {
    if (localStorage.darkMode) {
      let status = localStorage.darkMode === "true";

      if (
        document.getElementById("app").classList.value.includes("dark") !==
        status
      )
        document.getElementById("app").classList.toggle("dark");
      this.darkMode = status;
    }
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
    }
  }
};
</script>

<style scoped>
.penguin {
  width: 1.7rem;
  max-height: 2.5rem;
  margin-right: 5px;
}
</style>
