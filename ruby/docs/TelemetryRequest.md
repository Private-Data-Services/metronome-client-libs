# Metronome::TelemetryRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **observation_time** | **Time** | The time the observation happened in UTC timezone |  |
| **policies** | **Array&lt;String&gt;** |  |  |
| **observations** | [**Array&lt;TelemetryObservation&gt;**](TelemetryObservation.md) |  |  |

## Example

```ruby
require 'metronome'

instance = Metronome::TelemetryRequest.new(
  observation_time: null,
  policies: [&quot;account-login&quot;,&quot;sales-order-processing&quot;,&quot;marketing-email&quot;],
  observations: null
)
```

