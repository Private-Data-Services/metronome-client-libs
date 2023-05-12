# Metronome::ModifyApiKeyRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **status** | **String** |  | [optional] |
| **permissions** | [**Array&lt;Permission&gt;**](Permission.md) |  | [optional] |

## Example

```ruby
require 'metronome'

instance = Metronome::ModifyApiKeyRequest.new(
  status: disabled,
  permissions: null
)
```

