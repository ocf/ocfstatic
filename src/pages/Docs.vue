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
        </h2>
        <p>
          The OCF offers many services, free of charge, to the campus community.
        </p>
        <p>
          Have an idea for something else the OCF can provide? Feel free to send
          your suggestion by
          <a href="/docs/internal/contact">contacting us</a>!
        </p>
        <br />
        <div class="content">
          <h2>How to use these docs</h2>
          <p>
            All information on the services we provide is contained here.
            Navigate with the sidebar on the left to find what you're looking
            for and use the search bar on the top left to locate something
            directly.
          </p>
          <h2>
            <g-link to="/shorturls">
              Ocf.io Short Link Translations Table
            </g-link>
          </h2>
          <p>
            This table shows the full URL version of all short URLs the OCF
            uses.
          </p>
        </div>
      </div>
      <div class="FAQ">
        <br />
        <FAQ></FAQ>
      </div>
    </section>
  </Documentation>
</template>

<script>
import Documentation from "~/layouts/Documentation.vue";
import FAQ from "@/components/Faq.vue";

export default {
  metaInfo() {
    return {
      title: "Docs"
    };
  },
  components: {
    Documentation,
    FAQ
  }
};
</script>
