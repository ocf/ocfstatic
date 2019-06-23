<template>
  <Layout>
    <template v-slot:navItem>
      <b-autocomplete
        v-model="search"
        :data="searchedItems"
        @select="item => $router.push(item.node.path)"
        class="navbar-item search"
        placeholder="Search docs"
        icon="magnify"
        keep-first
        field="node.title"
      >
        <template v-slot:empty
          >No results found</template
        >
      </b-autocomplete>
    </template>

    <div class="columns is-marginless reverse-row-order">
      <div class="column">
        <slot />
      </div>
      <div class="column is-3 has-background-white-bis">
        <sidebar :items="tree" :path="path" />
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
  data() {
    return {
      search: ""
    };
  },
  computed: {
    searchedItems() {
      return this.$static.docs.edges.filter(item => {
        return item.node.title
          .toLowerCase()
          .includes(this.search.toLowerCase());
        // || item.node.subtitles.value
        // .toLowerCase()
        // .includes(this.search.toLowerCase())
      });
    },
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
</style>
