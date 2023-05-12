# Metronome::SubItemMetadataResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **expired** | **Boolean** | Present and true only when the item has expired | [optional] |
| **policy_id** | **String** | The policy which currently governs how long this item will be retained |  |
| **expiry_date** | **Date** | The date at which this item will expire if it is not used again | [optional] |

## Example

```ruby
require 'metronome'

instance = Metronome::SubItemMetadataResponse.new(
  expired: null,
  policy_id: null,
  expiry_date: null
)
```

