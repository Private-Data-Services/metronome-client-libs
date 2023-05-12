require 'metronome'

def query_expiries_example(client)
    begin
        response = client.get_expiry_notices(Date.parse("2025-05-12"))

        # Pending expiries may change with use before the currently reported date.  They are advisory only.
        puts "There are #{response.pending.length} pending expiries."
        response.pending.each do |notice|
            if notice.is_a?(Metronome::ItemExpiry)
                puts "Item #{notice.item_id} will currently expire on #{response.expiry_date}"
            else
                puts "Item #{notice.parent_item_id} sub-items #{notice.sub_items} will currently expire on #{response.expiry_date}"
            end
        end

        # Complete expiries indicate that the data must be deleted.  You must act on complete expiry notices.
        puts "There are #{response.complete.length} complete expiries."
        response.complete.each do |notice|
            if notice.is_a?(Metronome::ItemExpiry)
                puts "Item #{notice.item_id} did expire on #{response.expiry_date}"
            else
                puts "Item #{notice.parent_item_id} sub-items #{notice.sub_items} did expire on #{response.expiry_date}"
            end
        end
    rescue Metronome::ApiError => e
    puts "Exception when calling DataExpiryApi->get_expiry_notices: #{e}"
    end
end

# Configure the client
Metronome.configure do |config|
    config.api_key['ApiKeyAuth'] = ENV["METRONOME_API_KEY"]
    config.customer_id = "pds-internal-code-examples"
    config.region = "eu-north-1"
end

expiry_api_client = Metronome::DataExpiryApi.new

query_expiries_example(expiry_api_client)
