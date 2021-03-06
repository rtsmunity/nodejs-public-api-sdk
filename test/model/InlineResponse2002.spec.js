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
    instance = new RtsmunityPublicApiSdk.InlineResponse2002();
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

  describe('InlineResponse2002', function() {
    it('should create an instance of InlineResponse2002', function() {
      // uncomment below and update the code to test InlineResponse2002
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be.a(RtsmunityPublicApiSdk.InlineResponse2002);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property seriesMatchSequence (base name: "series_match_sequence")', function() {
      // uncomment below and update the code to test the property seriesMatchSequence
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property darkTeamId (base name: "dark_team_id")', function() {
      // uncomment below and update the code to test the property darkTeamId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property lightTeamId (base name: "light_team_id")', function() {
      // uncomment below and update the code to test the property lightTeamId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property seriesId (base name: "series_id")', function() {
      // uncomment below and update the code to test the property seriesId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property tournamentId (base name: "tournament_id")', function() {
      // uncomment below and update the code to test the property tournamentId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property leagueId (base name: "league_id")', function() {
      // uncomment below and update the code to test the property leagueId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property winTeamId (base name: "win_team_id")', function() {
      // uncomment below and update the code to test the property winTeamId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property matchStateId (base name: "match_state_id")', function() {
      // uncomment below and update the code to test the property matchStateId
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

    it('should have the property presentationUrl (base name: "presentation_url")', function() {
      // uncomment below and update the code to test the property presentationUrl
      //var instane = new RtsmunityPublicApiSdk.InlineResponse2002();
      //expect(instance).to.be();
    });

  });

}));
