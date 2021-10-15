<template>
  <Documentation>
    <section class="section">
      <div class="content">
        <h2>
          Services
        </h2>
        <ul>
          <li><a href="/docs/services/account">Account</a></li>
          <ul>
            <li>
              <a href="/docs/services/account/account-policies/"
                >Account policies</a
              >
            </li>
            <li>
              <a href="/docs/services/account/content-removal/"
                >Content removal policy</a
              >
            </li>
          </ul>
          <li><a href="/docs/services/lab/">Computer lab</a></li>
          <ul>
            <li>
              <a href="/docs/services/lab/lab-reservation-policy/"
                >Lab reservation policy</a
              >
            </li>
            <li><a href="/docs/services/lab/printing/">Printing</a></li>
          </ul>
          <li><a href="/docs/services/mysql/">Database (MySQL)</a></li>
          <li><a href="/docs/services/mail/">Email</a></li>
          <li><a href="/docs/services/hpc/">High performance computing</a></li>
          <ul>
            <li><a href="/docs/services/hpc/slurm/">Slurm</a></li>
          </ul>
          <li><a href="/docs/services/mastodon/">Mastodon</a></li>
          <li>
            <a href="/docs/services/shell/"
              >Remote shell and file transfer (SSH/SFTP)</a
            >
          </li>
          <ul>
            <li>
              <a href="/docs/services/shell/commands">Command reference</a>
            </li>
          </ul>
          <li><a href="/docs/services/mirrors/">Software Mirrors</a></li>
          <li>
            <a href="/docs/services/vhost/"
              >Virtual hosting (group.berkeley.edu)</a
            >
          </li>
          <ul>
            <li>
              <a href="/docs/services/vhost/#hosting-badge">Hosting badges</a>
            </li>
            <li>
              <a href="/docs/services/vhost/mail/"
                >Mail virtual hosting for student groups</a
              >
            </li>
            <ul>
              <li>
                <a href="/docs/services/vhost/mail/gmail/"
                  >Using Gmail with mail virtual hosting</a
                >
              </li>
            </ul>
          </ul>
          <li><a href="/docs/services/web/">Web hosting</a></li>
          <ul>
            <li><a href="/docs/services/web/backups/">Backups/Archiving</a></li>
            <li><a href="/docs/services/web/django/">Django</a></li>
            <li><a href="/docs/services/web/flask/">Flask</a></li>
            <li><a href="/docs/services/web/jekyll/">Jekyll</a></li>
            <li><a href="/docs/services/web/php/">PHP</a></li>
            <li><a href="/docs/services/web/rails/">Ruby on Rails</a></li>
            <li><a href="/docs/services/web/wordpress/">WordPress</a></li>
          </ul>
          <li><a href="/docs/services/webapps/">Web application hosting</a></li>
          <ul>
            <li><a href="/docs/services/webapps/nodejs/">Node.js</a></li>
            <li>
              <a href="/docs/services/webapps/python/"
                >Python (Django, Flask, etc.)</a
              >
            </li>
            <li><a href="/docs/services/webapps/rails/">Ruby on Rails</a></li>
          </ul>
          <li><a href="/docs/services/xmpp/">XMPP</a></li>
        </ul>
      </div>
    </section>
  </Documentation>
</template>

<script>
import Documentation from "~/layouts/Documentation.vue";

export default {
  metaInfo() {
    return {
      title: "Services"
    };
  },
  components: {
    Documentation
  }
};
</script>
