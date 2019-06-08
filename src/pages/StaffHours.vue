<template>
  <Layout>
    <section class="section">
      Staff Hours Have questions or need help? Drop by the lab for one-on-one
      help from a staffer!
    </section>
    <section>
      <vue-cal
        style="height: 700px"
        default-view="week"
        :disable-views="['years', 'year', 'month']"
        :time-from="8 * 60"
        :time-to="20 * 60"
        :time-step="30"
        hide-weekends
      />
    </section>
  </Layout>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  metaInfo: {
    title: "Staff Hours"
  },
  components: { VueCal }
};
</script>
