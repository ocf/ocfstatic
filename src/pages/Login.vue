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
                    <b-input :value="username"></b-input>
                  </b-field>
                  <b-field label="Password">
                    <b-input :value="password" type="password"></b-input>
                  </b-field>
                  <div class="field">
                    <b-checkbox v-model="remember">
                      Remember me
                    </b-checkbox>
                  </div>
                  <div class="level is-mobile">
                    <b-button>Login</b-button>
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
  }
};
</script>
