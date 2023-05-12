# Metronome::PolicyListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **response_type** | **String** | Always the value \&quot;PolicyListResponse\&quot; |  |
| **count** | **Integer** | The number of policies with the given prefix.  Count of all policies if no prefix was given. |  |
| **offset** | **Integer** | How many items were skipped, specified in the request. | [optional] |
| **limit** | **Integer** | The maximum number of items to return, specified in the request. | [optional] |
| **prefix** | **String** | The string prefix to limit policy names, specified in the request. | [optional] |
| **result** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::PolicyListResponse.new(
  response_type: null,
  count: null,
  offset: null,
  limit: null,
  prefix: null,
  result: [&quot;account-login&quot;,&quot;sales-order-processing&quot;,&quot;marketing-email&quot;]
)
```

