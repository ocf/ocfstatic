// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource((actions) => {
    actions.addMetadata("githubUrl", "https://github.com/BernardZhao/ocf");
    actions.addMetadata(
      "apiUrl",
      process.env.NODE_ENV.toLowerCase() === "production"
        ? "https://www.ocf.berkeley.edu/api/"
        : "http://localhost:8000/"
    );
  });

  // eslint-disable-next-line no-unused-vars
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
