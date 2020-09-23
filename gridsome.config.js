// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Open Computing Facility",
  siteUrl: "ocf.berkeley.edu",
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Doc",
        path: "docs/**/*.md",
        remark: {
          autolinkClassName: " "
        }
      }
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        collections: [
          {
            typeName: "Doc",
            indexName: "Doc",
            fields: ["title", "excerpt"]
          }
        ],
        searchFields: ["title", "content"]
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/staff-hours": {
            changefreq: "weekly"
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
