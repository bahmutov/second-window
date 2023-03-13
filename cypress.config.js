const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'https://demoqa.com/',
    supportFile: false,
    fixturesFolder: false,
    blockHosts: [
      'pagead2.googlesyndication.com',
      'www.googletagservices.com',
      'www.google.com',
      'securepubads.g.doubleclick.net',
      'www.gstatic.com',
      'cdn.ad.plus',
      'www.google-analytics.com',
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },
})
