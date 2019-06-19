<template>
  <div class="section">
    <div class="level"></div>
    <aside class="menu">
      <ul class="menu-list">
        <li
          v-for="(item, index) in Object.values(items).filter(
            item => 'children' in item === false
          )"
          :key="index"
        >
          <g-link :to="item.path">{{ item.title }}</g-link>
        </li>
      </ul>
      <template
        v-for="[key1, value1] in Object.entries(items).filter(
          item => 'children' in item[1]
        )"
      >
        <p :key="'label-' + key1" class="menu-label">
          {{ key1 }}
        </p>
        <ul :key="'list-' + key1" class="menu-list">
          <li v-for="(value2, key2) in value1.children" :key="key2">
            <g-link :to="value2.path">{{ value2.title }}</g-link>
            <!-- <div class="level">
              <b-icon
                class="is-pulled-right"
                icon="chevron-down"
                size="is-small"
              />
            </div> -->
            <ul v-if="value2.children" class="menu-list">
              <li v-for="(value3, key3) in value2.children" :key="key3">
                <g-link :to="value3.path">{{ value3.title }}</g-link>
                <ul v-if="value3.children" class="menu-list">
                  <li v-for="(value4, key4) in value3.children" :key="key4">
                    <g-link :to="value4.path">{{ value4.title }}</g-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </template>
    </aside>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
