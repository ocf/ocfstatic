<template>
  <Documentation :path="$page.doc.path">
    <section class="section">
      <div v-html="$page.doc.content" class="content" />
    </section>
  </Documentation>
</template>

<page-query>
query Doc($path: String!) {
  doc(path: $path) {
    title
    content
    path
    subtitles: headings(depth: h2) {
      value
      anchor
    }
  }
}
</page-query>

<script>
import Documentation from "~/layouts/Documentation.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.doc.title
    };
  },
  components: {
    Documentation
  }
};
</script>
