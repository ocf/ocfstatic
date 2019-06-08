<template>
  <Layout>
    <div class="container">
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
      <history />
    </div>
  </Layout>
</template>

<script>
import History from "~/components/History.vue";
export default {
  metaInfo: {
    title: "About Us"
  },
  components: {
    History
  }
};
</script>
