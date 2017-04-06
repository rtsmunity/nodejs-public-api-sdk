# RtsmunityPublicApiSdk.LiveMatchesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMatchFeed**](LiveMatchesApi.md#getMatchFeed) | **GET** /{sport}/live/matches/{id}/feed | Match feed
[**getMatchState**](LiveMatchesApi.md#getMatchState) | **GET** /{sport}/live/matches/{id}/state | Match state
[**getMatchStatisticsFeed**](LiveMatchesApi.md#getMatchStatisticsFeed) | **GET** /{sport}/live/matches/{id}/statistics/feed | Match statistics feed
[**getMatchStatisticsState**](LiveMatchesApi.md#getMatchStatisticsState) | **GET** /{sport}/live/matches/{id}/statistics/state | Match statistics state
[**getMatches**](LiveMatchesApi.md#getMatches) | **GET** /{sport}/live/matches | List All Live Matches


<a name="getMatchFeed"></a>
# **getMatchFeed**
> InlineResponse2003 getMatchFeed(id, sport, opts)

Match feed



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LiveMatchesApi();

var id = 3.4; // Number | ID of the match in the form of an integer

var sport = "sport_example"; // String | Sport key

var opts = { 
  'sequence': 3.4 // Number | Sequence number for filtering states
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMatchFeed(id, sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the match in the form of an integer | 
 **sport** | **String**| Sport key | 
 **sequence** | **Number**| Sequence number for filtering states | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMatchState"></a>
# **getMatchState**
> InlineResponse2004 getMatchState(id, sport, opts)

Match state



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LiveMatchesApi();

var id = 3.4; // Number | ID of the match in the form of an integer

var sport = "sport_example"; // String | Sport key

var opts = { 
  'sequence': 3.4, // Number | Sequence number for filtering
  'expand': "expand_example" // String | Expand match detail
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMatchState(id, sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the match in the form of an integer | 
 **sport** | **String**| Sport key | 
 **sequence** | **Number**| Sequence number for filtering | [optional] 
 **expand** | **String**| Expand match detail | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMatchStatisticsFeed"></a>
# **getMatchStatisticsFeed**
> getMatchStatisticsFeed(id, sport, opts)

Match statistics feed

+ Schema         {             \&quot;type\&quot;: \&quot;object\&quot;,             \&quot;properties\&quot;: {                 \&quot;sequence\&quot;: {                     \&quot;type\&quot;: \&quot;number\&quot;                 },                 \&quot;match_time\&quot;: {                     \&quot;type\&quot;: \&quot;number\&quot;                 },                 \&quot;match_id\&quot;: {                     \&quot;type\&quot;: \&quot;number\&quot;                 },                 \&quot;date_created\&quot;: {                     \&quot;type\&quot;: \&quot;string\&quot;                 },                 \&quot;home_is_dark\&quot;: {                     \&quot;type\&quot;: \&quot;boolean\&quot;                 },                 \&quot;round_number\&quot;: {                     \&quot;type\&quot;: \&quot;number\&quot;                 },                 \&quot;map_name\&quot;: {                     \&quot;type\&quot;: \&quot;string\&quot;                 },                 \&quot;home_team\&quot;: {                     \&quot;type\&quot;: \&quot;object\&quot;,                     \&quot;properties\&quot;: {                         \&quot;type\&quot;: \&quot;object\&quot;,                         \&quot;properties\&quot;: {                             \&quot;turrets\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;towers\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;round_score\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;kills\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;gold\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             }                         }                     }                 },                 \&quot;away_team\&quot;: {                     \&quot;type\&quot;: \&quot;object\&quot;,                     \&quot;properties\&quot;: {                         \&quot;type\&quot;: \&quot;object\&quot;,                         \&quot;properties\&quot;: {                             \&quot;turrets\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;towers\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;round_score\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;kills\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;gold\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             }                         }                     }                 }             }         }

### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LiveMatchesApi();

var id = 3.4; // Number | ID of the match in the form of an integer

var sport = "sport_example"; // String | Sport key

var opts = { 
  'sequence': 3.4 // Number | Sequence number for filtering states
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getMatchStatisticsFeed(id, sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the match in the form of an integer | 
 **sport** | **String**| Sport key | 
 **sequence** | **Number**| Sequence number for filtering states | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMatchStatisticsState"></a>
# **getMatchStatisticsState**
> getMatchStatisticsState(id, sport, opts)

Match statistics state

+ Schema         {             \&quot;type\&quot;: \&quot;object\&quot;,             \&quot;properties\&quot;: {                 \&quot;sequence\&quot;: {                     \&quot;type\&quot;: \&quot;number\&quot;                 },                 \&quot;match_time\&quot;: {                     \&quot;type\&quot;: \&quot;number\&quot;                 },                 \&quot;match_id\&quot;: {                     \&quot;type\&quot;: \&quot;number\&quot;                 },                 \&quot;date_created\&quot;: {                     \&quot;type\&quot;: \&quot;string\&quot;                 },                 \&quot;home_is_dark\&quot;: {                     \&quot;type\&quot;: \&quot;boolean\&quot;                 },                 \&quot;round_number\&quot;: {                     \&quot;type\&quot;: \&quot;number\&quot;                 },                 \&quot;map_name\&quot;: {                     \&quot;type\&quot;: \&quot;string\&quot;                 },                 \&quot;home_team\&quot;: {                     \&quot;type\&quot;: \&quot;object\&quot;,                     \&quot;properties\&quot;: {                         \&quot;type\&quot;: \&quot;object\&quot;,                         \&quot;properties\&quot;: {                             \&quot;turrets\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;towers\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;round_score\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;kills\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;gold\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             }                         }                     }                 },                 \&quot;away_team\&quot;: {                     \&quot;type\&quot;: \&quot;object\&quot;,                     \&quot;properties\&quot;: {                         \&quot;type\&quot;: \&quot;object\&quot;,                         \&quot;properties\&quot;: {                             \&quot;turrets\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;towers\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;round_score\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;kills\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             },                             \&quot;gold\&quot;: {                                 \&quot;type\&quot;: \&quot;number\&quot;                             }                         }                     }                 }             }         }

### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LiveMatchesApi();

var id = 3.4; // Number | ID of the match in the form of an integer

var sport = "sport_example"; // String | Sport key

var opts = { 
  'sequence': 3.4, // Number | Sequence number for filtering
  'expand': "expand_example" // String | Expand match detail
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getMatchStatisticsState(id, sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the match in the form of an integer | 
 **sport** | **String**| Sport key | 
 **sequence** | **Number**| Sequence number for filtering | [optional] 
 **expand** | **String**| Expand match detail | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMatches"></a>
# **getMatches**
> [InlineResponse2002] getMatches(sport, opts)

List All Live Matches



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LiveMatchesApi();

var sport = "sport_example"; // String | Sport key

var opts = { 
  'leagueId': 3.4, // Number | ID of the league in the form of an integer
  'tournamentId': 3.4, // Number | ID of the tournament in the form of an integer
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
 **leagueId** | **Number**| ID of the league in the form of an integer | [optional] 
 **tournamentId** | **Number**| ID of the tournament in the form of an integer | [optional] 
 **seriesId** | **Number**| ID of the series in the form of an integer | [optional] 

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

