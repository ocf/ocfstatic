<template>
  <Layout>
    {{ test }}
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Dashboard"
  },
  data() {
    return {
      test: null
    };
  },
  mounted() {
    this.auth_request_test();
  },
  methods: {
    async auth_request_test() {
      this.test = await this.$http
        .get("https://rejection.ocf.berkeley.edu:8000/")
        .then(response => response.data);
    }
  }
};
</script>
