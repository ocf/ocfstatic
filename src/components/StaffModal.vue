<template>
  <b-modal :active.sync="show" :width="400">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div v-if="hash" class="media-left">
            <figure class="image is-64x64">
              <g-image
                :src="'https://www.gravatar.com/avatar/' + hash"
                alt="Image"
              />
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
            {{ formatStaffHour(selectedEvent.startDate) }}
            - {{ formatStaffHour(selectedEvent.endDate) }}
          </small>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import md5 from "md5";
export default {
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
    },
    hash() {
      return this.selectedEvent.email ? md5(this.selectedEvent.email) : "";
    }
  },
  methods: {
    formatStaffHour(date) {
      return date ? date.formatTime("h:mm{AM}") : "";
    }
  }
};
</script>
