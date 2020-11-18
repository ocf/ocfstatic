<template>
  <aside class="aside is-placed-left is-expanded">
    <div class="menu is-menu-main">
      <template v-for="(menuGroup, index) in menu">
        <p v-if="typeof menuGroup === 'string'" :key="index" class="menu-label">
          {{ menuGroup }}
        </p>
        <aside-menu-list
          v-else
          :key="index"
          :menu="menuGroup"
          @menu-click="menuClick"
        />
      </template>
    </div>
  </aside>
</template>

<script>
import AsideMenuList from "@/components/dashboard/AsideMenuList.vue";
export default {
  components: { AsideMenuList },
  data() {
    return {
      menu: [
        "General",
        [
          {
            to: "/dashboard/",
            icon: "desktop-mac",
            label: "Dashboard"
          },
          {
            to: "/dashboard/profile",
            label: "Profile",
            icon: "account-circle"
          },
          {
            to: "/vhost",
            label: "Virtual Hosting",
            icon: "square-edit-outline"
          }
        ],
        "Staff",
        [
          {
            to: "/tables",
            label: "Tables",
            icon: "table",
            updateMark: true
          },
          {
            to: "/forms",
            label: "Forms",
            icon: "square-edit-outline"
          }
        ]
      ]
    };
  },
  methods: {
    menuClick(item) {
      this.$emit("menu-click", item);
    }
  }
};
</script>
