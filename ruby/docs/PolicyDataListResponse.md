# Metronome::PolicyDataListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **response_type** | **String** | Always the value \&quot;PolicyDataListResponse\&quot; |  |
| **count** | **Integer** | The number of policies with the given prefix.  Count of all policies if no prefix was given. |  |
| **offset** | **Integer** | How many items were skipped, specified in the request. | [optional] |
| **limit** | **Integer** | The maximum number of items to return, specified in the request. | [optional] |
| **prefix** | **String** | The string prefix to limit policy names, specified in the request. | [optional] |
| **result** | [**Array&lt;PolicyData&gt;**](PolicyData.md) |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::PolicyDataListResponse.new(
  response_type: null,
  count: null,
  offset: null,
  limit: null,
  prefix: null,
  result: null
)
```

