<template>
  <Layout>
    <section class="section">
      <div class="container">
        <h1 class="title is-1 has-text-centered">Meet Our Staff</h1>
        <div class="is-divider"></div>

        <h2 class="title is-2 has-text-centered">People</h2>
        <p class="is-size-4 has-text-centered">
          Here are some of the volunteer staff who make the OCF go round!
        </p>
        <br />
        <OfficerCardSet
          role-wanted="Staff"
          :cards="cards"
          :double-set="false"
        />
        <br />
        <div class="is-divider"></div>

        <OfficerCardSet
          role-wanted="Henlo"
          :cards="cards"
          :double-set="false"
        />
        <br />
        <div class="is-divider"></div>

        <OfficerCardSet
          role-wanted="ligma"
          :cards="cards"
          :double-set="false"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
import OfficerCardSet from "../../components/OfficerCardSet";

export default {
  metaInfo: {
    title: "Officers"
  },
  components: {
    OfficerCardSet
  },
  data() {
    return {
      cards: []
    };
  },
  created() {
    this.cards = [
      {
        id: 1,
        name: "Kevin Mo",
        handle: "kmo",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 2,
        name: "Saurabh Narain ",
        handle: "snarain",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 3,
        name: "Nikhil Jha  ",
        handle: "njha",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 4,
        name: "Frank Dai",
        handle: "fydai",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 5,
        name: "Ja Wattanawong",
        handle: "jaw",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 6,
        name: "Nikhil Jha",
        handle: "njha",
        role: ["Henlo"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 7,
        name: "Frank Dai",
        handle: "fydai",
        role: ["Henlo"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 8,
        name: "Ja Wattanawong",
        handle: "jaw",
        role: ["Henlo"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 9,
        name: "One person",
        handle: "jsdx",
        role: ["Henlo"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 10,
        name: "Another person",
        handle: "sdfsdf",
        role: ["Henlo"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
{
        id: 2147483647,
        name: "Nikhil Ograin",
        handle: "ncograin",
        role: ["sudo rm -rf /"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        id: 1,
        name: "Lance Mathias",
        handle: "lmathias",
        role: ["ligma"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      }
    ];
  }
};
</script>
<style scoped>
p.card {
  transition: transform 0.6s;
  width: 100%;
}
.active-card {
  transform: translateX(1.75em);
}
.reverse-row-order {
  flex-direction: row-reverse;
}
</style>
