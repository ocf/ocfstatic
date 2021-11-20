<template>
  <Layout>
    <section class="section pb-0">
      <nav class="navbar">
        <div class="navbar-brand">
          <p class="navbar-item"><b>OCF Stats</b></p>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <a v-for="item in stats" class="navbar-item" :href="item.route">{{
              item.name
            }}</a>
          </div>
        </div>
      </nav>
    </section>
    <slot />
  </Layout>
</template>

<script>
import Search from "gridsome-plugin-flexsearch/SearchMixin";
export default {
  components: {},
  // Normally don't like mixins, but this is simple enough.
  // searchTerm -> searchResults

  props: {
    path: {
      type: String,
      default: ""
    },
    subtitles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      stats: [
        { name: "Summary", route: "/stats" },
        { name: "Printing", route: "/stats/printing" }
      ]
    };
  },

  computed: {
    tree() {
      return this.generateTree();
    }
  },
  methods: {
    generateTree() {
      let tree = [];
      for (let item of this.$static.docs.edges) {
        let currentPath = tree;
        for (let step of item.node.path.split("/").slice(2, -1)) {
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
      return tree.children;
    }
  }
};
</script>

<style scoped>
.search >>> .input {
  box-shadow: none;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  flex-shrink: 3;
}
.reverse-row-order {
  flex-direction: row-reverse;
}
.column {
  min-width: 0;
}
</style>
