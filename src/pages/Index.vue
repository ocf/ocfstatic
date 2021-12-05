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
            <div class="columns mx-2 my-0 hero-buttons">
              <g-link
                class="button is-medium is-desktop-large inverted outlined home-content column is-flex my-2"
                to="/docs/internal/membership/"
              >
                Create an Account
              </g-link>
              <g-link
                class="button is-medium is-desktop-large inverted outlined home-content column is-flex my-2"
                to="/docs/services/webhostingsolutions/"
              >
                Host your Website
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box home-content">
            <div class="columns mx-0" style="gap: 2rem;">
              <g-link
                class="button is-info is-outlineda is-medium column is-flex my-2"
                v-for="link in quickLinks"
                :key="link.url"
                :to="link.url"
              >
                {{ link.title }}
              </g-link>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child box home-content">
                <p class="title">
                  Currently
                  <span v-if="labIsOpen()" class="has-text-success">Open</span>
                  <span v-else class="has-text-danger">Closed</span>
                </p>
                <p class="subtitle">
                  <span> Today's hours: {{ hours }} </span>
                  <g-link to="/docs/services/lab/#hours" class="span">
                    See more »
                  </g-link>
                </p>
                <div class="content">
                  <p>
                    There are currently {{ numUsersInLab }} people in the lab,
                    including {{ staffInLab.length }} staff:
                  </p>
                  <p>{{ formatStaffInLab(staffInLab) }}</p>
                </div>
              </article>
              <article class="tile is-child box home-content">
                <p class="title">Staff News</p>
                <p class="subtitle">
                  <a href="https://status.ocf.berkeley.edu/">More updates »</a>
                </p>
                <div v-for="item in blogPosts" :key="item.id">
                  <p class="title is-5">
                    {{ item.title }}<a :href="item.link"> »</a>
                  </p>
                  <p class="subtitle is-6">
                    {{ formatBlogTime(item.published) }}
                  </p>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box home-content">
                <p class="title">The Lab</p>
                <p class="subtitle">
                  Located at 171 MLK Student Union
                  <g-link to="/docs/services/lab"> See more » </g-link>
                </p>
                <div class="content">
                  <p>
                    Find out how to
                    <g-link to="/docs/services/lab/#location">get there</g-link
                    >. Just show your Cal ID at the door!
                  </p>

                  <g-link to="/docs/services/lab/">
                    <g-image src="~/assets/lab.jpg" />
                  </g-link>
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box home-content">
              <g-image
                class="is-pulled-right"
                src="~/assets/penguinsticker.png"
                width="200"
                inside
              ></g-image>
              <p class="title">Join Staff!</p>
              <p class="subtitle">
                Meetings 8PM every Wednesday at the lab and at
                <a href="http://ocf.io/meet">ocf.io/meet</a>
              </p>
              <div class="content">
                <p>
                  We meet every week to talk tech and work on cool projects. All
                  are welcome to join OCF staff, at any point in the semester!
                </p>
                <p class="title is-5">Sound interesting?</p>
                <ul>
                  <li>
                    Subscribe to our
                    <a href="https://ocf.io/announce">mailing list</a> for
                    meeting recaps
                  </li>
                  <li>
                    Chat with us on
                    <a href="https://fco.slack.com">Slack</a>,
                    <a href="https://ocf.io/discord">Discord</a>,
                    <a href="https://chat.ocf.berkeley.edu/">Matrix</a> or
                    <a href="docs/internal/contact/irc/">IRC</a>
                  </li>
                  <li>
                    Drop by and say hello, or
                    <a href="docs/internal/contact">email</a> the staff team
                  </li>
                  <li>
                    See more ways to
                    <a href="docs/staff/getinvolved"
                      >contribute and get involved</a
                    >
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box home-content">
            <div class="content">
              <p class="title">About Us</p>
              <p class="subtitle"><g-link to="/about">See More »</g-link></p>
              <div class="content">
                <p>
                  The Open Computing Facility is an all-volunteer student
                  organization located at the University of California,
                  Berkeley. We're passionate about open source and free
                  software.
                </p>
                <p>
                  Our volunteers maintain services for the Berkeley community.
                  Among others, we offer:
                </p>
                <ul>
                  <li>
                    <a href="/docs/services/lab/">A spiffy computer lab</a> in
                    171 MLK Student Union
                  </li>
                  <li>
                    <a href="/docs/services/web/">Web &amp; email hosting</a>
                    for thousands of student groups and individuals
                  </li>
                  <li>
                    <a href="/docs/services/lab/printing/">Free printing</a> for
                    all UC Berkeley students
                  </li>
                  <li>
                    <a href="/docs/services/shell/">Shell accounts</a> on our
                    powerful
                    <a href="/docs/staff/backend/servers/">on-campus servers</a>
                  </li>
                  <li>
                    <a href="/docs/services/hpc/">High-performance computing</a>
                    on our GPU server
                  </li>
                  <li>...and <a href="/docs/">lots more!</a></li>
                </ul>
                <p>
                  We hold
                  <g-link to="/staff-hours">weekly staff hours</g-link> to
                  provide assistance with account issues or with OCF services.
                  Drop by to ask questions or just to hang out!
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box home-content">
            <p class="title">Linux SysAdmin Decal</p>
            <p class="subtitle">
              <a href="https://decal.ocf.berkeley.edu/">See More »</a>
            </p>
            <div class="content">
              <p>
                Whether you are looking to improve your Bash wizardry, just
                plain GNU, or everything Unix and Unix-like, this is the perfect
                class for you. We offer a beginner section for those new to Unix
                and an advanced section for those who have some experience but
                want to learn more. Both sections are 2 units and be held from
                8-9pm, the beginner section on Tuesdays and the advanced section
                on Thursdays, right in the OCF lab.
              </p>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-8">
          <article class="tile is-child box home-content">
            <p class="title">This week's stats</p>
            <p class="subtitle"><g-link to="/stats">See More »</g-link></p>

            <div class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Pages printed</p>
                  <p class="title">3,456</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Bandwidth Usage</p>
                  <p class="title">123GB</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Hours Farmed</p>
                  <p class="title">456</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">Accounts Created</p>
                  <p class="title">9</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </Layout>
