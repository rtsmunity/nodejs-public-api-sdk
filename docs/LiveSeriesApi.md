# RtsmunityPublicApiSdk.LiveSeriesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSeries**](LiveSeriesApi.md#getSeries) | **GET** /{sport}/live/series | List All Live Series
[**getSeriesFeed**](LiveSeriesApi.md#getSeriesFeed) | **GET** /{sport}/live/series/{id}/feed | Series feed
[**getSeriesState**](LiveSeriesApi.md#getSeriesState) | **GET** /{sport}/live/series/{id}/state | Series state


<a name="getSeries"></a>
# **getSeries**
> [InlineResponse2005] getSeries(sport, opts)

List All Live Series



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LiveSeriesApi();

var sport = "sport_example"; // String | Sport key

var opts = { 
  'leagueId': 3.4, // Number | ID of the league in the form of an integer
  'tournamentId': 3.4 // Number | ID of the tournament in the form of an integer
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSeries(sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 
 **leagueId** | **Number**| ID of the league in the form of an integer | [optional] 
 **tournamentId** | **Number**| ID of the tournament in the form of an integer | [optional] 

### Return type

[**[InlineResponse2005]**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getSeriesFeed"></a>
# **getSeriesFeed**
> InlineResponse2006 getSeriesFeed(id, sport, opts)

Series feed



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LiveSeriesApi();

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
apiInstance.getSeriesFeed(id, sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the match in the form of an integer | 
 **sport** | **String**| Sport key | 
 **sequence** | **Number**| Sequence number for filtering states | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getSeriesState"></a>
# **getSeriesState**
> InlineResponse2007 getSeriesState(id, sport, opts)

Series state



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LiveSeriesApi();

var id = 3.4; // Number | ID of the series in the form of an integer

var sport = "sport_example"; // String | Sport key

var opts = { 
  'sequence': 3.4, // Number | Sequence number for filtering
  'expand': "expand_example" // String | Expand series detail
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSeriesState(id, sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the series in the form of an integer | 
 **sport** | **String**| Sport key | 
 **sequence** | **Number**| Sequence number for filtering | [optional] 
 **expand** | **String**| Expand series detail | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

