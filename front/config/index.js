const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    proxyTable: {
        "/api": "http://localhost:3000"
    },
})

