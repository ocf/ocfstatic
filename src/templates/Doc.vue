<template>
  <Documentation :path="$page.doc.path" :subtitles="$page.doc.subtitles">
    <section class="section">
      <h1 class="title is-2">
        {{ $page.doc.title }}
      </h1>
      <h2 class="subtitle is-6">
        <a :href="editUrl">
          <b-icon class="icon" icon="pencil-outline" size="is-small" />
          Edit this page
        </a>
        -
        <a :href="historyUrl">
          <b-icon class="icon" icon="history" size="is-small" />
          Page History
        </a>
      </h2>
      <!-- <nav class="breadcrumb">
        <ul>
          <li
            v-for="item in $page.doc.path.split('/').slice(1, -1)"
            :key="item"
          ><g-link to="">{{item}}</g-link></li>
          <li class="is-active"><a href="#" aria-current="page">{{this.$page.doc.title}}</a></li>
        </ul>
      </nav> -->
      <div class="content" v-html="$page.doc.content" />
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

<static-query>
  query {
    metadata {
      githubUrl
    }
  }
</static-query>

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
  },
  computed: {
    editUrl() {
      return (
        this.$static.metadata.githubUrl +
        "/edit/master" +
        this.$page.doc.path.slice(0, -1) +
        ".md"
      );
    },
    historyUrl() {
      return (
        this.$static.metadata.githubUrl +
        "/commits/master" +
        this.$page.doc.path.slice(0, -1) +
        ".md"
      );
    }
  }
};
</script>
