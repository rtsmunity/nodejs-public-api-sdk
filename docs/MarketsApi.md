# RtsmunityPublicApiSdk.MarketsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMarketCloseTimes**](MarketsApi.md#getMarketCloseTimes) | **GET** /{sport}/market/close_times | List All Markets close times
[**getMarketResolveTimes**](MarketsApi.md#getMarketResolveTimes) | **GET** /{sport}/market/resolve_times | List All Markets resolve times
[**getMarketSelections**](MarketsApi.md#getMarketSelections) | **GET** /{sport}/market/selections | List All Selections
[**getMarketStates**](MarketsApi.md#getMarketStates) | **GET** /{sport}/market/states | List All Markets states
[**getMarkets**](MarketsApi.md#getMarkets) | **GET** /{sport}/markets | List All Markets


<a name="getMarketCloseTimes"></a>
# **getMarketCloseTimes**
> [InlineResponse2008] getMarketCloseTimes(sport)

List All Markets close times



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.MarketsApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketCloseTimes(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse2008]**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMarketResolveTimes"></a>
# **getMarketResolveTimes**
> [InlineResponse2008] getMarketResolveTimes(sport)

List All Markets resolve times



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.MarketsApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketResolveTimes(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse2008]**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMarketSelections"></a>
# **getMarketSelections**
> [InlineResponse2009] getMarketSelections(sport)

List All Selections



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.MarketsApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketSelections(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse2009]**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="getMarketStates"></a>
# **getMarketStates**
> [InlineResponse20010] getMarketStates(sport)

List All Markets states



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.MarketsApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarketStates(sport, callback);
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

<a name="getMarkets"></a>
# **getMarkets**
> [InlineResponse20011] getMarkets(sport)

List All Markets



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.MarketsApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMarkets(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse20011]**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

