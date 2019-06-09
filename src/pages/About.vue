<template>
  <Layout>
    <section class="section has-text-centered">
      <div class="container">
        <h1 class="title">
          About Us
        </h1>
        <h2 class="subtitle">
          Hehe hoho
        </h2>
      </div>
    </section>
    <section class="section has-text-centered">
      <div class="container">
        <h1 class="title">
          History
        </h1>
        <history />
      </div>
    </section>
  </Layout>
</template>

<script>
import History from "~/components/History.vue";
export default {
  metaInfo: {
    title: "About Us"
  },
  components: {
    History
  }
};
</script>
