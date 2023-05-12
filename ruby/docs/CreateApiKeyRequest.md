# Metronome::CreateApiKeyRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **permissions** | [**Array&lt;Permission&gt;**](Permission.md) |  | [optional] |

## Example

```ruby
require 'metronome'

instance = Metronome::CreateApiKeyRequest.new(
  name: public-website,
  description: Public Website,
  permissions: null
)
```

