<template>
  <div class="card">
    <header v-if="title" class="card-header">
      <p class="card-header-title">
        <b-icon v-if="icon" :icon="icon" custom-size="default" />
        {{ title }}
      </p>
    </header>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  }
};
</script>
