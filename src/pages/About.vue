<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">
            About Us
          </h1>
          <div class="columns">
            <div class="column is-half">
              <h2 class="subtitle">What We Do</h2>
              <p>
                We're a student organization dedicated to providing free
                computing for all UC Berkeley students, faculty, and staff. We
                run a super awesome computer lab on southside, have a wicked set
                of servers for staff to play on, and provide cool services to
                the Berkeley community.
              </p>
            </div>
            <div class="column is-half">
              <h2 class="subtitle">
                OCF in this Time of Corona
              </h2>
              <p>
                Although we can't meet in-person at our lab, we're still doing
                lots of cool things! For example:
              </p>
              <ul>
                <li>Online staff meetings</li>
                <li>Server space for websites and organizations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-text-centered">
      <div class="container">
        <h1 class="title">
          History
        </h1>
        <history />
      </div>
    </section>
  </Layout>
</template>

<script>
import History from "~/components/History.vue";
export default {
  metaInfo: {
    title: "About Us"
  },
  components: {
    History
  }
};
</script>
