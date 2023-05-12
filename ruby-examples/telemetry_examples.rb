require 'metronome'

def post_telemetry_example(client)
    begin
        telemetry = Metronome::TelemetryRequest.new({observation_time: Time.now,
                                                     policies: ["user-account-access"],
                                                     observations: [Metronome::TelemetryObservation.new({item_id: 'customer-123', sub_item_ids: ["email", "address"]}),
                                                                    Metronome::TelemetryObservation.new({item_id: 'customer-456', sub_item_ids: ["email", "address"]})]})

        client.post_telemetry({telemetry_request: telemetry})
        puts "Telemetry posted successfully"
    rescue Metronome::ApiError => e
    puts "Exception when calling PolicyManagementApi->put_policy: #{e}"
    end
end

# Configure the client
Metronome.configure do |config|
    config.api_key['ApiKeyAuth'] = ENV["METRONOME_API_KEY"]
    config.customer_id = "pds-internal-code-examples"
    config.region = "eu-north-1"
end

telemetryApiClient = Metronome::TelemetryApi.new

post_telemetry_example(telemetryApiClient)
