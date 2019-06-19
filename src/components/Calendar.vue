<template>
  <div>
    <ClientOnly>
      <vue-cal
        :default-view="defaultView"
        :disable-views="['years', 'year', 'month']"
        :time-from="9 * 60"
        :time-to="20 * 60"
        :time-step="30"
        :events="events"
        :on-event-click="onEventClick"
        :min-cell-width="150"
        selected-date="2018-11-19"
        style="height: 100%"
        hide-weekends
        12hour
        time-format="h:mm{am}"
      >
        <div slot="event-renderer" slot-scope="{ event }">
          <div style="padding: 5px;">
            <div class="vuecal__event-title">
              <p class="title is-5">{{ event.name }}</p>
            </div>
            <small class="vuecal__event-time subtitle is-6">
              <nobr>{{ event.startTime }}</nobr> -
              <nobr>{{ event.endTime }}</nobr>
            </small>
          </div>
        </div>
      </vue-cal>
    </ClientOnly>
    <staff-modal :show-modal.sync="showModal" :selected-event="selectedEvent" />
  </div>
</template>

<script>
import StaffModal from "~/components/StaffModal.vue";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  components: {
    VueCal,
    StaffModal
  },
  data() {
    return {
      selectedEvent: {},
      showModal: false,
      defaultView: "week",
      events: [
        {
          start: "2018-11-20 14:00",
          end: "2018-11-20 18:00",
          name: "Patricia Hanus",
          username: "php",
          email: "php@ocf.berkeley.edu",
          bio: "Fall 2019 General Manager\nLoves cats"
        },
        {
          start: "2018-11-22 10:00",
          end: "2018-11-22 11:00",
          name: "Christopher Cooper",
          username: "cooperc",
          email: "cooperc@ocf.berkeley.edu",
          bio: "Fall 2019 General Manager"
        }
      ]
    };
  },
  mounted() {
    // Defaults to day view on mobile, using Bulma's standard px value for mobile.
    // Could be modified to programmatically change the view as users shrink the window,
    // but how often is that actually useful?
    this.defaultView = window.innerWidth <= 768 ? "day" : "week";
  },
  methods: {
    onEventClick(event, e) {
      console.log(event);
      this.selectedEvent = event;
      this.showModal = true;
      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation();
    }
  }
};
</script>

<style scoped>
.vuecal__menu,
.vuecal__cell-events-count {
  background-color: #42b983;
}
.vuecal__menu li {
  border-bottom-color: #fff;
  color: #fff;
}
.vuecal__menu li.active {
  background-color: rgba(255, 255, 255, 0.15);
}
.vuecal__title-bar {
  background-color: #e4f5ef;
}
.vuecal__cell.today,
.vuecal__cell.current {
  background-color: rgba(240, 240, 255, 0.4);
}
.vuecal:not(.vuecal--day-view) .vuecal__cell.selected {
  background-color: rgba(235, 255, 245, 0.4);
}
.vuecal__cell.selected:before {
  border-color: rgba(66, 185, 131, 0.5);
}
</style>
