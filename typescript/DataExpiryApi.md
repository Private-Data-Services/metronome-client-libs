# .DataExpiryApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getExpiryNotices**](DataExpiryApi.md#getExpiryNotices) | **GET** /v1/metronome/expiry-notices/{date} | 


# **getExpiryNotices**
> ExpiryResponse getExpiryNotices()

Read items and sub-items that will or have already been expired on the given date

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DataExpiryApi(configuration);

let body:.DataExpiryApiGetExpiryNoticesRequest = {
  // string | The date to query
  date: new Date('1970-01-01').toISOString().split('T')[0];,
};

apiInstance.getExpiryNotices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | [**string**] | The date to query | defaults to undefined


### Return type

**ExpiryResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Items and sub-items that will expire in the future or have expired in the past |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


