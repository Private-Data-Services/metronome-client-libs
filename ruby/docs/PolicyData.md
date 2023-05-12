# Metronome::PolicyData

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** |  |  |
| **create_date** | **Date** | Date in YYYYMMDD format. |  |
| **aging_strategy** | [**AgingStrategy**](AgingStrategy.md) |  |  |
| **aging_offset_amount** | **Integer** |  |  |
| **aging_offset_unit** | [**AgingOffsetUnit**](AgingOffsetUnit.md) |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::PolicyData.new(
  policy_id: account-login,
  create_date: null,
  aging_strategy: null,
  aging_offset_amount: null,
  aging_offset_unit: null
)
```

