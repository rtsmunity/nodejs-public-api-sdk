# RtsmunityPublicApiSdk.MatchesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMatchPositions**](MatchesApi.md#getMatchPositions) | **GET** /{sport}/match/positions | List All Match positions
[**getMatchStates**](MatchesApi.md#getMatchStates) | **GET** /{sport}/match/states | List All Matches states
[**getMatches**](MatchesApi.md#getMatches) | **GET** /{sport}/matches | List All Matches in Series


<a name="getMatchPositions"></a>
# **getMatchPositions**
> [InlineResponse20012] getMatchPositions(sport)

List All Match positions



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.MatchesApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMatchPositions(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse20012]**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMatchStates"></a>
# **getMatchStates**
> [InlineResponse20010] getMatchStates(sport)

List All Matches states



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.MatchesApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMatchStates(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse20010]**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMatches"></a>
# **getMatches**
> [InlineResponse20013] getMatches(sport, opts)

List All Matches in Series



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.MatchesApi();

var sport = "sport_example"; // String | Sport key

var opts = { 
  'tournamentId': 3.4, // Number | ID of the tournament in the form of an integer
  'leagueId': 3.4, // Number | ID of the league in the form of an integer
  'seriesId': 3.4 // Number | ID of the series in the form of an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMatches(sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 
 **tournamentId** | **Number**| ID of the tournament in the form of an integer | [optional] 
 **leagueId** | **Number**| ID of the league in the form of an integer | [optional] 
 **seriesId** | **Number**| ID of the series in the form of an integer | [optional] 

### Return type

[**[InlineResponse20013]**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

