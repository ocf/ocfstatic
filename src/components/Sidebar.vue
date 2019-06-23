<template>
  <div class="container">
    <div v-if="path" class="columns">
      <a :href="editUrl" class="column has-text-centered">
        <b-icon class="icon" icon="pencil-outline" size="is-small" />
        <small>Edit this page</small>
      </a>
      <a :href="historyUrl" class="column wrapper">
        <b-icon class="icon" icon="history" size="is-small" />
        <small>Page History</small>
      </a>
    </div>
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
          :items="value.children"
          :path="path"
          :key="'list-' + key"
        />
      </template>
    </aside>
  </div>
</template>

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
    }
  },
  data() {
    return {
      docsUrl: "https://github.com/BernardZhao/docs"
    };
  },
  computed: {
    docPath() {
      return this.path
        .split("/")
        .slice(2)
        .join("/");
    },
    editUrl() {
      return this.docsUrl + "/edit/master/" + this.docPath + ".md";
    },
    historyUrl() {
      return this.docsUrl + "/commits/master/" + this.docPath + ".md";
    }
  }
};
</script>

<style scoped>
.icon {
  margin-right: 2px;
}
</style>
