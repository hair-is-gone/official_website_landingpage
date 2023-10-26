'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_HOST: '"https://happyacerummy.win"',
  IP_HOST: '"https://gate.highrummy.online"',
  // API_HOST: '"http://192.168.1.38:8001"',
  // GAME_HOST: '"http://192.168.1.38:27149"',
})
