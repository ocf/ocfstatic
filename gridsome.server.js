// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async store => {
    store.addMetaData("githubUrl", "https://github.com/BernardZhao/ocf");
    store.addMetaData("docsUrl", "https://github.com/BernardZhao/docs");
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
