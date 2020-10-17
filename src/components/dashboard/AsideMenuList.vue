<template>
  <ul class="menu-list">
    <li v-for="(item, index) in menu" :key="index" @menu-click="menuClick">
      <g-link
        :to="item.to"
        :class="{ 'has-icon': !!item.icon }"
        exact-active-class="is-active"
        @click="menuClick"
      >
        <b-icon v-if="item.icon" :icon="item.icon" custom-size="default" />
        <span v-if="item.label" :class="{ 'menu-item-label': !!item.icon }">{{
          item.label
        }}</span>
      </g-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AsideMenuList",
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    menuClick(item) {
      this.$emit("menu-click", item);
    }
  }
};
</script>
