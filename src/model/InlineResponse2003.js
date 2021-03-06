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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2003Markets'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2003Markets'));
  } else {
    // Browser globals (root is window)
    if (!root.RtsmunityPublicApiSdk) {
      root.RtsmunityPublicApiSdk = {};
    }
    root.RtsmunityPublicApiSdk.InlineResponse2003 = factory(root.RtsmunityPublicApiSdk.ApiClient, root.RtsmunityPublicApiSdk.InlineResponse2003Markets);
  }
}(this, function(ApiClient, InlineResponse2003Markets) {
  'use strict';




  /**
   * The InlineResponse2003 model module.
   * @module model/InlineResponse2003
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2003</code>.
   * @alias module:model/InlineResponse2003
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
      }
      if (data.hasOwnProperty('match_time')) {
        obj['match_time'] = ApiClient.convertToType(data['match_time'], 'Number');
      }
      if (data.hasOwnProperty('match_id')) {
        obj['match_id'] = ApiClient.convertToType(data['match_id'], 'Number');
      }
      if (data.hasOwnProperty('match_state_id')) {
        obj['match_state_id'] = ApiClient.convertToType(data['match_state_id'], 'Number');
      }
      if (data.hasOwnProperty('date_created')) {
        obj['date_created'] = ApiClient.convertToType(data['date_created'], 'String');
      }
      if (data.hasOwnProperty('markets')) {
        obj['markets'] = ApiClient.convertToType(data['markets'], [InlineResponse2003Markets]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} sequence
   */
  exports.prototype['sequence'] = undefined;
  /**
   * @member {Number} match_time
   */
  exports.prototype['match_time'] = undefined;
  /**
   * @member {Number} match_id
   */
  exports.prototype['match_id'] = undefined;
  /**
   * @member {Number} match_state_id
   */
  exports.prototype['match_state_id'] = undefined;
  /**
   * @member {String} date_created
   */
  exports.prototype['date_created'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse2003Markets>} markets
   */
  exports.prototype['markets'] = undefined;



  return exports;
}));


