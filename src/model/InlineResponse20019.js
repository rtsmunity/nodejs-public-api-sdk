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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RtsmunityPublicApiSdk) {
      root.RtsmunityPublicApiSdk = {};
    }
    root.RtsmunityPublicApiSdk.InlineResponse20019 = factory(root.RtsmunityPublicApiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20019 model module.
   * @module model/InlineResponse20019
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse20019</code>.
   * @alias module:model/InlineResponse20019
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InlineResponse20019</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20019} obj Optional instance to populate.
   * @return {module:model/InlineResponse20019} The populated <code>InlineResponse20019</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('shortcut')) {
        obj['shortcut'] = ApiClient.convertToType(data['shortcut'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('date_from')) {
        obj['date_from'] = ApiClient.convertToType(data['date_from'], 'String');
      }
      if (data.hasOwnProperty('date_to')) {
        obj['date_to'] = ApiClient.convertToType(data['date_to'], 'String');
      }
      if (data.hasOwnProperty('league_id')) {
        obj['league_id'] = ApiClient.convertToType(data['league_id'], 'Number');
      }
      if (data.hasOwnProperty('teams')) {
        obj['teams'] = ApiClient.convertToType(data['teams'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} shortcut
   */
  exports.prototype['shortcut'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} date_from
   */
  exports.prototype['date_from'] = undefined;
  /**
   * @member {String} date_to
   */
  exports.prototype['date_to'] = undefined;
  /**
   * @member {Number} league_id
   */
  exports.prototype['league_id'] = undefined;
  /**
   * @member {Array.<Number>} teams
   */
  exports.prototype['teams'] = undefined;



  return exports;
}));


