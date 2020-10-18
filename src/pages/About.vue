<template>
  <!--
  <script src="test.js" type="application/javascript"></script>
-->
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">
            About Us
          </h1>
          <div class="columns is-8 is-variable">
            <div class="column is-half">
              <h2 class="subtitle">What We Do</h2>
              <p class="is-size-5">
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
              <p class="is-size-5">
                OCF Staff meet to discuss technology, learn from each other, and
                work on OCF projects. Drop-in visitors are always welcome,
                especially those interested in joining the staff team!
              </p>
              <p class="is-size-4">
                <strong>When:</strong> Every Monday at 8:10pm
              </p>
              <p class="is-size-4">
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
            <img src="@/assets/lab.jpg" class="card" id="changethis" />
          </div>
          <div class="column is-half">
            <div class="columns is-centered is-vcentered">
              <div class="column is-three-quarters">
                <div class="content">
                  <h2 class="title is-2 has-text-centered">
                    Services We Provide
                  </h2>
                  <!--
                  Right now these cards just look pretty but don't do anything
                  Current goal: when hovering over one of them, change the image to
                  an image that's relevant and with some text for info


                  -->

                  <p class="card box hover-p" @mouseover="mouseOverChangeImage">
                    <strong>Web &amp; Email Hosting</strong>
                  </p>
                  <p class="card box"><strong>UNIX Shell Accounts</strong></p>
                  <p class="card box">
                    <strong>Free Printing for Members</strong>
                  </p>
                </div>
              </div>
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
              src="http://3.bp.blogspot.com/-l5WiG6Nci34/UVKfPBediVI/AAAAAAAAABk/48mdp61vr5k/s1600/Emperor-Penguins-Couple.jpg"
              class="card"
            />
          </div>
          <div class="column is-half">
            <div class="columns is-centered is-vcentered">
              <div class="column is-three-quarters">
                <h2 class="title is-2 has-text-centered">
                  Joining the OCF is an awesome way to learn!
                </h2>
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

    <!-- Next section: services provided
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
    </section> -->

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
  },
  methods: {
    mouseOverChangeImage() {
      // console.log("This should be printing");
      document.getElementById("changethis").src =
        "/assets/img/penguinsticker.png";
    }
  }
};
</script>
<style scoped>
.hover-p:hover {
  background-color: #e1e1e1;
  transition: background-color 1s;
}
</style>
