# Metronome::ExpiryResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **expiry_date** | **Date** | Date in YYYYMMDD format. |  |
| **pending** | [**Array&lt;ExpiryResponsePendingInner&gt;**](ExpiryResponsePendingInner.md) |  |  |
| **complete** | [**Array&lt;ExpiryResponsePendingInner&gt;**](ExpiryResponsePendingInner.md) |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::ExpiryResponse.new(
  expiry_date: null,
  pending: null,
  complete: null
)
```

