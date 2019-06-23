<template>
  <b-modal :active.sync="show" :width="400">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
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
          <span style="white-space: pre;">{{ selectedEvent.bio }}</span>
          <br />
          <small
            >{{ selectedEvent.startTime }} - {{ selectedEvent.endTime }}
            {{ selectedEvent.startDate }}</small
          >
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
const md5 = require("md5");
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
  }
};
</script>
