# .AccessManagementApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiKey**](AccessManagementApi.md#getApiKey) | **GET** /v1/metronome/api-keys/{api-key} | 
[**getManyApiKeys**](AccessManagementApi.md#getManyApiKeys) | **GET** /v1/metronome/api-keys | 
[**putApiKey**](AccessManagementApi.md#putApiKey) | **PUT** /v1/metronome/api-keys/{api-key} | 
[**signUp**](AccessManagementApi.md#signUp) | **PUT** /v1/metronome/sign-up | 


# **getApiKey**
> ApiKeyData getApiKey()

Read a specific API key

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccessManagementApi(configuration);

let body:.AccessManagementApiGetApiKeyRequest = {
  // string
  apiKey: "api-key_example",
};

apiInstance.getApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKey** | [**string**] |  | defaults to undefined


### Return type

**ApiKeyData**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | API key data |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getManyApiKeys**
> GetManyApiKeys200Response getManyApiKeys()

Read many API keys alphanumerically sorted

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccessManagementApi(configuration);

let body:.AccessManagementApiGetManyApiKeysRequest = {
  // number | The number of keys to drop from the start (optional)
  offset: 1,
  // number | The number of keys to include (optional)
  limit: 1,
  // boolean | Whether to include permissions, status, description etc. (optional)
  includeData: true,
};

apiInstance.getManyApiKeys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | The number of keys to drop from the start | (optional) defaults to undefined
 **limit** | [**number**] | The number of keys to include | (optional) defaults to undefined
 **includeData** | [**boolean**] | Whether to include permissions, status, description etc. | (optional) defaults to undefined


### Return type

**GetManyApiKeys200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of API keys with or without their data |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putApiKey**
> CreateOrModifyApiKeyResponse putApiKey()

Create or modify an API key

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccessManagementApi(configuration);

let body:.AccessManagementApiPutApiKeyRequest = {
  // string | The API key to be modified or 'create' for a new key
  apiKey: "api-key_example",
  // PutApiKeyRequest (optional)
  putApiKeyRequest: null,
};

apiInstance.putApiKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **putApiKeyRequest** | **PutApiKeyRequest**|  |
 **apiKey** | [**string**] | The API key to be modified or &#39;create&#39; for a new key | defaults to undefined


### Return type

**CreateOrModifyApiKeyResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Create or modify successful |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **signUp**
> SignupResponse signUp()

Open end point for signing up new customers

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccessManagementApi(configuration);

let body:.AccessManagementApiSignUpRequest = {
  // SignupRequest (optional)
  signupRequest: {
    internalContact: "data-protection-it-manager@yourdomain.com",
  },
};

apiInstance.signUp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signupRequest** | **SignupRequest**|  |


### Return type

**SignupResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer created successfully |  -  |
**400** | Input data validation error |  -  |
**409** | The requested customer ID is not available |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


