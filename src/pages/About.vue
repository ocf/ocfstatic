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
                Staff Meetings
              </h2>
              <p>
                We meet every Monday at 8pm Pacific Time.
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
    <section class="hero is-warning">
      <div class="hero-body columns">
        <div class="column is-quarter">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fassets3.thrillist.com%2Fv1%2Fimage%2F1299823%2Fsize%2Ftl-horizontal_main%2F7-weird-stock-images-of-people-struggling-with-basic-cooking&f=1&nofb=1"
          />
        </div>
        <div class="column is-three-quarters">
          <h3 class="title is-3">
            Joining the OCF is an awesome way to learn!
          </h3>
          <div class="columns">
            <div class="column is-third">
              <!--<div class="content">-->
              <h4 class="title is-4">
                We love talking tech and learning new things.
              </h4>
              <p>
                We use our weekly board meetings and staff hours not just to
                make decisions, but also to learn more about *nix and free
                software.
              </p>
              <!--</div>-->
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
      </div>
    </section>
    <section class="hero is-primary">
      <div class="hero-body columns">
        <div class="column is-three-quarters">
          <div class="columns">
            <div class="column is-third">
              <!--<div class="content">-->
              <h2 class="title is-2">Hello</h2>
              <p>Lap aorwe apeg aslfkgj awklej wlrkgja sldfkgjawkaf d</p>
              <!--</div>-->
            </div>
            <div class="column is-third">
              <h2>Hello</h2>
              <p>Lap aorwe apeg aslfkgj awklej wlrkgja sldfkgjawkaf d</p>
            </div>
            <div class="column is-third">
              <h2>Hello</h2>
              <p>Lap aorwe apeg aslfkgj awklej wlrkgja sldfkgjawkaf d</p>
            </div>
          </div>
        </div>
        <div class="column is-quarter">
          <img
            src="https://thumbs.dreamstime.com/z/person-money-computer-2932001.jpg"
          />
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
