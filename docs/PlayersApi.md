# RtsmunityPublicApiSdk.PlayersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlayers**](PlayersApi.md#getPlayers) | **GET** /{sport}/players | List All Players


<a name="getPlayers"></a>
# **getPlayers**
> [InlineResponse20012] getPlayers(sport, opts)

List All Players



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.PlayersApi();

var sport = "sport_example"; // String | Sport key

var opts = { 
  'teamId': 3.4 // Number | Filter players by team id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPlayers(sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 
 **teamId** | **Number**| Filter players by team id | [optional] 

### Return type

[**[InlineResponse20012]**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

