# Metronome::DataExpiryApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_expiry_notices**](DataExpiryApi.md#get_expiry_notices) | **GET** /v1/metronome/expiry-notices/{date} |  |


## get_expiry_notices

> <ExpiryResponse> get_expiry_notices(date)



Read items and sub-items that will or have already been expired on the given date

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

api_instance = Metronome::DataExpiryApi.new
date = Date.parse('2013-10-20') # Date | The date to query

begin
  
  result = api_instance.get_expiry_notices(date)
  p result
rescue Metronome::ApiError => e
  puts "Error when calling DataExpiryApi->get_expiry_notices: #{e}"
end
```

#### Using the get_expiry_notices_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ExpiryResponse>, Integer, Hash)> get_expiry_notices_with_http_info(date)

```ruby
begin
  
  data, status_code, headers = api_instance.get_expiry_notices_with_http_info(date)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ExpiryResponse>
rescue Metronome::ApiError => e
  puts "Error when calling DataExpiryApi->get_expiry_notices_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date** | **Date** | The date to query |  |

### Return type

[**ExpiryResponse**](ExpiryResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

