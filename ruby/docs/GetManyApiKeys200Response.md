# Metronome::GetManyApiKeys200Response

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'metronome'

Metronome::GetManyApiKeys200Response.openapi_one_of
# =>
# [
#   :'ApiKeyDataListResponse',
#   :'ApiKeyListResponse'
# ]
```

### `openapi_discriminator_name`

Returns the discriminator's property name.

#### Example

```ruby
require 'metronome'

Metronome::GetManyApiKeys200Response.openapi_discriminator_name
# => :'response_type'
```

### `openapi_discriminator_name`

Returns the discriminator's mapping.

#### Example

```ruby
require 'metronome'

Metronome::GetManyApiKeys200Response.openapi_discriminator_mapping
# =>
# {
#   :'ApiKeyDataListResponse' => :'ApiKeyDataListResponse',
#   :'ApiKeyListResponse' => :'ApiKeyListResponse'
# }
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'metronome'

Metronome::GetManyApiKeys200Response.build(data)
# => #<ApiKeyDataListResponse:0x00007fdd4aab02a0>

Metronome::GetManyApiKeys200Response.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `ApiKeyDataListResponse`
- `ApiKeyListResponse`
- `nil` (if no type matches)

