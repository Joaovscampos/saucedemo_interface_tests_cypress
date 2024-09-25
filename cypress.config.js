const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true,  
    supportFile: false,
    failOnStatusCode: false,
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
    },
  },
});
