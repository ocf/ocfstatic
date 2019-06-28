<template>
  <Documentation>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">
          Documentation
        </h1>
        <h2 class="subtitle is-4">
          Everything you need to know
        </h2>
      </div>
    </section>
  </Documentation>
</template>

<script>
import Documentation from "~/layouts/Documentation.vue";

export default {
  metaInfo() {
    return {
      title: "Docs"
    };
  },
  components: {
    Documentation
  }
};
</script>
