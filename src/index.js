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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse20010', 'model/InlineResponse20011', 'model/InlineResponse20012', 'model/InlineResponse20013', 'model/InlineResponse20014', 'model/InlineResponse20015', 'model/InlineResponse20016', 'model/InlineResponse20017', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2003Markets', 'model/InlineResponse2003Probabilities', 'model/InlineResponse2004', 'model/InlineResponse2004Match', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2007Series', 'model/InlineResponse2008', 'model/InlineResponse2009', 'api/LeaguesApi', 'api/LiveMatchesApi', 'api/LiveSeriesApi', 'api/MarketsApi', 'api/MatchesApi', 'api/PlayersApi', 'api/SeriesApi', 'api/SportsApi', 'api/StatisticsApi', 'api/TeamsApi', 'api/TournamentsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse20010'), require('./model/InlineResponse20011'), require('./model/InlineResponse20012'), require('./model/InlineResponse20013'), require('./model/InlineResponse20014'), require('./model/InlineResponse20015'), require('./model/InlineResponse20016'), require('./model/InlineResponse20017'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2003Markets'), require('./model/InlineResponse2003Probabilities'), require('./model/InlineResponse2004'), require('./model/InlineResponse2004Match'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2007Series'), require('./model/InlineResponse2008'), require('./model/InlineResponse2009'), require('./api/LeaguesApi'), require('./api/LiveMatchesApi'), require('./api/LiveSeriesApi'), require('./api/MarketsApi'), require('./api/MatchesApi'), require('./api/PlayersApi'), require('./api/SeriesApi'), require('./api/SportsApi'), require('./api/StatisticsApi'), require('./api/TeamsApi'), require('./api/TournamentsApi'));
  }
}(function(ApiClient, InlineResponse200, InlineResponse2001, InlineResponse20010, InlineResponse20011, InlineResponse20012, InlineResponse20013, InlineResponse20014, InlineResponse20015, InlineResponse20016, InlineResponse20017, InlineResponse2002, InlineResponse2003, InlineResponse2003Markets, InlineResponse2003Probabilities, InlineResponse2004, InlineResponse2004Match, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2007Series, InlineResponse2008, InlineResponse2009, LeaguesApi, LiveMatchesApi, LiveSeriesApi, MarketsApi, MatchesApi, PlayersApi, SeriesApi, SportsApi, StatisticsApi, TeamsApi, TournamentsApi) {
  'use strict';

  /**
   * RTSmunity REST API SDK.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var RtsmunityPublicApiSdk = require('index'); // See note below*.
   * var xxxSvc = new RtsmunityPublicApiSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new RtsmunityPublicApiSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new RtsmunityPublicApiSdk.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new RtsmunityPublicApiSdk.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010: InlineResponse20010,
    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011: InlineResponse20011,
    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012: InlineResponse20012,
    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013: InlineResponse20013,
    /**
     * The InlineResponse20014 model constructor.
     * @property {module:model/InlineResponse20014}
     */
    InlineResponse20014: InlineResponse20014,
    /**
     * The InlineResponse20015 model constructor.
     * @property {module:model/InlineResponse20015}
     */
    InlineResponse20015: InlineResponse20015,
    /**
     * The InlineResponse20016 model constructor.
     * @property {module:model/InlineResponse20016}
     */
    InlineResponse20016: InlineResponse20016,
    /**
     * The InlineResponse20017 model constructor.
     * @property {module:model/InlineResponse20017}
     */
    InlineResponse20017: InlineResponse20017,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2003Markets model constructor.
     * @property {module:model/InlineResponse2003Markets}
     */
    InlineResponse2003Markets: InlineResponse2003Markets,
    /**
     * The InlineResponse2003Probabilities model constructor.
     * @property {module:model/InlineResponse2003Probabilities}
     */
    InlineResponse2003Probabilities: InlineResponse2003Probabilities,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2004Match model constructor.
     * @property {module:model/InlineResponse2004Match}
     */
    InlineResponse2004Match: InlineResponse2004Match,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2007Series model constructor.
     * @property {module:model/InlineResponse2007Series}
     */
    InlineResponse2007Series: InlineResponse2007Series,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009: InlineResponse2009,
    /**
     * The LeaguesApi service constructor.
     * @property {module:api/LeaguesApi}
     */
    LeaguesApi: LeaguesApi,
    /**
     * The LiveMatchesApi service constructor.
     * @property {module:api/LiveMatchesApi}
     */
    LiveMatchesApi: LiveMatchesApi,
    /**
     * The LiveSeriesApi service constructor.
     * @property {module:api/LiveSeriesApi}
     */
    LiveSeriesApi: LiveSeriesApi,
    /**
     * The MarketsApi service constructor.
     * @property {module:api/MarketsApi}
     */
    MarketsApi: MarketsApi,
    /**
     * The MatchesApi service constructor.
     * @property {module:api/MatchesApi}
     */
    MatchesApi: MatchesApi,
    /**
     * The PlayersApi service constructor.
     * @property {module:api/PlayersApi}
     */
    PlayersApi: PlayersApi,
    /**
     * The SeriesApi service constructor.
     * @property {module:api/SeriesApi}
     */
    SeriesApi: SeriesApi,
    /**
     * The SportsApi service constructor.
     * @property {module:api/SportsApi}
     */
    SportsApi: SportsApi,
    /**
     * The StatisticsApi service constructor.
     * @property {module:api/StatisticsApi}
     */
    StatisticsApi: StatisticsApi,
    /**
     * The TeamsApi service constructor.
     * @property {module:api/TeamsApi}
     */
    TeamsApi: TeamsApi,
    /**
     * The TournamentsApi service constructor.
     * @property {module:api/TournamentsApi}
     */
    TournamentsApi: TournamentsApi
  };

  return exports;
}));
