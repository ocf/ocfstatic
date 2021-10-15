<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="content">
          <h1 class="title is-1">About Us</h1>
          <div class="columns is-2 is-variable">
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
              <h2 class="subtitle">Staff Meetings</h2>
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
    <div class="has-text-centered">
      <links />
    </div>

    <!-- Section: Image and content banners -->
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-half">
            <div class="columns is-centered is-vcentered">
              <div class="column is-three-quarters">
                <div class="content">
                  <h2 class="title is-2 has-text-centered">
                    Services We Provide
                  </h2>
                  <h3 class="subtitle is-5 has-text-centered">
                    Click for More Info
                  </h3>

                  <p
                    v-for="service in services"
                    class="button card box is-white is-medium is-hidden-touch"
                    :class="{
                      'active-card': activeService === service['index']
                    }"
                    @click="activeService = service['index']"
                  >
                    {{ service["name"] }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <div class="container is-hidden-desktop">
              <div
                class="columns is-3 is-mobile is-hidden-desktop is-vcentered"
                style="min-height:6.5em;"
              >
                <div class="column has-text-centered">
                  <button
                    class="button is-primary"
                    @click="activeService = Math.max(0, activeService - 1)"
                  >
                    &larr;
                  </button>
                </div>
                <div class="column is-one-half has-text-centered">
                  {{ services[activeService]["name"] }}
                </div>
                <div class="column has-text-centered">
                  <button
                    class="button is-primary"
                    @click="activeService = Math.min(2, activeService + 1)"
                  >
                    &rarr;
                  </button>
                </div>
              </div>
            </div>
            <transition name="fade" mode="out-in">
              <img
                :key="services[activeService]['image']"
                :src="services[activeService]['image']"
                data-toggle="tooltip"
                width="800"
                height="800"
                data-placement="bottom"
                title="goTop"
                alt=""
              />
            </transition>
            <div class="container" style="min-height:8em;">
              <div class="notification">
                <span v-html="services[activeService]['text']"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-half">
            <g-image
              src="~/assets/penguins_placeholder.jpg"
              width="800"
              height="600"
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
                <h4 class="title is-4 mt-4">
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

    <!-- Section: what you can do for us -->
    <section class="section has-background-primary">
      <div class="container">
        <h2 class="title is-2 has-text-white has-shadow">
          What You Can Do At the OCF
        </h2>
        <div class="columns is-vcentered">
          <div class="column is-one-fifth">
            <a class="box" href="https://linuxfoundation.org">
              <div class="content mt-4">
                <h3>Maintain our Servers</h3>
                <p><em>#linux-infra</em> channel on chat platforms</p>
                <p>
                  We host lots of powerful servers and you can help work on them
                  and learn Linux sysadmin skills in the process.
                </p>
              </div>
            </a>
          </div>
          <div class="column is-one-fifth">
            <a class="box" href="https://github.com/ocf/ocfstatic">
              <div class="content mt-4">
                <h3>Work on our website</h3>
                <p><em>#web</em> channel on chat platforms</p>
                <p>
                  Interested in web development? This website is still a work in
                  progress and we welcome staff to contribute to ongoing
                  changes.
                </p>
              </div>
            </a>
          </div>
          <div class="column is-one-fifth">
            <a class="box" style="height:100%;" href="https://www.debian.org">
              <div class="content mt-4">
                <h3>Plan Events</h3>
                <p><em>#internal-comm</em> channel on chat platforms</p>
                <p>
                  If you've got a knack for logistics (and/or like ordering
                  pizza) the Internal Committee is in charge of planning events
                  such as hack days, socials, and more.
                </p>
              </div>
            </a>
          </div>
          <div class="column is-one-fifth">
            <a class="box" style="height:100%;" href="https://www.python.org">
              <div class="content mt-4">
                <h3>Attend Staff Hours</h3>
                <p>
                  By attending staff hours you get to help people
                  <i>and</i> learn about OCF infrastructure in the process. To
                  get started, show up during
                  <a href="/staff-hours">staff hours</a> and shadow a veteran
                  staffer.
                </p>
              </div>
            </a>
          </div>
          <div class="column is-one-fifth">
            <a class="box" style="height:100%;" href="https://www.apache.org">
              <div class="content mt-4">
                <h3>Events</h3>
                <p>
                  We host industry and alumni events every semester. We've had
                  tech talks and recruiting events from big names such as
                  Facebook, Google, and CockroachDB--plus mock interviews and
                  resume workshops to help you get your dream job.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section of cards: Open source softwares we use -->

    <section class="section">
      <div class="container">
        <h2 class="title is-2">Technologies We Use</h2>
        <div class="columns is-vcentered">
          <div v-for="technology in technologies" class="column is-one-fifth">
            <a class="box" :href="technology['link']">
              <div class="columns is-multiline is-mobile">
                <div class="column is-one-quarter-mobile is-full-tablet">
                  <figure class="image is-square">
                    <g-image
                      :src="
                        require('!!assets-loader!~/assets/oss_icons/' +
                          technology.image)
                      "
                    />
                  </figure>
                </div>
                <div class="column is-three-quarters-mobile is-full-tablet">
                  <div class="content mt-4">
                    <h3>{{ technology["name"] }}</h3>
                    <p>
                      {{ technology["text"] }}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!--- Section: The timeline -->
    <div class="is-divider"></div>
    <section class="section">
      <div class="container">
        <h1 class="title is-2">
          History of the OCF
        </h1>
        <history />
      </div>
    </section>
  </Layout>
