<template>
  <Layout :search="$static.docs.edges">
    <div class="columns is-marginless">
      <div class="column is-3 has-background-white-bis">
        <sidebar :items="tree" />
      </div>
      <div class="column">
        <slot />
      </div>
    </div>
  </Layout>
</template>

<static-query>
query Doc($page: Int) {
  docs: allDoc(page: $page) {
    edges {
      node {
        title
        path
        headings(depth: h1) {
          value
        }
        subtitles: headings(depth: h2) {
          value
          anchor
        }
      }
    }
  }
}
</static-query>

<script>
import Sidebar from "~/components/Sidebar.vue";
export default {
  components: { Sidebar },
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  computed: {
    tree() {
      let tree = {};
      for (let item of this.$static.docs.edges) {
        let currentPath = tree;
        for (let step of item.node.path.split("/").slice(2)) {
          if ("children" in currentPath === false) {
            currentPath.children = {};
          }
          if (step in currentPath.children === false) {
            currentPath.children[step] = {};
          }
          currentPath = currentPath.children[step];
        }
        currentPath.path = item.node.path;
        currentPath.title = item.node.title;
      }
      console.log(tree.children);
      return tree.children;
    }
  }
};
</script>