</template>

<static-query>
query {
  metadata {
    apiUrl
  }
}
</static-query>

<script>
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
  data() {
    return {
      hours: [],
      blogPosts: [],
      numUsersInLab: null,
      staffInLab: [],
      quickLinks: [
        {
          title: "Staff Hours",
          url: "/staff-hours"
        },
        {
          title: "How to Print",
          url: "/docs/services/lab/printing"
        },
        {
          title: "Join Staff",
          url: "/docs/staff/getinvolved"
        },
        {
          title: "Get Help",
          url: "/docs/internal/contact"
        }
      ]
    };
  },
  mounted() {
    // Scrollreveal is not SSR friendly (it looks for window on load), must dynamically import
    // See https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions
    import("scrollreveal").then(ScrollReveal =>
      ScrollReveal.default().reveal(".home-content", {
        interval: 100,
        origin: "top"
      })
    );
    this.setHoursTextToday();
    this.setBlogPosts();
    this.setNumUsersInLab();
    this.setStaffInLab();
  },
  methods: {
    async setHoursTextToday() {
      this.hours = this.formatHours(
        await this.$http
          .get(this.$static.metadata.apiUrl + "hours/today")
          .then(response => response.data)
      );
    },
    formatHours(hoursList) {
      return hoursList.map(pair => pair[0] + " - " + pair[1]).join(", ");
    },
    getDateObject(timeString) {
      var date = new Date();
      var time = timeString.split(":");
      date.setHours(time[0]);
      date.setMinutes(time[1]);
      date.setMilliseconds(time[2]);
      return date;
    },
    labIsOpen() {
      // this.hours starts off as an object, which doesn't have a split method
      if (!(typeof this.hours === "string")) {
        return false;
      }
      var labHours = this.hours.split(" - ");
      var openTime = this.getDateObject(labHours[0]);
      var closeTime = this.getDateObject(labHours[1]);
      var currentTime = new Date();
      return openTime <= currentTime && currentTime <= closeTime;
    },
    async setBlogPosts() {
      this.blogPosts = await this.$http
        .get(this.$static.metadata.apiUrl + "announce/blog")
        .then(response => response.data.slice(0, 2));
    },
    formatBlogTime(date) {
      const datetime = new Date(date);
      return datetime.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    },
    formatStaffInLab(staffList) {
      // We only want the first item, the name
      return staffList.map(staff => staff[0]).join(", ");
    },
    async setNumUsersInLab() {
      this.numUsersInLab = await this.$http
        .get(this.$static.metadata.apiUrl + "lab/num_users")
        .then(response => response.data);
    },
    async setStaffInLab() {
      this.staffInLab = await this.$http
        .get(this.$static.metadata.apiUrl + "lab/staff")
        .then(response => response.data);
    }
  }
};
</script>
