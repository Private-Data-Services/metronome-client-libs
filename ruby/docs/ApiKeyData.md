# Metronome::ApiKeyData

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **name** | **String** |  |  |
| **description** | **String** |  |  |
| **value** | **String** |  |  |
| **status** | **String** |  |  |
| **permissions** | [**Array&lt;Permission&gt;**](Permission.md) |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::ApiKeyData.new(
  id: h2h1349,
  name: great-flowers-metronome-production-public-website,
  description: Customer Great Flowers production Public Website,
  value: 9s87v98zxcb987xzcv79xzc7v89x,
  status: null,
  permissions: null
)
```

