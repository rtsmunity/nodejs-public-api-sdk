/**
 * PULL API
 * REST api for static sport data.  Every resource is protected by an **API key** which must be placed in X-Api-Key request header:  X-Api-Key: your_api_key  and every request has to be made with client certificate.
 *
 * OpenAPI spec version: 
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RtsmunityPublicApiSdk);
  }
}(this, function(expect, RtsmunityPublicApiSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RtsmunityPublicApiSdk.InlineResponse2003Markets();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2003Markets', function() {
    it('should create an instance of InlineResponse2003Markets', function() {
      // uncomment below and update the code to test InlineResponse2003Markets
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2003Markets();
      //expect(instance).to.be.a(RtsmunityPublicApiSdk.InlineResponse2003Markets);
    });

    it('should have the property marketId (base name: "market_id")', function() {
      // uncomment below and update the code to test the property marketId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2003Markets();
      //expect(instance).to.be();
    });

    it('should have the property marketStateId (base name: "market_state_id")', function() {
      // uncomment below and update the code to test the property marketStateId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2003Markets();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2003Markets();
      //expect(instance).to.be();
    });

    it('should have the property winSelections (base name: "win_selections")', function() {
      // uncomment below and update the code to test the property winSelections
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2003Markets();
      //expect(instance).to.be();
    });

    it('should have the property probabilities (base name: "probabilities")', function() {
      // uncomment below and update the code to test the property probabilities
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2003Markets();
      //expect(instance).to.be();
    });

  });

}));
