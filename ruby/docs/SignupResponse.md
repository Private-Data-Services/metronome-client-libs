# Metronome::SignupResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **dev_api_url** | **String** |  |  |
| **dev_master_api_key** | **String** |  |  |
| **production_api_url** | **String** |  |  |
| **production_master_api_key** | **String** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::SignupResponse.new(
  dev_api_url: https://your-customer-id.dev-api.eu-north-1.tantalus.privatedataservices.com,
  dev_master_api_key: abcdefgh1234567,
  production_api_url: https://your-customer-id.api.eu-north-1.tantalus.privatedataservices.com,
  production_master_api_key: abcdefgh1234567
)
```

