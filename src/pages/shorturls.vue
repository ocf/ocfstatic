<template>
  <Layout>
    <head>
      <title>ocf.io shorturls</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <div class="m-3">
        <h1>ocf.io short link translations</h1>
        <h5><a href="https://www.ocf.berkeley.edu/docs/">Documentation</a></h5>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Short (ocf.io)</th>
              <th scope="col">Long</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </body>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Short Links"
  }
};
</script>

<style scoped></style>
