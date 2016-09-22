# RtsmunityPublicApiSdk.SportsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSports**](SportsApi.md#getSports) | **GET** /sports | List All Sports


<a name="getSports"></a>
# **getSports**
> [InlineResponse200] getSports()

List All Sports



### Example
```javascript
var RtsmunityPublicApiSdk = require('rtsmunity-public-api-sdk');

var apiInstance = new RtsmunityPublicApiSdk.SportsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSports(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

