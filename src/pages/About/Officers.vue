<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1 has-text-centered">Meet Our Officers</h1>
        <div class="is-divider"></div>
        <h2 class="title is-2 has-text-centered">Faculty Adviser</h2>
        <h4 class="title is-4 has-text-centered">
          <a href="https://www.cs.berkeley.edu/~bh">Dr. Brian Harvey</a>
        </h4>

        <h2 class="title is-2 has-text-centered">Board of Directors</h2>
        <h4 class="title is-4 has-text-centered">
          See <a href="https://www.ocf.berkeley.edu/~staff/bod/">minutes</a> for
          attendance
        </h4>
        <h4 class="title is-4 has-text-centered">
          The Board of Directors is the decision-making entity behind the OCF's
          operations. The Board is appointed based on attendance at our
          <a href="/about">weekly meetings</a>
        </h4>
        <div class="is-divider"></div>

        <h2 class="title is-2 has-text-centered">General Managers</h2>
        <h4 class="title is-4 has-text-centered">
          General Managers handle the organizational activities of the OCF and
          lead the Board of Directors meetings. They are elected by the Board of
          Directors at the end of each semester.
        </h4>
        <OfficerCardSet
          role-wanted="General Manager"
          :cards="cards"
          :double-set="false"
        />
        <br />
        <div class="is-divider"></div>

        <h2 class="title is-2 has-text-centered">Site Managers</h2>
        <h4 class="title is-4 has-text-centered">
          Site Managers lie behind the technical work involved in maintaining
          the OCF lab and other services. They are elected by the Board of
          Directors at the end of each semester.
        </h4>
        <OfficerCardSet
          role-wanted="Site Manager"
          :cards="cards"
          :double-set="false"
        />
        <br />
        <div class="is-divider"></div>
        <h2 class="title is-2 has-text-centered">Committee Heads</h2>
        <h4 class="title is-4 has-text-centered">
          Committee heads guide the work of the various committees that function
          within the OCF.
        </h4>

        <div class="columns is-centered">
          <div class="column">
            <h3 class="title is-3 has-text-centered">Internal Heads</h3>
            <OfficerCardSet
              role-wanted="Internal Head"
              :cards="cards"
              :double-set="true"
            />
          </div>
          <div class="column">
            <h3 class="title is-3 has-text-centered">
              Industry and Alumni Relations Heads
            </h3>
            <OfficerCardSet
              role-wanted="Industry and Alumni Relations Head"
              :cards="cards"
              :double-set="true"
            />
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column">
            <h3 class="title is-3 has-text-centered">Finance Heads</h3>
            <OfficerCardSet
              role-wanted="Finance Head"
              :cards="cards"
              :double-set="true"
            />
          </div>
          <div class="column">
            <h3 class="title is-3 has-text-centered">Communications Heads</h3>
            <OfficerCardSet
              role-wanted="Communications Head"
              :cards="cards"
              :double-set="true"
            />
          </div>
        </div>
        <h3 class="title is-3 has-text-centered">DeCal Heads</h3>
        <OfficerCardSet
          role-wanted="DeCal Head"
          :cards="cards"
          :double-set="false"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
import OfficerCardSet from "../../components/OfficerCardSet";

export default {
  metaInfo: {
    title: "Officers"
  },
  components: {
    OfficerCardSet
  },
  data() {
    return {
      cards: []
    };
  },
  created() {
    this.cards = [
      {
        id: 1,
        name: "Kevin Mo",
        handle: "kmo",
        role: ["General Manager"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 2,
        name: "Saurabh Narain ",
        handle: "snarain",
        role: ["General Manager"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 3,
        name: "Nikhil Jha  ",
        handle: "njha",
        role: ["Site Manager"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 4,
        name: "Frank Dai",
        handle: "fydai",
        role: ["Site Manager"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 5,
        name: "Ja Wattanawong",
        handle: "jaw",
        role: ["Internal Head"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 6,
        name: "Ronit Nath",
        handle: "ronitnath",
        role: ["Internal Head", "Finance Head", "Communications Head"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 7,
        name: "Ryan-chan",
        handle: "rrchan",
        role: ["Industry and Alumni Relations Head"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 8,
        name: "Andrew Aikawa",
        handle: "asai",
        role: ["Industry and Alumni Relations Head"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 9,
        name: "Nicholas Berberi",
        handle: "ncberberi",
        role: ["Finance Head"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 10,
        name: "Ben Cuan",
        handle: "bencuan",
        role: ["Communications Head", "DeCal Head"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 11,
        name: "Leo Huang",
        handle: "hexhu",
        role: ["DeCal Head"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      }
    ];
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
</style>
