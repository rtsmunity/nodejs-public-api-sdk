/**
 * PULL API
 * REST api for static sport data.  Every resource is protected by an **API key** which must be placed in X-Api-Key reques header:          X-Api-Key: your_api_key  and every request has to be made with client certificate.  
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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RtsmunityPublicApiSdk) {
      root.RtsmunityPublicApiSdk = {};
    }
    root.RtsmunityPublicApiSdk.InlineResponse20013 = factory(root.RtsmunityPublicApiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20013 model module.
   * @module model/InlineResponse20013
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20013</code>.
   * @alias module:model/InlineResponse20013
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>InlineResponse20013</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20013} obj Optional instance to populate.
   * @return {module:model/InlineResponse20013} The populated <code>InlineResponse20013</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('series_match_sequence')) {
        obj['series_match_sequence'] = ApiClient.convertToType(data['series_match_sequence'], 'Number');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'String');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'String');
      }
      if (data.hasOwnProperty('dark_team_id')) {
        obj['dark_team_id'] = ApiClient.convertToType(data['dark_team_id'], 'Number');
      }
      if (data.hasOwnProperty('light_team_id')) {
        obj['light_team_id'] = ApiClient.convertToType(data['light_team_id'], 'Number');
      }
      if (data.hasOwnProperty('series_id')) {
        obj['series_id'] = ApiClient.convertToType(data['series_id'], 'Number');
      }
      if (data.hasOwnProperty('tournament_id')) {
        obj['tournament_id'] = ApiClient.convertToType(data['tournament_id'], 'Number');
      }
      if (data.hasOwnProperty('league_id')) {
        obj['league_id'] = ApiClient.convertToType(data['league_id'], 'Number');
      }
      if (data.hasOwnProperty('win_team_id')) {
        obj['win_team_id'] = ApiClient.convertToType(data['win_team_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} series_match_sequence
   */
  exports.prototype['series_match_sequence'] = undefined;
  /**
   * @member {String} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {String} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {Number} dark_team_id
   */
  exports.prototype['dark_team_id'] = undefined;
  /**
   * @member {Number} light_team_id
   */
  exports.prototype['light_team_id'] = undefined;
  /**
   * @member {Number} series_id
   */
  exports.prototype['series_id'] = undefined;
  /**
   * @member {Number} tournament_id
   */
  exports.prototype['tournament_id'] = undefined;
  /**
   * @member {Number} league_id
   */
  exports.prototype['league_id'] = undefined;
  /**
   * @member {Number} win_team_id
   */
  exports.prototype['win_team_id'] = undefined;



  return exports;
}));


