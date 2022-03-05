<template>
  <dashboard>
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <card title="Profile" icon="account" class="tile is-child">
            <!-- <user-avatar class="image has-max-width is-aligned-center" /> -->
            <!-- <gravatar-pic :email="user.email" /> -->
            <hr />
            <b-field label="Name">
              <b-input :value="'test'" custom-class="is-static" readonly />
            </b-field>
            <hr />
            <!--
            <b-field label="E-mail">
              <b-input :value="userEmail" custom-class="is-static" readonly />
            </b-field>
            -->
          </card>
        </div>
        <div class="tile is-parent">
          <card title="Change Password" icon="lock" class="tile is-child">
            <form @submit.prevent="submit">
              <b-field
                horizontal
                label="Current password"
                message="Required. Your current password"
                type="is-white"
              >
                <b-input
                  name="password_current"
                  type="password"
                  v-model="form.password_current"
                  placeholder="Enter password here"
                  required
                  autcomplete="current-password"
                />
              </b-field>
              <hr />
              <b-field
                horizontal
                label="New password"
                message="Required. New password"
                type="is-white"
              >
                <b-input
                  name="password"
                  type="password"
                  v-model="form.password"
                  required
                  autocomplete="new-password"
                />
              </b-field>
              <b-field
                horizontal
                label="Confirm password"
                message="Required. New password one more time"
                type="is-white"
              >
                <b-input
                  name="password_confirmation"
                  type="password"
                  v-model="form.password_confirmation"
                  required
                  autocomplete="new-password"
                />
              </b-field>
              <hr />
              <b-field horizontal>
                <div class="control">
                  <button
                    type="submit"
                    class="button is-primary"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Submit
                  </button>
                </div>
              </b-field>
            </form>
          </card>
        </div>
      </div>
    </section>
  </dashboard>
</template>

<script>
import dashboard from "@/layouts/Dashboard.vue";
import card from "@/components/Card.vue";
// import GravatarPic from "~/components/GravatarPic.vue";
// import store from "~/store.js";

export default {
  metaInfo: {
    title: "Dashboard"
  },
  data() {
    return {
      form: {}
    };
  },
  methods: {
    submit() {
      const myForm = JSON.stringify(this.form);
      // Add logic for sending JSON here
    }
  },
  components: {
    card,
    dashboard
    // GravatarPic
  }
};
</script>
