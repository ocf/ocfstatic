<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-two-fifths">
            <div class="card">
              <div class="notification is-card-toolbar is-marginless">
                <div class="level is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <b-icon icon="lock" size="is-small"> </b-icon>
                      <span style="padding-left: 7px;">Login</span>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <b-button size="is-small">Create an Account</b-button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-content">
                <form>
                  <b-field label="Username" message="Not your CalNet or email">
                    <b-input v-model="username" />
                  </b-field>
                  <b-field label="Password">
                    <b-input v-model="password" type="password" />
                  </b-field>
                  <div class="field">
                    <b-checkbox v-model="remember">
                      Remember me
                    </b-checkbox>
                  </div>
                  <div class="level is-mobile">
                    <b-button @click="login">Login</b-button>
                    <a><small>Forgot your password?</small></a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: "Login"
  },
  data() {
    return {
      username: "",
      password: "",
      remember: true
    };
  },
  methods: {
    login() {
      return fetch("www.ocf.berkeley.edu/login/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify({
          username: this.username,
          password: this.password
        }) // body data type must match "Content-Type" header
      }).then(response => response.json());
    }
  }
};
</script>
