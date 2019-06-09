<template>
  <Layout>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Staff Hours
          </h1>
          <h2 class="subtitle">
            Have questions or need help? Drop by the lab for one-on-one help
            from a staffer!
          </h2>
        </div>
      </div>
    </section>

    <section>
      <ClientOnly>
        <vue-cal
          style="height: 700px"
          default-view="week"
          :disable-views="['years', 'year', 'month']"
          :time-from="8 * 60"
          :time-to="20 * 60"
          :time-step="30"
          hide-weekends
        />
      </ClientOnly>
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
