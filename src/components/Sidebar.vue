<template>
  <div class="container">
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
          <g-link exact-active-class="is-active" :to="item.path"
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
          :clicked="clicked"
          :path="path"
          @toggle-chevron="toggleChevron"
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
    },
    subtitles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      clicked: []
    };
  },
  computed: {
    docPath() {
      return this.path
        .split("/")
        .slice(2)
        .join("/");
    }
  },
  methods: {
    toggleChevron(value) {
      this.clicked = this.clicked.includes(value.path)
        ? this.clicked.filter(v => v !== value.path)
        : [...this.clicked, value.path];
    }
  }
};
</script>
