# Metronome::CreateOrModifyApiKeyResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **value** | **String** | A sequence of alphanumeric characters that contain the value to be used when calling the API |  |
| **fields_modified** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::CreateOrModifyApiKeyResponse.new(
  id: great-flowers-tantalus-production-public-website,
  value: lkj125lkj12l23j41l,
  fields_modified: [&quot;name&quot;,&quot;description&quot;,&quot;permissions&quot;]
)
```