</template>

<script>
import History from "~/components/History.vue";
import Links from "~/components/Links.vue";
export default {
  metaInfo: {
    title: "About Us"
  },
  components: {
    History,
    Links
  },
  data() {
    return {
      activeService: 0,
      servicesImages: [
        "/assets/img/cloud.jpg",
        "/assets/img/unix-shell.jpg",
        "/assets/img/printer.jpg"
      ],
      servicesNames: [
        "Web & Email Hosting",
        "Unix Shell Accounts",
        "Free Printing for Members"
      ],
      services: [
        {
          index: 0,
          name: "Web & Email Hosting",
          image: "/assets/img/cloud.jpg",
          text:
            'We provide quality, free <a href="/docs/services/web">website and email hosting</a> for individuals and student organizations.'
        },
        {
          index: 1,
          name: "Tech Support",
          image: "/assets/img/techsupport.png",
          text:
            'We have <a href="/staff-hours">Staff Hours</a> to provide assistance with using our services.'
        },
        {
          index: 2,
          name: "Computer Lab + Printing",
          image: "/assets/img/lab_and_printing.png",
          text:
            'We operate a <a href="/docs/services/lab">lab</a> of 29 state-of-the-art workstations running Debian Linux and open-source software. We also provide <a href="/docs/services/lab/printing">free printing</a> to members!'
        }
      ],
      technologies: [
        {
          name: "Linux",
          image: "linux.png",
          text:
            "The world's most important open source project. Linux is the kernel that powers our servers, desktops, and more.",
          link: "https://linuxfoundation.org"
        },
        {
          name: "Debian",
          image: "debian.png",
          text:
            "An open-source, Linux-based operating system that powers our desktops and servers!",
          link: "https://debian.org"
        },
        {
          name: "XFCE Desktop",
          image: "xfce.svg",
          text:
            "A lightweight, efficient desktop environment that runs on top of Debian.",
          link: "https://xfce.org"
        },
        {
          name: "Python",
          image: "python.svg",
          text:
            "Python is open-source and modern programming language, and we use it under the hood of many of our services.",
          link: "https://python.org"
        },
        {
          name: "Apache",
          image: "apache.svg",
          text:
            "Apache creates some very useful pieces of open-source software, particularly for web hosting.",
          link: "https://apache.org"
        }
      ]
    };
  }
};
</script>
<style scoped>
p.card {
  transition: transform 0.6s;
  width: 100%;
}
.active-card {
  transform: translateX(1.75em);
}
.reverse-row-order {
  flex-direction: row-reverse;
}
#actions-bg {
  background-image: url("/assets/img/actions/event.jpg"),
    url("/assets/img/actions/webdev.jpg");
  background-repeat: no-repeat, no-repeat;
  background-position: left top, right bottom;
  background-size: 50%, 50%;
}
</style>
