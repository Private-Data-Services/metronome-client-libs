# Metronome::ExpireSubItemResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **sub_item_id** | **String** |  |  |
| **fields_updated** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::ExpireSubItemResponse.new(
  item_id: customer-123,
  sub_item_id: email,
  fields_updated: [&quot;policies&quot;,&quot;expired&quot;]
)
```

