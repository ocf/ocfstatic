<template>
  <div class="has-navbar-fixed-top">
    <nav class="navbar is-fixed-top is-spaced has-shadow">
      <div class="navbar-brand">
        <g-link class="navbar-item" to="/">
          <penguin class="penguin" />
          <logo height="30px" class="is-hidden-mobile" />
        </g-link>
        <slot name="navItem" />
        <span
          :class="{ 'is-active': isMenuActive }"
          @click="isMenuActive = !isMenuActive"
          class="navbar-burger burger"
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
          <g-link class="navbar-item" to="/contact">
            Contact Us
          </g-link>
          <g-link class="navbar-item" to="/login" tag="span">
            <b-button outlined type="is-link">
              Login
            </b-button>
          </g-link>
        </div>
      </div>
    </nav>
    <slot />
    <footer class="footer">
      <div class="content has-text-centered is-size-7">
        <!-- Use line breaks to avoid line spacing. -->
        The Open Computing Facility is run entirely by student volunteers.
        <br />
        Copyright © 1989–{{ new Date().getFullYear() }} Board of Directors of
        the Open Computing Facility.
        <br />
        The Open Computing Facility is a Chartered Program of the ASUC.
        <br />
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Penguin from "~/assets/svg/penguin.svg";

export default {
  metaInfo: {
    htmlAttrs: {
      class: "has-navbar-fixed-top has-spaced-navbar-fixed-top"
    }
  },
  components: {
    Logo,
    Penguin
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
      ]
    };
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
