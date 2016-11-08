# Node.js PULL API SDK

You need to have **API key** and **client certificate** to use this SDK.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

```shell
npm install rtsmunity-public-api-sdk --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var RTSmunitySDK = require('rtsmunity-public-api-sdk');

var API_KEY = 'YOUR-API-KEY'
var KEY_PATH = 'PATH_TO_YOUR_CLIENT_KEY'
var CERT_PATH = 'PATH_TO_YOUR_CLIENT_CRT'
var PASSPHRASE = 'PASSPHRASE_FOR_YOUR_CLIENT_KEY'

var api = RTSmunitySDK.init(API_KEY, KEY_PATH, CERT_PATH, PASSPHRASE, RTSmunitySDK.MODE.SANDBOX)

api.sports.getSports((err, sports) => {
  if (err) {
    console.log('Unable to get sports')
    console.log(err)
  } else {
    console.log('Sports:')
    console.log(sports)
  }
})

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*api.leagues* | [**getLeagues**](docs/LeaguesApi.md#getLeagues) | **GET** /{sport}/leagues | List All Leagues
*api.liveMatches* | [**getMatchFeed**](docs/LiveMatchesApi.md#getMatchFeed) | **GET** /{sport}/live/matches/{id}/feed | Match feed
*api.liveMatches* | [**getMatchState**](docs/LiveMatchesApi.md#getMatchState) | **GET** /{sport}/live/matches/{id}/state | Match state
*api.liveMatches* | [**getMatchStatisticsFeed**](docs/LiveMatchesApi.md#getMatchStatisticsFeed) | **GET** /{sport}/live/matches/{id}/statistics/feed | Match statistics feed
*api.liveMatches* | [**getMatchStatisticsState**](docs/LiveMatchesApi.md#getMatchStatisticsState) | **GET** /{sport}/live/matches/{id}/statistics/state | Match statistics state
*api.liveMatches* | [**getMatches**](docs/LiveMatchesApi.md#getMatches) | **GET** /{sport}/live/matches | List All Live Matches
*api.liveSeries* | [**getSeries**](docs/LiveSeriesApi.md#getSeries) | **GET** /{sport}/live/series | List All Live Series
*api.liveSeries* | [**getSeriesFeed**](docs/LiveSeriesApi.md#getSeriesFeed) | **GET** /{sport}/live/series/{id}/feed | Series feed
*api.liveSeries* | [**getSeriesState**](docs/LiveSeriesApi.md#getSeriesState) | **GET** /{sport}/live/series/{id}/state | Series state
*api.markets* | [**getMarketCloseTimes**](docs/MarketsApi.md#getMarketCloseTimes) | **GET** /{sport}/market/close_times | List All Markets close times
*api.markets* | [**getMarketResolveTimes**](docs/MarketsApi.md#getMarketResolveTimes) | **GET** /{sport}/market/resolve_times | List All Markets resolve times
*api.markets* | [**getMarketSelections**](docs/MarketsApi.md#getMarketSelections) | **GET** /{sport}/market/selections | List All Selections
*api.markets* | [**getMarketStates**](docs/MarketsApi.md#getMarketStates) | **GET** /{sport}/market/states | List All Markets states
*api.markets* | [**getMarkets**](docs/MarketsApi.md#getMarkets) | **GET** /{sport}/markets | List All Markets
*api.matches* | [**getMatchPositions**](docs/MatchesApi.md#getMatchPositions) | **GET** /{sport}/match/positions | List All Match positions
*api.matches* | [**getMatchStates**](docs/MatchesApi.md#getMatchStates) | **GET** /{sport}/match/states | List All Matches states
*api.matches* | [**getMatches**](docs/MatchesApi.md#getMatches) | **GET** /{sport}/matches | List All Matches in Series
*api.players* | [**getPlayers**](docs/PlayersApi.md#getPlayers) | **GET** /{sport}/players | List All Players
*api.series* | [**getSeries**](docs/SeriesApi.md#getSeries) | **GET** /{sport}/series | List All Series for tournament
*api.series* | [**getSeriesState**](docs/SeriesApi.md#getSeriesState) | **GET** /{sport}/series/states/{id} | Get concrete Series state
*api.series* | [**getSeriesStates**](docs/SeriesApi.md#getSeriesStates) | **GET** /{sport}/series/states | List All Series states
*api.series* | [**getSeriesTypes**](docs/SeriesApi.md#getSeriesTypes) | **GET** /{sport}/series/types | List All Series types
*api.sports* | [**getSports**](docs/SportsApi.md#getSports) | **GET** /sports | List All Sports
*api.teams* | [**getTeams**](docs/TeamsApi.md#getTeams) | **GET** /{sport}/teams | List All Teams
*api.tournaments* | [**getTournaments**](docs/TournamentsApi.md#getTournaments) | **GET** /{sport}/tournaments | List All Tournaments
