<template>
  <Layout>
    <section class="section">
      <div class="tile is-ancestor is-vertical">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <h1 class="is-title is-1">Lab Usage Graph</h1>
            <img
              class=""
              src="https://www.ocf.berkeley.edu/stats/daily-graph/graph?date=2021-11-03"
            />
          </div>
          <div class="tile is-child box">
            <p>
              There are currently {{ numUsersInLab }} people in the lab,
              including {{ staffInLab.length }} staff:
            </p>
            <p>{{ formatStaffInLab(staffInLab) }}</p>
          </div>
          <div class="tile is-child box">
            <h1 class="is-title is-1">Printers</h1>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p>test the deal</p>
          </div>
        </div>
      </div>

      <!--
        <img class="img-responsive" src="{% url 'session_count_image' %}" />
        <img class="img-responsive" src="{% url 'session_length_image' %}" />

        <h3>Currently in Lab</h3>
        <p>
            There are {{users_in_lab_count}} users in the lab currently
            (including {{staff_in_lab_count}} staff).
        </p>
        {% if staff_in_lab %}
            <ul>
                {% for staff in staff_in_lab %}
                    <li>{{staff.user}} on {{staff.host}} for {{staff.duration}}</li>
                {% endfor %}
            </ul>
        {% endif %}

        <h3>Printers</h3>
        <div class="row">
            {% for printer, toner, maintkit in printers %}
                <div class="col-sm-4">
                    <h4>{{printer}}</h4>
                    {% if toner %}
                        <p><strong>Toner: </strong> {% widthratio toner|getitem:0 toner|getitem:1 100 %}% remaining</p>
                        {% progress_bar label='' value=toner|getitem:0 max=toner|getitem:1 %}
                    {% else %}
                        <p><strong>Toner: </strong> <em>unable to read</em></p>
                    {% endif %}
                    {% if maintkit %}
                        <p><strong>Maintenance Kit: </strong> {% widthratio maintkit|getitem:0 maintkit|getitem:1 100 %}% remaining</p>
                        {% progress_bar label='' value=maintkit|getitem:0 max=maintkit|getitem:1 %}
                    {% else %}
                        <p><strong>Maintenance Kit: </strong> <em>unable to read</em></p>
                    {% endif %}
                </div>
            {% endfor %}
        </div>

        <h3>Today's Lab Utilization</h3>
        <table id="todays-lab-utilization" class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Desktop</th>
                    <th>Idle (min)</th>
                    <th>Busy (min)</th>
                    <th>% Busy</th>
                </tr>
            </thead>
            <tbody>
                {% for profile in desktop_profiles %}
                    <tr>
                        <td>{{profile.hostname}}</td>
                        <td>{{profile.minutes_idle|floatformat:"0"}}</td>
                        <td>{{profile.minutes_busy|floatformat:"0"}}</td>
                        {% if profile.total_minutes <= 0 %}
                            <td>0%</td>
                        {% else %}
                            <td>{{profile.minutes_busy|div:profile.total_minutes|mul:100|floatformat:"0"}}%</td>
                        {% endif %}
                    </tr>
                {% endfor %}
            </tbody>
        </table>
-->
    </section>
  </Layout>
</template>
<static-query>
query {
  metadata {
    apiUrl
  }
}
</static-query>
<script>
export default {
  data() {
    return {
      hours: [],
      blogPosts: [],
      numUsersInLab: null,
      staffInLab: [],
      statsDisplay: {}
    };
  },
  mounted() {
    this.setNumUsersInLab();
    this.setStaffInLab();
  },
  metaInfo: {
    title: "Stats"
  },
  methods: {
    formatStaffInLab(staffList) {
      // We only want the first item, the name
      return staffList.map(staff => staff[0]).join(", ");
    },
    async setNumUsersInLab() {
      this.numUsersInLab = await this.$http
        .get(this.$static.metadata.apiUrl + "lab/num_users")
        .then(response => response.data);
    },
    async setStaffInLab() {
      this.staffInLab = await this.$http
        .get(this.$static.metadata.apiUrl + "lab/staff")
        .then(response => response.data);
    },
    getTodayDate() {
      var date = new Date();

      return date;
    }
  }
};
</script>

<style scoped>
.stats-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0;
  width: 100%;
}
</style>
