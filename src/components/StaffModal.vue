<template>
  <b-modal :active.sync="show" :width="400">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div v-if="selectedEvent.email" class="media-left">
            <figure class="image is-64x64">
              <gravatar-pic :email="selectedEvent.email" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ selectedEvent.name }}</p>
            <p class="subtitle is-6">{{ selectedEvent.username }}</p>
          </div>
        </div>
        <div class="content">
          <span style="white-space: pre;">{{ selectedEvent.info }}</span>
          <br />
          <small>
            {{ formatStaffHour(selectedEvent.start) }}
            - {{ formatStaffHour(selectedEvent.end) }}
          </small>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import GravatarPic from "~/components/GravatarPic.vue";
export default {
  components: {
    GravatarPic
  },
  props: {
    showModal: Boolean,
    selectedEvent: {
      type: Object,
      required: true
    }
  },
  computed: {
    show: {
      get() {
        return this.showModal;
      },
      set(val) {
        this.$emit("update:showModal", val);
      }
    }
  },
  methods: {
    formatStaffHour(date) {
      return date ? date.formatTime("h:mm{AM}") : "";
    }
  }
};
</script>
