const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {

    },
    baseUrl: "https://erickwendel.github.io/vanilla-js-web-app-example/",
    testIsolation: false
  },
});
