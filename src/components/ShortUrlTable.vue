<template>
  <table class="table is-striped is-bordered is-fullwidth">
    <thead>
      <tr>
        <th scope="col">Short (ocf.io)</th>
        <th scope="col">Long</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</template>

<script>
/* eslint-disable no-useless-escape */
export default {
  mounted: async function() {
    let pp = await (await fetch(
      "https://raw.githubusercontent.com/ocf/puppet/master/modules/ocf_www/manifests/site/shorturl.pp"
    )).text();

    // extract all lines with 'rewrite_rule'
    let rewrites = pp
      .split("\n")
      .filter(l => l.includes("rewrite_rule"))
      .map(l => l.trim().replace(/\\/g, ""));

    // extract regex and url from each line
    rewrites = rewrites.map(r =>
      r
        .split(" => '")[1]
        .split(" [")[0]
        .split("$ ")
    );

    // remove ' from beginning of regex
    rewrites = rewrites.map(r => [r[0].slice(1), r[1]]);

    // make sure url begins with http
    rewrites = rewrites.filter(r => r[1].startsWith("http"));

    for (let rewrite of rewrites) {
      this.add(this.fixup(rewrite));
    }
  },
  methods: {
    add(item) {
      let tr = document.createElement("tr");

      let short = document.createElement("td");
      let long = document.createElement("td");

      let longA = document.createElement("a");

      short.innerHTML = item[0];
      longA.href = item[1].replace(/\*/g, ""); // remove * from href
      longA.innerHTML = item[1];

      long.appendChild(longA);

      tr.appendChild(short);
      tr.appendChild(long);

      document.querySelector("tbody").appendChild(tr);
    },
    fixup(item) {
      let [r, u] = item;

      // remove regex prefix / postfix
      if (r.startsWith("^")) r = r.slice(1);
      if (r.endsWith("$")) r = r.slice(0, -1);

      r = r.replace(/\?(\:)*/g, ""); // remove negative lookbacks
      r = r.replace(/\{.*?\}|[\+\?]|\.[\+\?\*]/g, "*"); // remove quantifiers
      r = r.replace(/\(?!.*?\)/g, ""); // remove negative capture groups
      r = r.replace(/\[\^.*?\]/g, ""); // remove negative brackets
      r = r.replace(/\(|\)/g, ""); // remove parens

      u = u.replace(/\$\d/g, "*"); // replace $ in url

      return [r, u];
    }
  }
};
</script>
