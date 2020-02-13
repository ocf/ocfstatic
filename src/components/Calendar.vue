<template>
  <div>
    <ClientOnly>
      <!-- Need to disable eslint because linting changes 12Hour to 12hour -->
      <!-- eslint-disable -->
      <vue-cal
        ref="vuecal"
        :default-view="defaultView"
        :disable-views="['years', 'year', 'month']"
        :time-from="9 * 60"
        :time-to="20 * 60"
        :time-step="30"
        :events="processedEvents"
        :on-event-click="onEventClick"
        :min-cell-width="150"
        selected-date="2018-11-19"
        style="height: 100%"
        hide-weekends
        twelve-hour
        time-format="h:mm"
      >
        <!-- eslint-enable -->
        <template v-slot:event-renderer="{ event }">
          <div style="padding: 5px;">
            <div class="vuecal__event-title">
              <p class="title is-5">{{ event.name }}</p>
            </div>
            <small class="vuecal__event-time subtitle is-6">
              <nobr>{{ event.startDate.formatTime() }}</nobr>
              -
              <nobr>{{ event.endDate.formatTime() }}</nobr>
            </small>
          </div>
        </template>
      </vue-cal>
    </ClientOnly>
    <staff-modal :show-modal.sync="showModal" :selected-event="selectedEvent" />
  </div>
</template>

<static-query>
  query {
    metadata {
      apiUrl
    }
  }
</static-query>

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
      colors: [
        "red",
        "orange",
        "yellow",
        "green",
        "turquoise",
        "cyan",
        "blue",
        "purple"
      ],
      // To be loaded from endpoint
      events: [
        {
          start: "2018-11-20 14:00",
          end: "2018-11-20 18:00",
          name: "Patricia Hanus",
          username: "php",
          email: "php@ocf.berkeley.edu",
          info: "Fall 2019 General Manager\nLoves cats"
        },
        {
          start: "2018-11-22 10:00",
          end: "2018-11-22 11:00",
          name: "Christopher Cooper",
          username: "cooperc",
          email: "cooperc@ocf.berkeley.edu",
          info: "Fall 2019 General Manager"
        },
        {
          start: "2018-11-21 10:00",
          end: "2018-11-21 11:00",
          name: "Derek Phan",
          username: "dphan",
          email: "dphan@ocf.berkeley.edu",
          info: "Boi"
        },
        {
          start: "2018-11-21 9:00",
          end: "2018-11-21 12:00",
          name: "Bernard Zhao",
          username: "bernardzhao",
          email: "bernardzhao@ocf.berkeley.edu",
          info: "Boi"
        },
        {
          start: "2018-11-23 14:00",
          end: "2018-11-23 15:00",
          name: "Benjamin Zhang",
          username: "bzh",
          email: "bzh@ocf.berkeley.edu",
          info: "Boi"
        },
        {
          start: "2018-11-19 16:00",
          end: "2018-11-19 17:00",
          name: "Liam Porr",
          username: "wporr",
          email: "wporr@ocf.berkeley.edu",
          info: "Boi"
        }
      ],
      staticEvents: [
        {
          start: "2018-11-19 18:00",
          end: "2018-11-19 19:00",
          name: "Board Meeting",
          class: "meeting",
          info: "Big boi decisions",
          background: true
        },
        {
          start: "2018-11-19 19:00",
          end: "2018-11-19 20:00",
          name: "Staff Meeting",
          class: "meeting",
          info: "😀",
          background: true
        }
      ],
      hours: []
    };
  },
  computed: {
    processedEvents() {
      return this.events
        .map((event, index) => {
          event.class = this.colors[index % this.colors.length];
          return event;
        })
        .concat(this.staticEvents);
    }
  },
  mounted() {
    // Defaults to day view on mobile, using Bulma's standard px value for mobile. (Hardcoded lol)
    // Could be modified to programmatically change the view as users shrink the window,
    // but how often is that actually useful?
    this.defaultView = window.innerWidth <= 768 ? "day" : "week";
    this.setStaffHours();
  },
  methods: {
    async setStaffHours() {
      this.hours = await this.$http
        .get(this.$static.metadata.apiUrl + "hours/staff")
        .then(response => response.data);
      console.log(this.hours);
    },
    onEventClick(event, e) {
      this.selectedEvent = event;
      this.showModal = true;
      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation();
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/styles.scss";
.vuecal__menu,
.vuecal__cell-events-count {
  background-color: $primary;
}
.vuecal__menu li {
  border-bottom-color: #fff;
  color: #fff;
}
.vuecal__menu li.active {
  background-color: rgba($primary, 0.2);
}
.vuecal__title-bar {
  background-color: rgba($primary, 0.2);
}
.vuecal__cell.today,
.vuecal__cell.current {
  background-color: rgba($primary, 0.2);
}
.vuecal:not(.vuecal--day-view) .vuecal__cell.selected {
  background-color: rgba($primary, 0.05);
}
.vuecal__cell.selected:before {
  border-color: $primary;
}

.vuecal__event.meeting {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    #f2f2f2 10px,
    #f2f2f2 20px
  ); /* IE 10+ */
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vuecal__event.meeting .vuecal__event-time {
  display: none;
  align-items: center;
}

.vuecal__event.red {
  background-color: rgba($red, 0.6);
  border: 1px solid $red;
  color: #fff;
}
.vuecal__event.orange {
  background-color: rgba($orange, 0.6);
  border: 1px solid $orange;
  color: #fff;
}
.vuecal__event.yellow {
  background-color: rgba($yellow, 0.6);
  border: 1px solid $yellow;
  color: #fff;
}
.vuecal__event.green {
  background-color: rgba($green, 0.6);
  border: 1px solid $green;
  color: #fff;
}
.vuecal__event.turquoise {
  background-color: rgba($turquoise, 0.6);
  border: 1px solid $turquoise;
  color: #fff;
}
.vuecal__event.cyan {
  background-color: rgba($cyan, 0.6);
  border: 1px solid $cyan;
  color: #fff;
}
.vuecal__event.blue {
  background-color: rgba($blue, 0.6);
  border: 1px solid $blue;
  color: #fff;
}
.vuecal__event.purple {
  background-color: rgba($purple, 0.6);
  border: 1px solid $purple;
  color: #fff;
}
</style>
