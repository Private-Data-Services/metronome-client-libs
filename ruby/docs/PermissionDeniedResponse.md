# Metronome::PermissionDeniedResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **error_code** | **String** |  |  |
| **customer_status** | **String** |  | [optional] |
| **api_key_status** | **String** |  | [optional] |
| **granted_permissions** | [**Array&lt;Permission&gt;**](Permission.md) |  | [optional] |
| **required_permission** | [**Permission**](Permission.md) |  | [optional] |
| **internal_contact** | **String** |  | [optional] |
| **message** | **String** |  | [optional] |

## Example

```ruby
require 'metronome'

instance = Metronome::PermissionDeniedResponse.new(
  error_code: null,
  customer_status: null,
  api_key_status: null,
  granted_permissions: null,
  required_permission: null,
  internal_contact: data-protection-it-manager@yourdomain.com,
  message: null
)
```

