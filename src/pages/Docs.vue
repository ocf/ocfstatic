<template>
  <Documentation>
    <section class="section">
      <div class="container">
        <h1 class="title is-1">
          Documentation
        </h1>
        <h2 class="subtitle is-4">
          Everything you need to know
          <br />
          <br />
          <g-link to="/shorturls">Short URLs</g-link>
          <br />
        </h2>
        <p>
          The OCF offers many services, free of charge, to the campus community.
        </p>
        <p>
          Have an idea for something else the OCF can provide? Feel free to send
          your suggestion by
          <a href="/docs/contact">contacting us</a>!
        </p>
      </div>
      <!-- import faq here -->
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
