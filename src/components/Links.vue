<template>
  <div>
    <div class="is-divider custom" data-content="Links" />
    <div class="block ">
      <a href="https://irc.ocf.berkeley.edu/">
        <hashtag class="item" />
      </a>
      <a href="https://fco.slack.com">
        <slack class="item" />
      </a>
      <a href="https://ocf.io/discord">
        <discord class="item" />
      </a>
      <a href="https://mastodon.ocf.berkeley.edu">
        <mastodon class="item" />
      </a>
      <a href="https://callink.berkeley.edu/organization/ocf">
        <g-image class="item" src="~/assets/callink.png" />
      </a>
      <a href="https://github.com/ocf">
        <github class="item" />
      </a>
      <a href="https://www.facebook.com/ucbocf">
        <facebook class="item" />
      </a>
      <a href="https://matrix.ocf.io">
        <matrix class="item" />
      </a>
    </div>
  </div>
</template>

<script>
import Slack from "~/assets/svg/slack.svg";
import Github from "~/assets/svg/github.svg";
import Mastodon from "~/assets/svg/mastodon.svg";
import Hashtag from "~/assets/svg/hashtag.svg";
import Discord from "~/assets/svg/discord.svg";
import Facebook from "~/assets/svg/facebook.svg";
import Matrix from "~/assets/svg/matrix.svg";

export default {
  components: {
    Slack,
    Github,
    Mastodon,
    Hashtag,
    Discord,
    Facebook,
    Matrix
  }
};
</script>

<style scoped>
.item {
  width: 45px;
  height: 45px;
  margin: 5px;
}
.custom {
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
}
</style>
