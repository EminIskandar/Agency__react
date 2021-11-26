const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = function(config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "page": resolve("src/pages"), 
    "components": resolve("src/components"), 
    "img": resolve("src/assets/img"), 
  });

  return config;
};