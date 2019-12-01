<template>
  <div class="container">
    <div v-if="path" class="columns">
      <a :href="editUrl" class="column has-text-centered">
        <b-icon class="icon" icon="pencil-outline" size="is-small" />
        <small>Edit this page</small>
      </a>
      <a :href="historyUrl" class="column has-text-centered">
        <b-icon class="icon" icon="history" size="is-small" />
        <small>Page History</small>
      </a>
    </div>
    <!-- <ul class="menu-list">
      <li v-for="(subtitle, index) in subtitles" :key="index">
        <g-link :to="path + subtitle.anchor"><small>{{subtitle.value}}</small></g-link>
      </li>
    </ul> -->
    <aside class="menu">
      <ul class="menu-list">
        <li
          v-for="(item, index) in Object.values(items).filter(
            item => 'children' in item === false
          )"
          :key="index"
        >
          <g-link :class="{ 'is-active': path === item.path }" :to="item.path"
            >{{ item.title }}
          </g-link>
        </li>
      </ul>
      <template
        v-for="[key, value] in Object.entries(items).filter(
          item => 'children' in item[1]
        )"
      >
        <p :key="'label-' + key" class="menu-label">
          {{ key }}
        </p>
        <sidebar-item
          :key="'list-' + key"
          :items="value.children"
          :path="path"
        />
      </template>
    </aside>
  </div>
</template>

<static-query>
  query {
    metadata {
      docsUrl
    }
  }
</static-query>

<script>
import SidebarItem from "~/components/SidebarItem";

export default {
  components: {
    SidebarItem
  },
  props: {
    items: {
      type: Object,
      default() {
        return {};
      }
    },
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
    docPath() {
      return this.path
        .split("/")
        .slice(2)
        .join("/");
    },
    editUrl() {
      return (
        this.$static.metadata.docsUrl + "/edit/master/" + this.docPath + ".md"
      );
    },
    historyUrl() {
      return (
        this.$static.metadata.docsUrl +
        "/commits/master/" +
        this.docPath +
        ".md"
      );
    }
  }
};
</script>

<style scoped>
.icon {
  margin-right: 2px;
}
</style>
