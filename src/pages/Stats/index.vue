<template>
  <Stats>
    <section class="section">
      <div class="tile is-ancestor is-vertical">
        <div class="tile">
          <div class="tile is-parent is-6">
            <div class="tile is-child box">
              <h1 class="title is-3 has-text-centered">Lab Usage Graphs</h1>
              <img
                class=""
                src="https://www.ocf.berkeley.edu/stats/daily-graph/graph"
              />
              <img
                class=""
                src="https://www.ocf.berkeley.edu/stats/session-count/graph"
              />
            </div>
          </div>

          <div class="tile is-vertical">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3 class="title is-3 has-text-centered">Currently in Lab</h3>
                <p>
                  There are currently {{ numUsersInLab }} people in the lab,
                  including {{ staffInLab.length }} staff:
                </p>
                <p>{{ formatStaffInLab(staffInLab) }}</p>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h1 class="title is-3 has-text-centered">Printers</h1>
                <div v-for="printer in printers" :key="printer[0]">
                  <p class="subtitle is-5 mb-0 mt-5">{{ printer[0] }}</p>
                  <div class="columns is-2 is-mobile is-vcentered">
                    <div class="column is-one-third pb-0">
                      Toner
                    </div>
                    <div class="column pb-0">
                      <progress
                        v-if="printer[1]"
                        class="progress"
                        :value="printer[1][0]"
                        :max="printer[1][1]"
                        >{{ printer[1][0] }}</progress
                      >
                      <p v-else><i>Unable to read</i></p>
                    </div>
                  </div>
                  <div class="columns is-2 is-mobile is-vcentered">
                    <div class="column is-one-third pb-0">
                      Maint. Kit
                    </div>
                    <div class="column pb-0">
                      <progress
                        v-if="printer[2]"
                        class="progress is-primary"
                        :value="printer[2][0]"
                        :max="printer[2][1]"
                        >{{ printer[2][0] }}</progress
                      >
                      <p v-else><i>Unable to read</i></p>
                    </div>
                  </div>
                  <div class="is-divider"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <h1 class="title is-3 has-text-centered">Mirroring</h1>
              <div
                v-for="mirror in mirrorsShowcase"
                :key="mirror[0]"
                class="columns is-mobile is-vcentered"
              >
                <div class="column is-one-quarter">
                  <figure class="image is-square">
                    <g-image
                      :src="
                        require('!!assets-loader!~/assets/oss_icons/' +
                          mirror[0] +
                          '.png')
                      "
                    />
                  </figure>
                </div>
                <div class="column">
                  <b>{{ mirror[0] }} </b><br />{{ mirror[1] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <h3 class="title is-3 has-text-centered">
              Today's Lab Utilization
            </h3>
            <table id="todays-lab-utilization" class="table is-fullwidth">
              <thead>
                <tr>
                  <th>Desktop</th>
                  <th>Idle (min)</th>
                  <th>Busy (min)</th>
                  <th>% Busy</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="profile in desktopUsage" :key="profile['hostname']">
                  <td>{{ profile["hostname"] }}</td>
                  <td>{{ profile["minutes_idle"] }}</td>
                  <td>{{ profile["minutes_busy"] }}</td>
                  <td v-if="profile['minutes_busy'] === 0">0%</td>
                  <td v-else>{{ profile["percent"] }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </Stats>
</template>
<static-query>
query {
  metadata {
    apiUrl
  }
}
</static-query>
<script>
import Stats from "~/layouts/Stats.vue";
export default {
  components: { Stats },
  data() {
    return {
      hours: [],
      blogPosts: [],
      numUsersInLab: null,
      staffInLab: [],
      printers: [],
      statsDisplay: {},
      desktopUsage: [],
      mirrorsShowcase: []
    };
  },
  mounted() {
    this.setNumUsersInLab();
    this.setStaffInLab();
    this.setPrinters();
    this.setDesktopUsage();
    this.setMirrorsShowcase();
  },
  metaInfo: {
    title: "Stats"
  },
  methods: {
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
    },
    async setPrinters() {
      this.printers = await this.$http
        .get("http://supernova.ocf.berkeley.edu:8401/api/lab/printers_summary")
        .then(response => response.data);
    },
    async setDesktopUsage() {
      this.desktopUsage = await this.$http
        .get("http://supernova.ocf.berkeley.edu:8401/api/lab/desktop_usage")
        .then(response => response.data);
    },
    async setMirrorsShowcase() {
      this.mirrorsShowcase = await this.$http
        .get("http://supernova.ocf.berkeley.edu:8401/api/lab/mirrors_showcase")
        .then(response => response.data);
    },
    getTodayDate() {
      var date = new Date();

      return date;
    }
  }
};
</script>

<style scoped>
.stats-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  width: 100%;
}
</style>
