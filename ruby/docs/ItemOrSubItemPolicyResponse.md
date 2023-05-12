# Metronome::ItemOrSubItemPolicyResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** | A policy that was applied to this item or sub-item |  |
| **expiry_date** | **Date** | The date at which this item or sub-item should expire according to this policy | [optional] |
| **last_application_date** | **Date** | The date at which this policy was last applied to this item or sub-item | [optional] |

## Example

```ruby
require 'metronome'

instance = Metronome::ItemOrSubItemPolicyResponse.new(
  policy_id: null,
  expiry_date: null,
  last_application_date: null
)
```

