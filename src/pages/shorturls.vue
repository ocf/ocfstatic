<template>
  <Layout>
    <div class="m-3">
      <h1 class="title is-1">Ocf.io Short Link Translations</h1>
      <table class="table">
        <ShortUrlTable />
      </table>
    </div>
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
