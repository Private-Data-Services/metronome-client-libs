# Metronome::CreateOrModifyPolicyRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **aging_strategy** | [**AgingStrategy**](AgingStrategy.md) |  |  |
| **aging_offset_amount** | **Integer** |  |  |
| **aging_offset_unit** | [**AgingOffsetUnit**](AgingOffsetUnit.md) |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::CreateOrModifyPolicyRequest.new(
  aging_strategy: null,
  aging_offset_amount: null,
  aging_offset_unit: null
)
```

