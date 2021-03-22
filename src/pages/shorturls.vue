<template>
  <Layout>
    <head>
      <title>ocf.io shorturls</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="m-3">
        <h1>Ocf.io Short Link Translations</h1>
        <table class="table">
          <ShortUrlTable />
        </table>
      </div>
    </body>
  </Layout>
</template>

<script>
import ShortUrlTable from "~/components/ShortUrlTable.vue";

export default {
  metaInfo: {
    title: "Short Links"
  },
  components: {
    ShortUrlTable
  }
};
</script>

<style scoped></style>
