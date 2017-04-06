# RtsmunityPublicApiSdk.TournamentsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTournaments**](TournamentsApi.md#getTournaments) | **GET** /{sport}/tournaments | List All Tournaments


<a name="getTournaments"></a>
# **getTournaments**
> [InlineResponse20017] getTournaments(sport, opts)

List All Tournaments



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.TournamentsApi();

var sport = "sport_example"; // String | Sport key

var opts = { 
  'dateFrom': "dateFrom_example", // String | Date to which filter tournaments
  'dateTo': "dateTo_example" // String | Date to which filter tournaments
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTournaments(sport, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sport** | **String**| Sport key | 
 **dateFrom** | **String**| Date to which filter tournaments | [optional] 
 **dateTo** | **String**| Date to which filter tournaments | [optional] 

### Return type

[**[InlineResponse20017]**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

