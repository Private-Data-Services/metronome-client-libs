# Metronome::ItemAccessApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**expire_item**](ItemAccessApi.md#expire_item) | **DELETE** /v1/metronome/items/{item-id} |  |
| [**expire_sub_item**](ItemAccessApi.md#expire_sub_item) | **DELETE** /v1/metronome/items/{item-id}/{sub-item-id} |  |
| [**get_item_log**](ItemAccessApi.md#get_item_log) | **GET** /v1/metronome/items/{item-id}/log |  |
| [**get_item_metadata**](ItemAccessApi.md#get_item_metadata) | **GET** /v1/metronome/items/{item-id} |  |
| [**get_item_policies**](ItemAccessApi.md#get_item_policies) | **GET** /v1/metronome/items/{item-id}/policies |  |
| [**get_sub_item_log**](ItemAccessApi.md#get_sub_item_log) | **GET** /v1/metronome/items/{item-id}/{sub-item-id}/log |  |
| [**get_sub_item_metadata**](ItemAccessApi.md#get_sub_item_metadata) | **GET** /v1/metronome/items/{item-id}/{sub-item-id} |  |
| [**get_sub_item_policies**](ItemAccessApi.md#get_sub_item_policies) | **GET** /v1/metronome/items/{item-id}/{sub-item-id}/policies |  |


## expire_item

> <ExpireItemResponse> expire_item(item_id)



Expire an item and its sub-items immediately

### Examples

```ruby
require 'time'
require 'metronome'
# setup authorization
Metronome.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['ApiKeyAuth'] = 'Bearer'
end

api_instance = Metronome::ItemAccessApi.new
item_id = 'item_id_example' # String | The ID of the item being expired

begin
  
  result = api_instance.expire_item(item_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->expire_item: #{e}"
end
```

#### Using the expire_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ExpireItemResponse>, Integer, Hash)> expire_item_with_http_info(item_id)

```ruby
begin
  
  data, status_code, headers = api_instance.expire_item_with_http_info(item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ExpireItemResponse>
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->expire_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** | The ID of the item being expired |  |

### Return type

[**ExpireItemResponse**](ExpireItemResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## expire_sub_item

> <ExpireSubItemResponse> expire_sub_item(item_id, sub_item_id)



Expire a sub-item immediately

### Examples

```ruby
require 'time'
require 'metronome'
# setup authorization
Metronome.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['ApiKeyAuth'] = 'Bearer'
end

api_instance = Metronome::ItemAccessApi.new
item_id = 'item_id_example' # String | The parent item ID of the sub-item being expired
sub_item_id = 'sub_item_id_example' # String | The sub-item ID being expired

begin
  
  result = api_instance.expire_sub_item(item_id, sub_item_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->expire_sub_item: #{e}"
end
```

#### Using the expire_sub_item_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ExpireSubItemResponse>, Integer, Hash)> expire_sub_item_with_http_info(item_id, sub_item_id)

```ruby
begin
  
  data, status_code, headers = api_instance.expire_sub_item_with_http_info(item_id, sub_item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ExpireSubItemResponse>
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->expire_sub_item_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** | The parent item ID of the sub-item being expired |  |
| **sub_item_id** | **String** | The sub-item ID being expired |  |

### Return type

[**ExpireSubItemResponse**](ExpireSubItemResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_item_log

> <ItemOrSubItemAccessLog> get_item_log(item_id, opts)



Read a specific item's access log

### Examples

```ruby
require 'time'
require 'metronome'
# setup authorization
Metronome.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['ApiKeyAuth'] = 'Bearer'
end

api_instance = Metronome::ItemAccessApi.new
item_id = 'item_id_example' # String | The ID of the item to be read
opts = {
  start_date: true, # Boolean | Mutually exclusive with specifying the specific sub-items to read.
  end_date: true # Boolean | 
}

begin
  
  result = api_instance.get_item_log(item_id, opts)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_item_log: #{e}"
end
```

#### Using the get_item_log_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ItemOrSubItemAccessLog>, Integer, Hash)> get_item_log_with_http_info(item_id, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.get_item_log_with_http_info(item_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ItemOrSubItemAccessLog>
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_item_log_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** | The ID of the item to be read |  |
| **start_date** | **Boolean** | Mutually exclusive with specifying the specific sub-items to read. | [optional] |
| **end_date** | **Boolean** |  | [optional] |

### Return type

[**ItemOrSubItemAccessLog**](ItemOrSubItemAccessLog.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_item_metadata

> <ItemMetadataResponse> get_item_metadata(item_id, opts)



Read a specific item's metadata with or without any sub-items.

### Examples

```ruby
require 'time'
require 'metronome'
# setup authorization
Metronome.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['ApiKeyAuth'] = 'Bearer'
end

api_instance = Metronome::ItemAccessApi.new
item_id = 'item_id_example' # String | The ID of the item to be read
opts = {
  all_sub_items: true, # Boolean | Mutually exclusive with specifying the specific sub-items to read.
  no_item_content: true, # Boolean | 
  sub_item: ['inner_example'] # Array<String> | Mutually exclusive with all-sub-items=true.  If you only wish to read a few specific sub-items with this item, include each sub-item name in multiple form parameters eg https://url/v1/metronome/items/customer-123?sub-item=email&sub-item=mobile-phone&sub-item=address
}

begin
  
  result = api_instance.get_item_metadata(item_id, opts)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_item_metadata: #{e}"
end
```

#### Using the get_item_metadata_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ItemMetadataResponse>, Integer, Hash)> get_item_metadata_with_http_info(item_id, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.get_item_metadata_with_http_info(item_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ItemMetadataResponse>
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_item_metadata_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** | The ID of the item to be read |  |
| **all_sub_items** | **Boolean** | Mutually exclusive with specifying the specific sub-items to read. | [optional] |
| **no_item_content** | **Boolean** |  | [optional] |
| **sub_item** | [**Array&lt;String&gt;**](String.md) | Mutually exclusive with all-sub-items&#x3D;true.  If you only wish to read a few specific sub-items with this item, include each sub-item name in multiple form parameters eg https://url/v1/metronome/items/customer-123?sub-item&#x3D;email&amp;sub-item&#x3D;mobile-phone&amp;sub-item&#x3D;address | [optional] |

### Return type

[**ItemMetadataResponse**](ItemMetadataResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_item_policies

> <ItemOrSubItemPolicyResponse> get_item_policies(item_id)



Read which policies have been applied to a specific item

### Examples

```ruby
require 'time'
require 'metronome'
# setup authorization
Metronome.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['ApiKeyAuth'] = 'Bearer'
end

api_instance = Metronome::ItemAccessApi.new
item_id = 'item_id_example' # String | The ID of the item to be read

begin
  
  result = api_instance.get_item_policies(item_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_item_policies: #{e}"
end
```

#### Using the get_item_policies_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ItemOrSubItemPolicyResponse>, Integer, Hash)> get_item_policies_with_http_info(item_id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_item_policies_with_http_info(item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ItemOrSubItemPolicyResponse>
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_item_policies_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** | The ID of the item to be read |  |

### Return type

[**ItemOrSubItemPolicyResponse**](ItemOrSubItemPolicyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_sub_item_log

> <ItemOrSubItemAccessLog> get_sub_item_log(item_id, sub_item_id)



Read a specific sub-item's access log

### Examples

```ruby
require 'time'
require 'metronome'
# setup authorization
Metronome.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['ApiKeyAuth'] = 'Bearer'
end

api_instance = Metronome::ItemAccessApi.new
item_id = 'item_id_example' # String | The parent item ID of the sub-item being read
sub_item_id = 'sub_item_id_example' # String | The sub-item ID to be read

begin
  
  result = api_instance.get_sub_item_log(item_id, sub_item_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_sub_item_log: #{e}"
end
```

#### Using the get_sub_item_log_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ItemOrSubItemAccessLog>, Integer, Hash)> get_sub_item_log_with_http_info(item_id, sub_item_id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_sub_item_log_with_http_info(item_id, sub_item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ItemOrSubItemAccessLog>
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_sub_item_log_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** | The parent item ID of the sub-item being read |  |
| **sub_item_id** | **String** | The sub-item ID to be read |  |

### Return type

[**ItemOrSubItemAccessLog**](ItemOrSubItemAccessLog.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_sub_item_metadata

> <SubItemMetadataResponse> get_sub_item_metadata(item_id, sub_item_id)



Read a specific sub-item's metadata

### Examples

```ruby
require 'time'
require 'metronome'
# setup authorization
Metronome.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['ApiKeyAuth'] = 'Bearer'
end

api_instance = Metronome::ItemAccessApi.new
item_id = 'item_id_example' # String | The parent item ID of the sub-item being read
sub_item_id = 'sub_item_id_example' # String | The sub-item ID to be read

begin
  
  result = api_instance.get_sub_item_metadata(item_id, sub_item_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_sub_item_metadata: #{e}"
end
```

#### Using the get_sub_item_metadata_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SubItemMetadataResponse>, Integer, Hash)> get_sub_item_metadata_with_http_info(item_id, sub_item_id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_sub_item_metadata_with_http_info(item_id, sub_item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SubItemMetadataResponse>
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_sub_item_metadata_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** | The parent item ID of the sub-item being read |  |
| **sub_item_id** | **String** | The sub-item ID to be read |  |

### Return type

[**SubItemMetadataResponse**](SubItemMetadataResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_sub_item_policies

> <ItemOrSubItemPolicyResponse> get_sub_item_policies(item_id, sub_item_id)



Read which policies have been applied to a specific sub-item

### Examples

```ruby
require 'time'
require 'metronome'
# setup authorization
Metronome.configure do |config|
  # Configure API key authorization: ApiKeyAuth
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  # config.api_key_prefix['ApiKeyAuth'] = 'Bearer'
end

api_instance = Metronome::ItemAccessApi.new
item_id = 'item_id_example' # String | The parent item ID of the sub-item being read
sub_item_id = 'sub_item_id_example' # String | The sub-item ID to be read

begin
  
  result = api_instance.get_sub_item_policies(item_id, sub_item_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_sub_item_policies: #{e}"
end
```

#### Using the get_sub_item_policies_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ItemOrSubItemPolicyResponse>, Integer, Hash)> get_sub_item_policies_with_http_info(item_id, sub_item_id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_sub_item_policies_with_http_info(item_id, sub_item_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ItemOrSubItemPolicyResponse>
rescue Metronome::ApiError => e
  puts "Error when calling ItemAccessApi->get_sub_item_policies_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** | The parent item ID of the sub-item being read |  |
| **sub_item_id** | **String** | The sub-item ID to be read |  |

### Return type

[**ItemOrSubItemPolicyResponse**](ItemOrSubItemPolicyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

