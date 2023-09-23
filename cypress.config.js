const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fh6md3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://testqa.purse.tech'
  },
});
