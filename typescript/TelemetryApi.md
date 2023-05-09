# .TelemetryApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postTelemetry**](TelemetryApi.md#postTelemetry) | **POST** /v1/metronome/telemetry | 


# **postTelemetry**
> void postTelemetry()

Read items and sub-items that will or have already been expired on the given date

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TelemetryApi(configuration);

let body:.TelemetryApiPostTelemetryRequest = {
  // TelemetryRequest (optional)
  telemetryRequest: {
    observationTime: new Date('1970-01-01T00:00:00.00Z'),
    policies: ["account-login","sales-order-processing","marketing-email"],
    observations: [
      {
        itemId: "customer-123",
        subItemIds: ["email","address"],
      },
    ],
  },
};

apiInstance.postTelemetry(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telemetryRequest** | **TelemetryRequest**|  |


### Return type

**void**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All observations processed |  -  |
**202** | Some observations processed now, some are delayed but will be processed |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


