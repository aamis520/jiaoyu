'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const devEvn = merge(prodEnv, {
    NODE_ENV: '"development"',
    test: 'development',
    aa: {
        bb: 'dev'
    }
})
module.exports = devEvn
