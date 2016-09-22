# RtsmunityPublicApiSdk.LeaguesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLeagues**](LeaguesApi.md#getLeagues) | **GET** /{sport}/leagues | List All Leagues


<a name="getLeagues"></a>
# **getLeagues**
> [InlineResponse2001] getLeagues(sport)

List All Leagues



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.LeaguesApi();

var sport = "sport_example"; // String | Sport key


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLeagues(sport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

