# Metronome::TelemetryObservation

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **item_id** | **String** |  |  |
| **sub_item_ids** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::TelemetryObservation.new(
  item_id: customer-123,
  sub_item_ids: [&quot;email&quot;,&quot;address&quot;]
)
```

