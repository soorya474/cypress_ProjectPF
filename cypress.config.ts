import { defineConfig } from "cypress";

export default defineConfig({
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    
  },
  
  e2e: {  
    defaultCommandTimeout: 40000, // 10 seconds
    requestTimeout: 45000, // 15 seconds
    responseTimeout: 45000, // 15 seconds
      // implement node event listeners here
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
    
    },
  },
  env:{
    "baseUrl":"https://www.saucedemo.com/",
    experimentalSessionAndOrigin: true,
  }
});
