# Metronome::ExpireItemResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **sub_items_expired** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::ExpireItemResponse.new(
  item_id: customer-123,
  sub_items_expired: [&quot;email&quot;,&quot;mobile-phone&quot;]
)
```

