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
        <template v-slot:empty>
          No results found
        </template>
        <template slot-scope="props">
          {{ props.option.node.title }}
          <br />
          <small>
            {{ props.option.node.path }}
          </small>
        </template>
      </b-autocomplete>
    </template>

    <div class="columns is-marginless reverse-row-order">
      <div class="column">
        <slot />
      </div>
      <div class="column is-3 has-background-white-bis">
        <sidebar :items="tree" :path="path" :subtitles="subtitles" />
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
        content
        path
      }
    }
  }
}
</static-query>

<script>
import FlexSearch from "flexsearch";
import Sidebar from "~/components/Sidebar.vue";
export default {
  components: { Sidebar },
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
      search: ""
    };
  },
  computed: {
    searchedItems() {
      return this.index.search({ query: this.search });
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
  },
  created() {
    this.index = new FlexSearch({
      doc: {
        id: "id",
        field: ["node:title", "node:content"]
      }
    });
    this.$static.docs.edges.forEach((element, index) => {
      element.id = index;
    });
    this.index.add(this.$static.docs.edges);
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
