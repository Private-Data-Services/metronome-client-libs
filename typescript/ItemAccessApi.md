# .ItemAccessApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expireItem**](ItemAccessApi.md#expireItem) | **DELETE** /v1/metronome/items/{item-id} | 
[**expireSubItem**](ItemAccessApi.md#expireSubItem) | **DELETE** /v1/metronome/items/{item-id}/{sub-item-id} | 
[**getItemLog**](ItemAccessApi.md#getItemLog) | **GET** /v1/metronome/items/{item-id}/log | 
[**getItemMetadata**](ItemAccessApi.md#getItemMetadata) | **GET** /v1/metronome/items/{item-id} | 
[**getItemPolicies**](ItemAccessApi.md#getItemPolicies) | **GET** /v1/metronome/items/{item-id}/policies | 
[**getSubItemLog**](ItemAccessApi.md#getSubItemLog) | **GET** /v1/metronome/items/{item-id}/{sub-item-id}/log | 
[**getSubItemMetadata**](ItemAccessApi.md#getSubItemMetadata) | **GET** /v1/metronome/items/{item-id}/{sub-item-id} | 
[**getSubItemPolicies**](ItemAccessApi.md#getSubItemPolicies) | **GET** /v1/metronome/items/{item-id}/{sub-item-id}/policies | 


# **expireItem**
> ExpireItemResponse expireItem()

Expire an item and its sub-items immediately

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemAccessApi(configuration);

let body:.ItemAccessApiExpireItemRequest = {
  // string | The ID of the item being expired
  itemId: "item-id_example",
};

apiInstance.expireItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] | The ID of the item being expired | defaults to undefined


### Return type

**ExpireItemResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item expired successfully |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**404** | Item does not exist or has already expired |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expireSubItem**
> ExpireSubItemResponse expireSubItem()

Expire a sub-item immediately

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemAccessApi(configuration);

let body:.ItemAccessApiExpireSubItemRequest = {
  // string | The parent item ID of the sub-item being expired
  itemId: "item-id_example",
  // string | The sub-item ID being expired
  subItemId: "sub-item-id_example",
};

apiInstance.expireSubItem(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] | The parent item ID of the sub-item being expired | defaults to undefined
 **subItemId** | [**string**] | The sub-item ID being expired | defaults to undefined


### Return type

**ExpireSubItemResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sub-item expired successfully |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**404** | Sub-item does not exist or has already expired |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getItemLog**
> ItemOrSubItemAccessLog getItemLog()

Read a specific item's access log

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemAccessApi(configuration);

let body:.ItemAccessApiGetItemLogRequest = {
  // string | The ID of the item to be read
  itemId: "item-id_example",
  // boolean | Mutually exclusive with specifying the specific sub-items to read. (optional)
  startDate: true,
  // boolean (optional)
  endDate: true,
};

apiInstance.getItemLog(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] | The ID of the item to be read | defaults to undefined
 **startDate** | [**boolean**] | Mutually exclusive with specifying the specific sub-items to read. | (optional) defaults to undefined
 **endDate** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**ItemOrSubItemAccessLog**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item access log |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getItemMetadata**
> ItemMetadataResponse getItemMetadata()

Read a specific item's metadata with or without any sub-items.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemAccessApi(configuration);

let body:.ItemAccessApiGetItemMetadataRequest = {
  // string | The ID of the item to be read
  itemId: "item-id_example",
  // boolean | Mutually exclusive with specifying the specific sub-items to read. (optional)
  allSubItems: true,
  // boolean (optional)
  noItemContent: true,
  // Array<string> | Mutually exclusive with all-sub-items=true.  If you only wish to read a few specific sub-items with this item, include each sub-item name in multiple form parameters eg https://url/v1/metronome/items/customer-123?sub-item=email&sub-item=mobile-phone&sub-item=address (optional)
  subItem: [
    "sub-item_example",
  ],
};

apiInstance.getItemMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] | The ID of the item to be read | defaults to undefined
 **allSubItems** | [**boolean**] | Mutually exclusive with specifying the specific sub-items to read. | (optional) defaults to undefined
 **noItemContent** | [**boolean**] |  | (optional) defaults to undefined
 **subItem** | **Array&lt;string&gt;** | Mutually exclusive with all-sub-items&#x3D;true.  If you only wish to read a few specific sub-items with this item, include each sub-item name in multiple form parameters eg https://url/v1/metronome/items/customer-123?sub-item&#x3D;email&amp;sub-item&#x3D;mobile-phone&amp;sub-item&#x3D;address | (optional) defaults to undefined


### Return type

**ItemMetadataResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item data |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getItemPolicies**
> ItemOrSubItemPolicyResponse getItemPolicies()

Read which policies have been applied to a specific item

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemAccessApi(configuration);

let body:.ItemAccessApiGetItemPoliciesRequest = {
  // string | The ID of the item to be read
  itemId: "item-id_example",
};

apiInstance.getItemPolicies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] | The ID of the item to be read | defaults to undefined


### Return type

**ItemOrSubItemPolicyResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item policies |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubItemLog**
> ItemOrSubItemAccessLog getSubItemLog()

Read a specific sub-item's access log

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemAccessApi(configuration);

let body:.ItemAccessApiGetSubItemLogRequest = {
  // string | The parent item ID of the sub-item being read
  itemId: "item-id_example",
  // string | The sub-item ID to be read
  subItemId: "sub-item-id_example",
};

apiInstance.getSubItemLog(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] | The parent item ID of the sub-item being read | defaults to undefined
 **subItemId** | [**string**] | The sub-item ID to be read | defaults to undefined


### Return type

**ItemOrSubItemAccessLog**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sub-item access log |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**404** | Item does not exist or has already expired |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubItemMetadata**
> SubItemMetadataResponse getSubItemMetadata()

Read a specific sub-item's metadata

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemAccessApi(configuration);

let body:.ItemAccessApiGetSubItemMetadataRequest = {
  // string | The parent item ID of the sub-item being read
  itemId: "item-id_example",
  // string | The sub-item ID to be read
  subItemId: "sub-item-id_example",
};

apiInstance.getSubItemMetadata(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] | The parent item ID of the sub-item being read | defaults to undefined
 **subItemId** | [**string**] | The sub-item ID to be read | defaults to undefined


### Return type

**SubItemMetadataResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sub-item metadata |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**404** | Item does not exist or has already expired |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSubItemPolicies**
> ItemOrSubItemPolicyResponse getSubItemPolicies()

Read which policies have been applied to a specific sub-item

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ItemAccessApi(configuration);

let body:.ItemAccessApiGetSubItemPoliciesRequest = {
  // string | The parent item ID of the sub-item being read
  itemId: "item-id_example",
  // string | The sub-item ID to be read
  subItemId: "sub-item-id_example",
};

apiInstance.getSubItemPolicies(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemId** | [**string**] | The parent item ID of the sub-item being read | defaults to undefined
 **subItemId** | [**string**] | The sub-item ID to be read | defaults to undefined


### Return type

**ItemOrSubItemPolicyResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sub-item policies |  -  |
**400** | Input data validation error |  -  |
**403** | Permission denied |  -  |
**404** | Item does not exist or has already expired |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


