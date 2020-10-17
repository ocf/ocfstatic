<template>
  <ul class="menu-list">
    <li v-for="(value, key) in items" :key="key">
      <g-link exact-active-class="is-active" :to="value.path">
        <div class="level">
          {{ value.title }}
          <b-icon
            v-if="value.children"
            :icon="path.includes(value.path) ? 'chevron-down' : 'chevron-left'"
            class="is-pulled-right"
            size="is-small"
          />
        </div>
      </g-link>
      <sidebar-item
        v-if="value.children && path.includes(value.path)"
        :items="value.children"
        :path="path"
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
