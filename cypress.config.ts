import { defineConfig } from 'cypress';

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     }
//   }
// });

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
