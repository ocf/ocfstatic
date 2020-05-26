<template>
  <g-image
    :src="'https://www.gravatar.com/avatar/' + md5(email)"
    :alt="email"
  />
</template>

<script>
import md5 from "md5";
export default {
  props: {
    email: {
      type: String,
      required: true
    }
  },
  methods: {
    md5: md5
  }
};
</script>
