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
    instance = new RtsmunityPublicApiSdk.InlineResponse2004();
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

  describe('InlineResponse2004', function() {
    it('should create an instance of InlineResponse2004', function() {
      // uncomment below and update the code to test InlineResponse2004
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2004();
      //expect(instance).to.be.a(RtsmunityPublicApiSdk.InlineResponse2004);
    });

    it('should have the property sequence (base name: "sequence")', function() {
      // uncomment below and update the code to test the property sequence
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property matchTime (base name: "match_time")', function() {
      // uncomment below and update the code to test the property matchTime
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property matchId (base name: "match_id")', function() {
      // uncomment below and update the code to test the property matchId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property matchStateId (base name: "match_state_id")', function() {
      // uncomment below and update the code to test the property matchStateId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "date_created")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property match (base name: "match")', function() {
      // uncomment below and update the code to test the property match
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2004();
      //expect(instance).to.be();
    });

    it('should have the property markets (base name: "markets")', function() {
      // uncomment below and update the code to test the property markets
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2004();
      //expect(instance).to.be();
    });

  });

}));
