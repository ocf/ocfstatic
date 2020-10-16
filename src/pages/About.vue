<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">
            About Us
          </h1>
          <div class="columns is-8">
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
                Staff Meetings
              </h2>
              <p>
                OCF Staff meet to discuss technology, learn from each other, and
                work on OCF projects. Drop-in visitors are always welcome,
                especially those interested in joining the staff team!
              </p>
              <p><strong>When:</strong> Every Monday at 8:10pm</p>
              <p>
                <strong>Where: </strong>
                <a href="https://ocf.io/meet">Google Meet</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section card">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-half">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets3.thrillist.com%2Fv1%2Fimage%2F1299823%2Fsize%2Ftl-horizontal_main%2F7-weird-stock-images-of-people-struggling-with-basic-cooking&f=1&nofb=1"
              class="card"
            />
          </div>
          <div class="column is-half">
            <div class="columns is-centered is-vcentered">
              <div class="column is-three-quarters">
                <h3 class="title is-3">
                  Joining the OCF is an awesome way to learn!
                </h3>
                <h4 class="title is-4">
                  We love talking tech and learning new things.
                </h4>
                <p>
                  We use our weekly board meetings and staff hours not just to
                  make decisions, but also to learn more about *nix and free
                  software.
                </p>
                <h4 class="title is-4">
                  We're totally open and super-inclusive!
                </h4>
                <p>
                  Our members have a wide range of majors and technical
                  backgrounds. There are tons of ways to learn and have fun!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Next section: services provided-->
    <section class="hero is-primary">
      <div class="hero-body columns">
        <div class="column is-three-quarters">
          <h3 class="title is-3 has-text-centered">
            We provide lots of cool services to the Berkeley community!
          </h3>
          <div class="columns">
            <div class="column is-third">
              <h4 class="title is-4">
                We love talking tech and learning new things.
              </h4>
              <p>
                We use our weekly board meetings and staff hours not just to
                make decisions, but also to learn more about *nix and free
                software.
              </p>
            </div>
            <div class="column is-third">
              <h4 class="title is-4">
                We're totally open and super-inclusive!
              </h4>
              <p>
                Our members have a wide range of majors and technical
                backgrounds. There are tons of ways to learn and have fun!
              </p>
            </div>
            <div class="column is-third">
              <h4 class="title is-4">
                We've got a perfect sandbox to poke around.
              </h4>
              <p>
                In addition to our powerful servers and desktops, staff get
                access to their own private server to hoze.
              </p>
            </div>
          </div>
        </div>
        <div class="column is-quarter">
          <g-image src="~/assets/lab.jpg" class="card" />
        </div>
      </div>
    </section>

    <!--- The timeline -->

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
