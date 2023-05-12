# Metronome::ValidationErrorResponseInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **spec** | **String** |  |  |
| **request_from_customer** | **Object** |  |  |
| **problems** | [**Array&lt;ValidationProblem&gt;**](ValidationProblem.md) |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::ValidationErrorResponseInner.new(
  spec: com.pds.tantalus.customers/internal-contact,
  request_from_customer: The outermost object that you sent in your request,
  problems: null
)
```

