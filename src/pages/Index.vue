<template>
  <Layout>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="columns is-desktop is-vcentered">
          <div class="column has-text-centered">
            <logo animated />
          </div>
          <div class="column has-text-centered">
            <div class="title is-size-2-desktop home-content">
              Open Computing Facility
            </div>
            <div class="subtitle is-6 home-content">
              An all-volunteer student organization dedicated to free computing
              for all UC Berkeley students, faculty, and staff.
            </div>
            <b-button size="is-large inverted outlined" class="home-content">
              Create an Account
            </b-button>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-text-centered home-content">
      <links />
    </section>
    <section class="hero has-text-centered has-bg-img">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
    <section class="section ">
      News From the Staff Team
    </section>
    <section class="section ">
      Join Staff! List some projects
    </section>
  </Layout>
</template>

<script>
import ScrollReveal from "scrollreveal";
import Logo from "~/components/Logo.vue";
import Links from "~/components/Links.vue";

export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Logo,
    Links
  },
  mounted() {
    ScrollReveal().reveal(".home-content", { interval: 200, origin: "top" });
  }
};
</script>

<style scoped>
.has-bg-img {
  background: url("../assets/lab.jpg") center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
