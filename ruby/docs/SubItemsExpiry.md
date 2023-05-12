# Metronome::SubItemsExpiry

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **expiry_type** | **String** | Always the value \&quot;SubItemsExpiry\&quot; |  |
| **parent_item_id** | **String** |  |  |
| **sub_items** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::SubItemsExpiry.new(
  expiry_type: null,
  parent_item_id: customer-123,
  sub_items: [&quot;email&quot;,&quot;mobile-phone&quot;]
)
```

