const { defineConfig } = require("cypress");

module.exports = defineConfig({
  

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    env:{
    UI_URL: 'https://front.serverest.dev/login',
    API_URL: 'https://serverest.dev/'
  },
  },
});
