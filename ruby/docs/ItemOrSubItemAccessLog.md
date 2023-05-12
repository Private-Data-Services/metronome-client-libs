# Metronome::ItemOrSubItemAccessLog

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **timestamp** | **Time** |  |  |
| **access_type** | [**AccessType**](AccessType.md) |  |  |
| **access_authoriser** | **String** | The ID of the system that accessed the data |  |
| **access_policies** | **Array&lt;String&gt;** |  |  |
| **effective_expiry_policy** | **String** | The policy which governed data expiry after this data access |  |
| **effective_expiry_date** | **Date** | The date to which this item or sub-item would be retained after this access | [optional] |
| **accessed_sub_items** | **Array&lt;String&gt;** |  | [optional] |
| **expired** | **Boolean** | Present and true only when the item expired as a result of this access | [optional] |

## Example

```ruby
require 'metronome'

instance = Metronome::ItemOrSubItemAccessLog.new(
  timestamp: null,
  access_type: null,
  access_authoriser: null,
  access_policies: null,
  effective_expiry_policy: null,
  effective_expiry_date: null,
  accessed_sub_items: null,
  expired: null
)
```

