# .PolicyManagementApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getManyPolicies**](PolicyManagementApi.md#getManyPolicies) | **GET** /v1/metronome/policies | 
[**getPolicy**](PolicyManagementApi.md#getPolicy) | **GET** /v1/metronome/policies/{policy-id} | 
[**getPolicyLog**](PolicyManagementApi.md#getPolicyLog) | **GET** /v1/metronome/policies/{policy-id}/log | 
[**getPolicyMembers**](PolicyManagementApi.md#getPolicyMembers) | **GET** /v1/metronome/policies/{policy-id}/members | 
[**putPolicy**](PolicyManagementApi.md#putPolicy) | **PUT** /v1/metronome/policies/{policy-id} | 


# **getManyPolicies**
> GetManyPolicies200Response getManyPolicies()

Read many policies alphanumerically sorted

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PolicyManagementApi(configuration);

let body:.PolicyManagementApiGetManyPoliciesRequest = {
  // string (optional)
  prefix: "marketing-",
  // number | The number of policies to drop from the start (optional)
  offset: 1,
  // number | The number of policies to include (optional)
  limit: 1,
  // boolean | Whether to include aging-strategy, aging-offset-amount, aging-offset-unit etc. (optional)
  includeData: true,
};

apiInstance.getManyPolicies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prefix** | [**string**] |  | (optional) defaults to undefined
 **offset** | [**number**] | The number of policies to drop from the start | (optional) defaults to undefined
 **limit** | [**number**] | The number of policies to include | (optional) defaults to undefined
 **includeData** | [**boolean**] | Whether to include aging-strategy, aging-offset-amount, aging-offset-unit etc. | (optional) defaults to undefined


### Return type

**GetManyPolicies200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of policies with or without their data |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPolicy**
> PolicyData getPolicy()

Read a specific policy

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PolicyManagementApi(configuration);

let body:.PolicyManagementApiGetPolicyRequest = {
  // string
  policyId: "policy-id_example",
};

apiInstance.getPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyId** | [**string**] |  | defaults to undefined


### Return type

**PolicyData**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy data |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPolicyLog**
> PolicyData getPolicyLog()

Read a specific policy's access log

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PolicyManagementApi(configuration);

let body:.PolicyManagementApiGetPolicyLogRequest = {
  // string
  policyId: "policy-id_example",
};

apiInstance.getPolicyLog(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyId** | [**string**] |  | defaults to undefined


### Return type

**PolicyData**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy data |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPolicyMembers**
> PolicyData getPolicyMembers()

Read the items and sub-items that have been used for a specific policy

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PolicyManagementApi(configuration);

let body:.PolicyManagementApiGetPolicyMembersRequest = {
  // string
  policyId: "policy-id_example",
};

apiInstance.getPolicyMembers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyId** | [**string**] |  | defaults to undefined


### Return type

**PolicyData**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy data |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **putPolicy**
> CreateOrModifyPolicyResponse putPolicy()

Create or modify a policy

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PolicyManagementApi(configuration);

let body:.PolicyManagementApiPutPolicyRequest = {
  // string | The name of the policy to be created
  policyId: "policy-id_example",
  // CreateOrModifyPolicyRequest (optional)
  createOrModifyPolicyRequest: {
    agingStrategy: "since-first-read-or-write",
    agingOffsetAmount: 1,
    agingOffsetUnit: "year",
  },
};

apiInstance.putPolicy(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrModifyPolicyRequest** | **CreateOrModifyPolicyRequest**|  |
 **policyId** | [**string**] | The name of the policy to be created | defaults to undefined


### Return type

**CreateOrModifyPolicyResponse**

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


