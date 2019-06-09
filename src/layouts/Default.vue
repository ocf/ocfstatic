<template>
  <div class="has-navbar-fixed-top">
    <nav class="navbar is-fixed-top is-spaced has-shadow">
      <div class="navbar-brand">
        <g-link class="navbar-item" to="/">
          <penguin class="penguin" />
          <logo height="30px" />
        </g-link>
        <span
          class="navbar-burger burger"
          :class="{ 'is-active': isMenuActive }"
          @click="isMenuActive = !isMenuActive"
        >
          <!-- These extra spans are the three lines in the hamburger
          menu, they make animation possible, do not remove! -->
          <span />
          <span />
          <span />
        </span>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <g-link class="navbar-link" to="/services">
              Services
            </g-link>
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
          <g-link class="navbar-item" to="/staff-hours">
            Staff Hours
          </g-link>
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
        { name: "Lab", route: "/lab" },
        { name: "Printing", route: "/" },
        { name: "Web Hosting", route: "/" },
        { name: "Application Hosting", route: "/" },
        { name: "SSH/SFTP (Shell)", route: "/" },
        { name: "Email Hosting", route: "/" },
        { name: "MySQL Database", route: "/" },
        { name: "Software Mirrors", route: "/" },
        { name: "High Performance Computing", route: "/" }
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
