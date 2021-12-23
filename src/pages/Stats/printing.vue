<template>
  <Stats>
    <section class="section">
      <div class="tile is-ancestor is-vertical">
        <div class="tile">
          <div class="tile is-parent is-6">
            <div class="tile is-child box">
              <h1 class="title is-3 has-text-centered">Printing Graphs</h1>
              <img
                class=""
                src="https://www.ocf.berkeley.edu/stats/printing/daily-job/graph"
              />
              <img
                class=""
                src="https://www.ocf.berkeley.edu/stats/printing/semester-histogram/graph"
              />
            </div>
          </div>
          <div class="tile">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3 class="title is-3 has-text-centered">Toner Usage</h3>
                <table class="table">
                  <tr>
                    <th>Printer</th>
                    <th>Toner Cartridges This Semester</th>
                  </tr>
                  <tr v-for="printer in tonerChanges">
                    <td>{{ printer[0] }}</td>
                    <td>{{ printer[1] }}</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3 class="title is-3 has-text-centered">Trees Killed</h3>
                <table class="table">
                  <tr>
                    <th>Printer</th>
                    <th>Trees killed over lifetime*</th>
                  </tr>
                  <tr v-for="dict in lifetimeData">
                    <td>{{ dict.name }}</td>
                    <td>
                      {{
                        Math.floor(dict.data[dict.data.length - 1][1] / 8333)
                      }}
                    </td>
                  </tr>
                </table>

                <p>*Assuming each tree yields ~8333 pages.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <h3 class="title is-3 has-text-centered">
              Pages Printed Per Day
            </h3>
            <table class="table is-fullwidth">
              <tr>
                <th>Date</th>
                <th>Total</th>
                <th v-for="printer in activePrinters" :key="printer">
                  {{ printer }}
                </th>
              </tr>

              <tr v-for="day in Object.keys(pagesPerDay)">
                <td>{{ day }}</td>
                <td>{{ pagesPerDay[day]["total"] }}</td>
                <td v-for="printer in activePrinters" :key="printer">
                  {{ pagesPerDay[day][printer] }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  </Stats>
</template>

<script>
import Stats from "~/layouts/Stats.vue";

export default {
  metaInfo() {
    return {
      title: "Printing Stats"
    };
  },
  components: {
    Stats
  },
  data() {
    return {
      pagesPerDay: [],
      activePrinters: [],
      tonerUsage: [],
      lifetimeData: [],
      tonerChanges: []
    };
  },
  methods: {
    async setPagesPerDay() {
      this.pagesPerDay = await this.$http
        .get(this.$static.metadata.apiUrl + "printing/pages_per_day")
        .then(response => response.data);
    },
    async setActivePrinters() {
      this.activePrinters = await this.$http
        .get(this.$static.metadata.apiUrl + "printing/active_printers")
        .then(response => response.data);
    },
    async setLifetimeData() {
      this.lifetimeData = await this.$http
        .get(this.$static.metadata.apiUrl + "printing/lifetime_data")
        .then(response => response.data);
    },
    async setTonerChanges() {
      this.tonerChanges = await this.$http
        .get(this.$static.metadata.apiUrl + "printing/toner_changes")
        .then(response => response.data);
    }
  },
  mounted() {
    this.setPagesPerDay();
    this.setActivePrinters();
    this.setLifetimeData();
    this.setTonerChanges();
  }
};
</script>
