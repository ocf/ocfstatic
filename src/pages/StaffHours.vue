<template>
  <Layout>
    <section class="section has-text-centered">
      <div class="container">
        <h1 class="title">
          Staff Hours
        </h1>
        <h2 class="subtitle">
          Have questions or need help? Drop by the lab for one-on-one help from
          a staffer!
        </h2>
      </div>
    </section>
    <section class="container">
      <calendar />
    </section>
  </Layout>
</template>

<script>
import Calendar from "~/components/Calendar.vue";

export default {
  metaInfo: {
    title: "Staff Hours"
  },
  components: {
    Calendar
  }
};
</script>
