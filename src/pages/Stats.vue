<template>
  <Layout>
    <section class="section has-text-centered stats-container">
      <iframe
        src="https://metabase.ocf.berkeley.edu/public/dashboard/ece8bcde-16d0-42dd-bd66-e8e30f256837"
        frameborder="0"
        width="100%"
        height="100%"
        scrolling="no"
        allowtransparency
      />
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Stats"
  }
};
</script>

<style scoped>
  .stats-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 0;
    width: 100%;
    height: 350vh;
  }
</style>
