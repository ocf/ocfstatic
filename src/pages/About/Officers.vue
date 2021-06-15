<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1 has-text-centered">Meet Our Officers</h1>
        <div class="is-divider"></div>

        <h2 class="title is-2 has-text-centered">General Managers</h2>
        <p class="is-size-4 has-text-centered">
          General Managers handle the organizational activities of the OCF and
          lead the Board of Directors meetings. They are elected by the Board of
          Directors at the end of each semester.
        </p>
        <br />
        <OfficerCardSet
          role-wanted="General Manager"
          :cards="cards"
          :double-set="false"
        />
        <br />
        <div class="is-divider"></div>

        <h2 class="title is-2 has-text-centered">Site Managers</h2>
        <p class="is-size-4 has-text-centered">
          Site Managers lie behind the technical work involved in maintaining
          the OCF lab and other services. They are elected by the Board of
          Directors at the end of each semester.
        </p>
        <br />
        <OfficerCardSet
          role-wanted="Site Manager"
          :cards="cards"
          :double-set="false"
        />
        <br />
        <div class="is-divider"></div>
        <h2 class="title is-2 has-text-centered">Committee Heads</h2>
        <p class="is-size-4 has-text-centered">
          Committee heads guide the work of the various committees that function
          within the OCF.
        </p>
        <br />

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
        <div class="column">
          <h3 class="title is-3 has-text-centered">DeCal Heads</h3>
          <OfficerCardSet
            role-wanted="DeCal Head"
            :cards="cards"
            :double-set="false"
          />
        </div>
        <div class="is-divider"></div>

        <h2 class="title is-2 has-text-centered">Faculty Adviser</h2>
        <h4 class="title is-4 has-text-centered">
          <a href="https://www.cs.berkeley.edu/~bh">Dr. Brian Harvey</a>
        </h4>
        <div class="is-divider"></div>

        <h2 class="title is-2 has-text-centered">Board of Directors</h2>
        <p class="is-size-4 has-text-centered">
          See <a href="https://www.ocf.berkeley.edu/~staff/bod/">minutes</a> for
          attendance
        </p>
        <p class="is-size-4 has-text-centered">
          The Board of Directors is the decision-making entity behind the OCF's
          operations. The Board is appointed based on attendance at our
          <a href="/about">weekly meetings</a>
        </p>
        <div class="is-divider"></div>

        <h2 class="title is-2 has-text-centered">Past Officers</h2>
        <b-collapse
          class="card has-background-light"
          animation="slide"
          :open="false"
        >
          <template #trigger="props">
            <div class="card-header" role="button">
              <p class="card-header-title">
                View Past Officers
              </p>
              <a class="card-header-icon has-text-black">
                <b-icon :icon="props.open ? 'menu-up' : 'menu-down'"> </b-icon>
              </a>
            </div>
          </template>

          <div class="card-content">
            <b-collapse
              class="mb-4"
              animation="slide"
              v-for="(v, index) of pastOfficers"
              :key="index"
            >
              <template #trigger="props">
                <a class="has-text-black">
                  <b-icon :icon="props.open ? 'menu-up' : 'menu-down'"></b-icon>
                  {{ v.term }}
                </a>
              </template>

              <b-table class="mt-2" :data="v.table">
                <b-table-column
                  field="gm"
                  width="50%"
                  label="General Managers"
                  v-slot="props"
                >
                  {{
                    (props.row.gm &&
                      props.row.gm.name + " @" + props.row.gm.handle) ||
                      ""
                  }}
                </b-table-column>
                <b-table-column field="sm" label="Site Managers" v-slot="props">
                  {{
                    (props.row.sm &&
                      props.row.sm.name + " @" + props.row.sm.handle) ||
                      ""
                  }}
                </b-table-column>
              </b-table>
            </b-collapse>
          </div>
        </b-collapse>
      </div>
    </section>
  </Layout>
</template>

<script>
import OfficerCardSet from "../../components/OfficerCardSet";
import PastOfficersData from "@/assets/officers-data/past-officers.json";

export default {
  metaInfo: {
    title: "Officers"
  },
  components: {
    OfficerCardSet
  },
  data() {
    return {
      cards: [],
      pastOfficers: []
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

    for (var i = 0; i < PastOfficersData.pastOfficers.length; i++) {
      var data = PastOfficersData.pastOfficers[i];
      this.pastOfficers[i] = { term: data.term, table: [] };
      var len = Math.max(data.gms.length, data.sms.length);
      for (var k = 0; k < len; k++) {
        this.pastOfficers[i].table[k] = {
          gm: data.gms[k] || "",
          sm: data.sms[k] || ""
        };
      }
    }
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
