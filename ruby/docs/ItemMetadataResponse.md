# Metronome::ItemMetadataResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **expired** | **Boolean** | Present and true only when the item has expired | [optional] |
| **sub_items** | **Hash&lt;String, Object&gt;** | Each requested sub-item with it&#39;s own value | [optional] |
| **expired_sub_item_ids** | **Array&lt;String&gt;** |  | [optional] |
| **sub_items_not_present** | **Array&lt;String&gt;** |  | [optional] |
| **policy_id** | **String** | The policy which currently governs how long this item will be retained | [optional] |
| **expiry_date** | **Date** | The date at which this item will expire if it is not used again | [optional] |

## Example

```ruby
require 'metronome'

instance = Metronome::ItemMetadataResponse.new(
  expired: null,
  sub_items: {&quot;email&quot;:&quot;person@domain.com&quot;,&quot;mobile-phone&quot;:&quot;0123456789&quot;},
  expired_sub_item_ids: null,
  sub_items_not_present: null,
  policy_id: null,
  expiry_date: null
)
```

