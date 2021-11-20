<template>
  <Stats>
    <section class="section">
      <div class="tile is-ancestor is-vertical">
        <div class="tile">
          <div class="tile is-parent is-6">
            <div class="tile is-child box">
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
          <div class="tile is-vertical">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3 class="title is-3 has-text-centered">Toner Usage</h3>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3 class="title is-3 has-text-centered">
                  Pages Printed Per Day
                </h3>
              </div>
            </div>
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
  }
};
</script>
