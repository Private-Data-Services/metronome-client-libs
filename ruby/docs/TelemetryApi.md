# Metronome::TelemetryApi

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**post_telemetry**](TelemetryApi.md#post_telemetry) | **POST** /v1/metronome/telemetry |  |


## post_telemetry

> post_telemetry(opts)



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

api_instance = Metronome::TelemetryApi.new
opts = {
  telemetry_request: Metronome::TelemetryRequest.new({observation_time: Time.now, policies: ["account-login", "sales-order-processing", "marketing-email"], observations: [Metronome::TelemetryObservation.new({item_id: 'customer-123', sub_item_ids: ["email", "address"]})]}) # TelemetryRequest | 
}

begin
  
  api_instance.post_telemetry(opts)
rescue Metronome::ApiError => e
  puts "Error when calling TelemetryApi->post_telemetry: #{e}"
end
```

#### Using the post_telemetry_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> post_telemetry_with_http_info(opts)

```ruby
begin
  
  data, status_code, headers = api_instance.post_telemetry_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue Metronome::ApiError => e
  puts "Error when calling TelemetryApi->post_telemetry_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **telemetry_request** | [**TelemetryRequest**](TelemetryRequest.md) |  | [optional] |

### Return type

nil (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

