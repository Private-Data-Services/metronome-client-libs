# Metronome::ItemExpiry

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **expiry_type** | **String** | Always the value \&quot;ItemExpiry\&quot; |  |
| **item_id** | **String** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::ItemExpiry.new(
  expiry_type: null,
  item_id: customer-123
)
```

