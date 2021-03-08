<template>
  <Layout>
    <template #navItem>
      <b-autocomplete
        v-model="searchTerm"
        :data="searchResults"
        class="navbar-item search"
        placeholder="Search docs"
        icon="magnify"
        keep-first
        field="title"
        @select="item => $router.push(item.path)"
      >
        <template #empty>
          No results found
        </template>
        <template slot-scope="props">
          {{ props.option.title }}
          <br />
          <small>
            {{ props.option.path }}
          </small>
        </template>
      </b-autocomplete>
    </template>

    <div class="columns is-marginless reverse-row-order">
      <div class="column">
        <slot />
      </div>
      <div class="column is-3 has-background-main-ter">
        <sidebar :items="tree" :path="path" :subtitles="subtitles" />
      </div>
    </div>
  </Layout>
</template>

<static-query>
query {
  docs: allDoc(sortBy: "path", order: ASC) {
    edges {
      node {
        title
        path
      }
    }
  }
}
</static-query>

<script>
import Search from "gridsome-plugin-flexsearch/SearchMixin";
import Sidebar from "~/components/Sidebar.vue";
export default {
  components: { Sidebar },
  // Normally don't like mixins, but this is simple enough.
  // searchTerm -> searchResults
  mixins: [Search],
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
