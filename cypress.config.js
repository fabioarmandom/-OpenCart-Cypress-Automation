const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opencart.abstracta.us/",
    reporter: 'cypress-mochawesome-reporter',
    //pageLoadTimeout: 180000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
