# Metronome::AccessManagementApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_api_key**](AccessManagementApi.md#get_api_key) | **GET** /v1/metronome/api-keys/{api-key} |  |
| [**get_many_api_keys**](AccessManagementApi.md#get_many_api_keys) | **GET** /v1/metronome/api-keys |  |
| [**put_api_key**](AccessManagementApi.md#put_api_key) | **PUT** /v1/metronome/api-keys/{api-key} |  |
| [**sign_up**](AccessManagementApi.md#sign_up) | **PUT** /v1/metronome/sign-up |  |


## get_api_key

> <ApiKeyData> get_api_key(api_key)



Read a specific API key

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

api_instance = Metronome::AccessManagementApi.new
api_key = 'api_key_example' # String | 

begin
  
  result = api_instance.get_api_key(api_key)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling AccessManagementApi->get_api_key: #{e}"
end
```

#### Using the get_api_key_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ApiKeyData>, Integer, Hash)> get_api_key_with_http_info(api_key)

```ruby
begin
  
  data, status_code, headers = api_instance.get_api_key_with_http_info(api_key)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ApiKeyData>
rescue Metronome::ApiError => e
  puts "Error when calling AccessManagementApi->get_api_key_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_key** | **String** |  |  |

### Return type

[**ApiKeyData**](ApiKeyData.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## get_many_api_keys

> <GetManyApiKeys200Response> get_many_api_keys(opts)



Read many API keys alphanumerically sorted

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

api_instance = Metronome::AccessManagementApi.new
opts = {
  offset: 56, # Integer | The number of keys to drop from the start
  limit: 56, # Integer | The number of keys to include
  include_data: true # Boolean | Whether to include permissions, status, description etc.
}

begin
  
  result = api_instance.get_many_api_keys(opts)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling AccessManagementApi->get_many_api_keys: #{e}"
end
```

#### Using the get_many_api_keys_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetManyApiKeys200Response>, Integer, Hash)> get_many_api_keys_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.get_many_api_keys_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetManyApiKeys200Response>
rescue Metronome::ApiError => e
  puts "Error when calling AccessManagementApi->get_many_api_keys_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **offset** | **Integer** | The number of keys to drop from the start | [optional] |
| **limit** | **Integer** | The number of keys to include | [optional] |
| **include_data** | **Boolean** | Whether to include permissions, status, description etc. | [optional] |

### Return type

[**GetManyApiKeys200Response**](GetManyApiKeys200Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## put_api_key

> <CreateOrModifyApiKeyResponse> put_api_key(api_key, opts)



Create or modify an API key

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

api_instance = Metronome::AccessManagementApi.new
api_key = 'api_key_example' # String | The API key to be modified or 'create' for a new key
opts = {
  put_api_key_request: Metronome::CreateApiKeyRequest.new # PutApiKeyRequest | 
}

begin
  
  result = api_instance.put_api_key(api_key, opts)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling AccessManagementApi->put_api_key: #{e}"
end
```

#### Using the put_api_key_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateOrModifyApiKeyResponse>, Integer, Hash)> put_api_key_with_http_info(api_key, opts)

```ruby
begin
  
  data, status_code, headers = api_instance.put_api_key_with_http_info(api_key, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateOrModifyApiKeyResponse>
rescue Metronome::ApiError => e
  puts "Error when calling AccessManagementApi->put_api_key_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **api_key** | **String** | The API key to be modified or &#39;create&#39; for a new key |  |
| **put_api_key_request** | [**PutApiKeyRequest**](PutApiKeyRequest.md) |  | [optional] |

### Return type

[**CreateOrModifyApiKeyResponse**](CreateOrModifyApiKeyResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## sign_up

> <SignupResponse> sign_up(opts)



Open end point for signing up new customers

### Examples

```ruby
require 'time'
require 'metronome'

api_instance = Metronome::AccessManagementApi.new
opts = {
  signup_request: Metronome::SignupRequest.new({internal_contact: 'data-protection-it-manager@yourdomain.com'}) # SignupRequest | 
}

begin
  
  result = api_instance.sign_up(opts)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling AccessManagementApi->sign_up: #{e}"
end
```

#### Using the sign_up_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SignupResponse>, Integer, Hash)> sign_up_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.sign_up_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SignupResponse>
rescue Metronome::ApiError => e
  puts "Error when calling AccessManagementApi->sign_up_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **signup_request** | [**SignupRequest**](SignupRequest.md) |  | [optional] |

### Return type

[**SignupResponse**](SignupResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

