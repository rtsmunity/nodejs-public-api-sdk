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
    define(['ApiClient', 'model/InlineResponse20012', 'model/InlineResponse20010', 'model/InlineResponse20013'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20012'), require('../model/InlineResponse20010'), require('../model/InlineResponse20013'));
  } else {
    // Browser globals (root is window)
    if (!root.RtsmunityPublicApiSdk) {
      root.RtsmunityPublicApiSdk = {};
    }
    root.RtsmunityPublicApiSdk.MatchesApi = factory(root.RtsmunityPublicApiSdk.ApiClient, root.RtsmunityPublicApiSdk.InlineResponse20012, root.RtsmunityPublicApiSdk.InlineResponse20010, root.RtsmunityPublicApiSdk.InlineResponse20013);
  }
}(this, function(ApiClient, InlineResponse20012, InlineResponse20010, InlineResponse20013) {
  'use strict';

  /**
   * Matches service.
   * @module api/MatchesApi
   * @version 1.0.0
   */

  /**
   * Constructs a new MatchesApi. 
   * @alias module:api/MatchesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getMatchPositions operation.
     * @callback module:api/MatchesApi~getMatchPositionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20012>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Match positions
     * 
     * @param {String} sport Sport key
     * @param {module:api/MatchesApi~getMatchPositionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20012>}
     */
    this.getMatchPositions = function(sport, callback) {
      var postBody = null;

      // verify the required parameter 'sport' is set
      if (sport == undefined || sport == null) {
        throw "Missing the required parameter 'sport' when calling getMatchPositions";
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
      var returnType = [InlineResponse20012];

      return this.apiClient.callApi(
        '/{sport}/match/positions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMatchStates operation.
     * @callback module:api/MatchesApi~getMatchStatesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20010>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Matches states
     * 
     * @param {String} sport Sport key
     * @param {module:api/MatchesApi~getMatchStatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20010>}
     */
    this.getMatchStates = function(sport, callback) {
      var postBody = null;

      // verify the required parameter 'sport' is set
      if (sport == undefined || sport == null) {
        throw "Missing the required parameter 'sport' when calling getMatchStates";
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
      var returnType = [InlineResponse20010];

      return this.apiClient.callApi(
        '/{sport}/match/states', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMatches operation.
     * @callback module:api/MatchesApi~getMatchesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse20013>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List All Matches in Series
     * 
     * @param {String} sport Sport key
     * @param {Object} opts Optional parameters
     * @param {Number} opts.tournamentId ID of the tournament in the form of an integer
     * @param {Number} opts.leagueId ID of the league in the form of an integer
     * @param {Number} opts.seriesId ID of the series in the form of an integer
     * @param {module:api/MatchesApi~getMatchesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/InlineResponse20013>}
     */
    this.getMatches = function(sport, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sport' is set
      if (sport == undefined || sport == null) {
        throw "Missing the required parameter 'sport' when calling getMatches";
      }


      var pathParams = {
        'sport': sport
      };
      var queryParams = {
        'tournament_id': opts['tournamentId'],
        'league_id': opts['leagueId'],
        'series_id': opts['seriesId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = [InlineResponse20013];

      return this.apiClient.callApi(
        '/{sport}/matches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
