<template>
  <div>
    <div class="columns is-centered">
      <div v-for="card in roleCheck" :key="card.id" :class="columnType">
        <OfficerCard :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import OfficerCard from "./OfficerCard";

export default {
  name: "OfficerCardSet",
  components: {
    OfficerCard
  },
  props: {
    cards: Array,
    roleWanted: String,
    doubleSet: Boolean
  },
  computed: {
    roleCheck: function() {
      return this.cards.filter(card => {
        return card.role.includes(this.roleWanted);
      });
    },
    columnType: function() {
      if (this.doubleSet) {
        return "column is-half";
      }
      return "column is-3";
    }
  }
};
</script>
