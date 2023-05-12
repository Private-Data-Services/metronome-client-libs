# Metronome::ApiKeyListResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **response_type** | **String** | Always the string \&quot;ApiKeyListResponse\&quot; |  |
| **result** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::ApiKeyListResponse.new(
  response_type: null,
  result: [&quot;abcdef123445&quot;,&quot;lasjdf0923r&quot;,&quot;sldkjf2tg4&quot;]
)
```

