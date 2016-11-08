'use strict'

var util = require('util')
var fs = require('fs')
var _ApiClient = require('./_ApiClient.js')
var MODE = require('./mode')

var API_URL = {
  [MODE.LOCAL]: 'http://localhost:3000',
  [MODE.PRODUCTION]: 'https://api.rtsmunity.com:6220',
  [MODE.SANDBOX]: 'https://api.sandbox.rtsmunity.com:6210'
}

// Extended API client
function ApiClient (apiKey, clientKeyPath, clientCertPath, passphrase, mode) {
  _ApiClient.call(this)

  this.basePath = API_URL[mode] || mode
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

ApiClient.convertToType = function(data, type) {
  if (data == null) {
    return data
  }

  return ApiClient.super_.convertToType.call(this, data, type)
}

util.inherits(ApiClient, _ApiClient)

module.exports = ApiClient
