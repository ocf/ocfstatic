<template>
  <Documentation :path="$page.doc.path" :subtitles="$page.doc.subtitles">
    <section class="section">
      <!-- <nav class="breadcrumb">
        <ul>
          <li
            v-for="item in $page.doc.path.split('/').slice(1, -1)"
            :key="item"
          ><g-link to="">{{item}}</g-link></li>
          <li class="is-active"><a href="#" aria-current="page">{{this.$page.doc.title}}</a></li>
        </ul>
      </nav> -->
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
