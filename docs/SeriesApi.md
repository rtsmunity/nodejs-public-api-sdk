# RtsmunityPublicApiSdk.SeriesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSeries**](SeriesApi.md#getSeries) | **GET** /{sport}/series | List All Series for tournament
[**getSeriesState**](SeriesApi.md#getSeriesState) | **GET** /{sport}/series/states/{id} | Get concrete Series state
[**getSeriesStates**](SeriesApi.md#getSeriesStates) | **GET** /{sport}/series/states | List All Series states
[**getSeriesTypes**](SeriesApi.md#getSeriesTypes) | **GET** /{sport}/series/types | List All Series types


<a name="getSeries"></a>
# **getSeries**
> [InlineResponse20015] getSeries(sport, opts)

List All Series for tournament



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.SeriesApi();

var sport = "sport_example"; // String | Sport key

var opts = { 
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
 **tournamentId** | **Number**| ID of the tournament in the form of an integer | [optional] 

### Return type

[**[InlineResponse20015]**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getSeriesState"></a>
# **getSeriesState**
> InlineResponse20016 getSeriesState(id, sport)

Get concrete Series state



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.SeriesApi();

var id = 3.4; // Number | ID of the state in the form of an integer

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSeriesState(id, sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the state in the form of an integer | 
 **sport** | **String**| Sport key | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getSeriesStates"></a>
# **getSeriesStates**
> [InlineResponse20016] getSeriesStates(sport)

List All Series states



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.SeriesApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSeriesStates(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse20016]**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getSeriesTypes"></a>
# **getSeriesTypes**
> [InlineResponse20017] getSeriesTypes(sport)

List All Series types



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.SeriesApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSeriesTypes(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse20017]**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

