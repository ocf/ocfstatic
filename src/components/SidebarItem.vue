<template>
  <ul class="menu-list">
    <li v-for="(value, key) in items" :key="key">
      <g-link exact-active-class="is-active" :to="value.path">
        <div class="level">
          {{ value.title }}
          <b-icon
            v-if="value.children"
            :icon="
              clicked.includes(value.path) ^ path.includes(value.path)
                ? 'chevron-down'
                : 'chevron-left'
            "
            class="is-pulled-right"
            size="is-small"
            href="#"
            @click.native="toggleChevron(value, $event)"
          />
        </div>
      </g-link>
      <sidebar-item
        v-if="
          value.children &&
            clicked.includes(value.path) ^ path.includes(value.path)
        "
        :items="value.children"
        :path="path"
        :clicked="clicked"
        @toggle-chevron="toggleChevron"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    items: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    clicked: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toggleChevron(value, event) {
      if (event) {
        event.preventDefault();
      }
      this.$emit("toggle-chevron", value);
    }
  }
};
</script>

<style scope>
/* To properly stack nested menus nicely */
.menu-list li ul {
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
