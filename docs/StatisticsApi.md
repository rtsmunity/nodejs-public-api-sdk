# RtsmunityPublicApiSdk.StatisticsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getStatisticsStates**](StatisticsApi.md#getStatisticsStates) | **GET** /{sport}/statistics/states | List All Statistics states


<a name="getStatisticsStates"></a>
# **getStatisticsStates**
> [InlineResponse20014] getStatisticsStates(sport)

List All Statistics states



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.StatisticsApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatisticsStates(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse20014]**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

