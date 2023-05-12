# Metronome::ValidationProblem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **location** | **Array&lt;String&gt;** |  |  |
| **val** | **String** |  |  |
| **description** | **String** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::ValidationProblem.new(
  location: [&quot;HTTP body&quot;,&quot;policies&quot;,&quot;value&quot;],
  val: The value you sent to the API,
  description: Internal contact must be a non-null string
)
```

