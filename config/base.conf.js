exports.config = {
    hostname: 'hub-cloud.browserstack.com',
    port: 443,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    logLevel: 'error',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['browserstack'],

    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]]
}
