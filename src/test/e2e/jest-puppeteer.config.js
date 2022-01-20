module.exports = {
  server: {
    // How you build your bundle. If you use Rollup, add the plugin rollup-plugin-serve with the configuration serve({ contentBase: ‘dist’, port: 10002 })
    command: `npm run testdev`,
    port: 4321,
    // if default or tcp, the test starts right await whereas the dev server is not available on http
    protocol: 'http',
    // in ms
    launchTimeout: 120000,
    debug: true
  },
  launch: {
    headless: true,
    timeout: 120000,
    executablePath: process.env.CHROMIUM_PATH,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  }
}
