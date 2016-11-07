'use strict'

var util = require('util')
var fs = require('fs')
var sdk = require('./src/index.js')

var API_URL = {
  local: 'https://localhost:3000',
  production: 'https://api.rtsmunity.com:6220',
  sandbox: 'https://api.sandbox.rtsmunity.com:6210'
}

// Extended API client
function ApiClient (apiKey, clientKeyPath, clientCertPath, passphrase, mode) {
  sdk.ApiClient.call(this)

  this.basePath = API_URL[mode] || API_URL['local']
  this.defaultHeaders = {
    'X-Api-Key': apiKey
  }
  this._key = fs.readFileSync(clientKeyPath, 'utf-8')
  this._cert = fs.readFileSync(clientCertPath, 'utf-8')
  this._passphrase = passphrase
}

ApiClient.prototype.applyAuthToRequest = function (request, authNames) {
  ApiClient.super_.prototype.applyAuthToRequest.call(this, request, authNames)
  request.key(this._key)
  request.cert(this._cert)
  request.passphrase(this._passphrase)
}

util.inherits(ApiClient, sdk.ApiClient)

function toLowerCase (word) {
  if (word.length === 0) { return word }
  return word.charAt(0).toLowerCase() + word.substr(1)
}

// Export patched classes
module.exports = function (apiKey, clientKeyPath, clientCertPath, passphrase, mode) {
  var apiClient = new ApiClient(apiKey, clientKeyPath, clientCertPath, passphrase, mode)

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
