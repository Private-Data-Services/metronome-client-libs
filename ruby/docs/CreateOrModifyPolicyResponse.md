# Metronome::CreateOrModifyPolicyResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** |  |  |
| **fields_updated** | **Array&lt;String&gt;** |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::CreateOrModifyPolicyResponse.new(
  policy_id: account-login,
  fields_updated: [&quot;aging-offset-amount&quot;,&quot;aging-offset-unit&quot;]
)
```

