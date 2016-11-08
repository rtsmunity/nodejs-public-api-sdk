'use strict'

var util = require('util')
var fs = require('fs')
var sdk = require('./src/index')
var MODE = require('./src/mode')

function toLowerCase (word) {
  if (word.length === 0) { return word }
  return word.charAt(0).toLowerCase() + word.substr(1)
}

function init (apiKey, clientKeyPath, clientCertPath, passphrase, mode) {
  var apiClient = new sdk.ApiClient(apiKey, clientKeyPath, clientCertPath, passphrase, mode)

  var resultSdk = {}
  for (var i in sdk) {
    if (i === 'ApiClient') { continue } // Skip ApiClient
    if (!sdk.hasOwnProperty(i)) { continue } // Skip not interesting properties
    if (typeof (sdk[i]) !== 'function') { continue } // Skip everything except functions
    if (!i.endsWith('Api')) { continue } // Skip models constructors

    const instanceName = toLowerCase(i.slice(0, -3)) // strip `Api` and make first letter lowercase
    resultSdk[instanceName] = new sdk[i](apiClient)
  }

  return resultSdk
}

// Export patched classes
module.exports = {
  init: init,
  MODE: MODE
}
