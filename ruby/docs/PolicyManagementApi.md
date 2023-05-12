# Metronome::PolicyManagementApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_many_policies**](PolicyManagementApi.md#get_many_policies) | **GET** /v1/metronome/policies |  |
| [**get_policy**](PolicyManagementApi.md#get_policy) | **GET** /v1/metronome/policies/{policy-id} |  |
| [**get_policy_log**](PolicyManagementApi.md#get_policy_log) | **GET** /v1/metronome/policies/{policy-id}/log |  |
| [**get_policy_members**](PolicyManagementApi.md#get_policy_members) | **GET** /v1/metronome/policies/{policy-id}/members |  |
| [**put_policy**](PolicyManagementApi.md#put_policy) | **PUT** /v1/metronome/policies/{policy-id} |  |


## get_many_policies

> <GetManyPolicies200Response> get_many_policies(opts)



Read many policies alphanumerically sorted

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

api_instance = Metronome::PolicyManagementApi.new
opts = {
  prefix: 'marketing-', # String | 
  offset: 56, # Integer | The number of policies to drop from the start
  limit: 56, # Integer | The number of policies to include
  include_data: true # Boolean | Whether to include aging-strategy, aging-offset-amount, aging-offset-unit etc.
}

begin
  
  result = api_instance.get_many_policies(opts)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->get_many_policies: #{e}"
end
```

#### Using the get_many_policies_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetManyPolicies200Response>, Integer, Hash)> get_many_policies_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.get_many_policies_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetManyPolicies200Response>
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->get_many_policies_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **prefix** | **String** |  | [optional] |
| **offset** | **Integer** | The number of policies to drop from the start | [optional] |
| **limit** | **Integer** | The number of policies to include | [optional] |
| **include_data** | **Boolean** | Whether to include aging-strategy, aging-offset-amount, aging-offset-unit etc. | [optional] |

### Return type

[**GetManyPolicies200Response**](GetManyPolicies200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_policy

> <PolicyData> get_policy(policy_id)



Read a specific policy

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

api_instance = Metronome::PolicyManagementApi.new
policy_id = 'policy_id_example' # String | 

begin
  
  result = api_instance.get_policy(policy_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->get_policy: #{e}"
end
```

#### Using the get_policy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PolicyData>, Integer, Hash)> get_policy_with_http_info(policy_id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_policy_with_http_info(policy_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PolicyData>
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->get_policy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** |  |  |

### Return type

[**PolicyData**](PolicyData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_policy_log

> <PolicyData> get_policy_log(policy_id)



Read a specific policy's access log

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

api_instance = Metronome::PolicyManagementApi.new
policy_id = 'policy_id_example' # String | 

begin
  
  result = api_instance.get_policy_log(policy_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->get_policy_log: #{e}"
end
```

#### Using the get_policy_log_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PolicyData>, Integer, Hash)> get_policy_log_with_http_info(policy_id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_policy_log_with_http_info(policy_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PolicyData>
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->get_policy_log_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** |  |  |

### Return type

[**PolicyData**](PolicyData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_policy_members

> <PolicyData> get_policy_members(policy_id)



Read the items and sub-items that have been used for a specific policy

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

api_instance = Metronome::PolicyManagementApi.new
policy_id = 'policy_id_example' # String | 

begin
  
  result = api_instance.get_policy_members(policy_id)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->get_policy_members: #{e}"
end
```

#### Using the get_policy_members_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<PolicyData>, Integer, Hash)> get_policy_members_with_http_info(policy_id)

```ruby
begin
  
  data, status_code, headers = api_instance.get_policy_members_with_http_info(policy_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <PolicyData>
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->get_policy_members_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** |  |  |

### Return type

[**PolicyData**](PolicyData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## put_policy

> <CreateOrModifyPolicyResponse> put_policy(policy_id, opts)



Create or modify a policy

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

api_instance = Metronome::PolicyManagementApi.new
policy_id = 'policy_id_example' # String | The name of the policy to be created
opts = {
  create_or_modify_policy_request: Metronome::CreateOrModifyPolicyRequest.new({aging_strategy: Metronome::AgingStrategy::FIRST_READ_OR_WRITE, aging_offset_amount: 37, aging_offset_unit: Metronome::AgingOffsetUnit::YEAR}) # CreateOrModifyPolicyRequest | 
}

begin
  
  result = api_instance.put_policy(policy_id, opts)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->put_policy: #{e}"
end
```

#### Using the put_policy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateOrModifyPolicyResponse>, Integer, Hash)> put_policy_with_http_info(policy_id, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.put_policy_with_http_info(policy_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateOrModifyPolicyResponse>
rescue Metronome::ApiError => e
  puts "Error when calling PolicyManagementApi->put_policy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** | The name of the policy to be created |  |
| **create_or_modify_policy_request** | [**CreateOrModifyPolicyRequest**](CreateOrModifyPolicyRequest.md) |  | [optional] |

### Return type

[**CreateOrModifyPolicyResponse**](CreateOrModifyPolicyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

