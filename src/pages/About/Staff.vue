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

        <div class="staffGrid">
          <div v-for="staffItem in cards" :key="staffItem.handle">
            <StaffCard :staff-item="staffItem" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import StaffCard from "../../components/StaffCard";

export default {
  metaInfo: {
    title: "Meet Our Staff"
  },
  components: {
    StaffCard
  },
  created() {
    this.cards = [
      {
        name: "Kevin Mo",
        handle: "kmo",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Saurabh Narain",
        handle: "snarain",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Nikhil Jha",
        handle: "njha",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Frank Dai",
        handle: "fydai",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Ja Wattanawong",
        handle: "jaw",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Ravi Riley",
        handle: "raviriley",
        role: ["Henlo"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Young-Jin Park",
        handle: "yjp",
        role: ["sudo rm -rf /"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Owen Thompson",
        handle: "owent",
        role: ["bill"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Nikhil Ograin",
        handle: "ncograin",
        role: ["sudo rm -rf /"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Kian Sutarwala",
        handle: "kian",
        role: ["Online People"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        name: "Jeffrey Wei",
        handle: "jefwei",
        role: ["Online People"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      }
    ];
  }
};
</script>
<style lang="scss" scoped>
.staffGrid {
  display: grid;
  gap: 1.5rem 1rem;
  justify-items: stretch;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  padding: 3rem 2rem;
}
</style>
