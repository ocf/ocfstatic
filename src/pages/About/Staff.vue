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
        handle: "andwappe",
        name: "Andrew Wapperom",
        role: ["ligma"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "anguy",
        name: "Alyssa Nguyen",
        role: ["pew"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "azh",
        name: "Andrew Zhang",
        role: ["thicc_penguins"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "bplate",
        name: "Ben Plate",
        role: ["Online People"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "etw",
        name: "Ethan Wu",
        role: ["D@B"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "fydai",
        name: "Frank Dai",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "jaw",
        name: "Ja Wattanawong",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "jefwei",
        name: "Jeffrey Wei",
        role: ["Online People"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "jshale",
        name: "Jack Hale",
        role: ["sudo rm -rf /"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "kian",
        name: "Kian Sutarwala",
        role: ["Online People"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "kmo",
        name: "Kevin Mo",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "lmathias",
        name: "Lance Mathias",
        role: ["ligma"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
	handle: "lharriscal",
	name: "Lukas Harris"
	role: ["Staff"],
	face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      }
      {
        handle: "ncograin",
        name: "Nikhil Ograin",
        role: ["sudo rm -rf /"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "nicklitvin",
        name: "Nick Litvinov",
        role: ["ligma"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "njha",
        name: "Nikhil Jha",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "owent",
        name: "Owen Thompson",
        role: ["bill"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "raviriley",
        name: "Ravi Riley",
        role: ["Henlo"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "sidjha",
        name: "Sid Jha",
        role: ["bill"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "snarain",
        name: "Saurabh Narain",
        role: ["Staff"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "vakumar",
        name: "Vasanth Kumar",
        role: ["Online people"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "viincent",
        name: "Vincent He",
        role: ["The Guy"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "yjp",
        name: "Young-Jin Park",
        role: ["sudo rm -rf /"],
        face: "https://bulma.io/images/placeholders/1280x960.png",
        icon: "https://bulma.io/images/placeholders/96x96.png"
      },
      {
        handle: "yzy",
        name: "Ziyan Yu",
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
