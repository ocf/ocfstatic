<template>
  <Layout>
    <div class="container has-text-centered">
      <div class="notification">
        The requested URL was not found.
      </div>
      <g-image
        src="~/assets/nikitpenguin.png"
        fit="inside"
        width="750px"
        quality="75"
      />
      <div>
        Go
        <a href="javascript:history.back();" class="is-link">
          back
        </a>
        or visit our
        <g-link to="/">
          home
        </g-link>
        page.
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "404"
  }
};
</script>
