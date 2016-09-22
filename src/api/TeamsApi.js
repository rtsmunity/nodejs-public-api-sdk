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
    define(['ApiClient', 'model/InlineResponse20018'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20018'));
  } else {
    // Browser globals (root is window)
    if (!root.RtsmunityPublicApiSdk) {
      root.RtsmunityPublicApiSdk = {};
    }
    root.RtsmunityPublicApiSdk.TeamsApi = factory(root.RtsmunityPublicApiSdk.ApiClient, root.RtsmunityPublicApiSdk.InlineResponse20018);
  }
}(this, function(ApiClient, InlineResponse20018) {
  'use strict';

  /**
   * Teams service.
   * @module api/TeamsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new TeamsApi. 
   * @alias module:api/TeamsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getTeams operation.
     * @callback module:api/TeamsApi~getTeamsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20018>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Teams
     * 
     * @param {String} sport Sport key
     * @param {module:api/TeamsApi~getTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InlineResponse20018>}
     */
    this.getTeams = function(sport, callback) {
      var postBody = null;

      // verify the required parameter 'sport' is set
      if (sport == undefined || sport == null) {
        throw "Missing the required parameter 'sport' when calling getTeams";
      }


      var pathParams = {
        'sport': sport
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = [InlineResponse20018];

      return this.apiClient.callApi(
        '/{sport}/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
