require 'metronome'

def create_policy_example(client)
    begin
        response = client.put_policy("user-account-access", {create_or_modify_policy_request: Metronome::CreateOrModifyPolicyRequest.new({aging_strategy: Metronome::AgingStrategy::LAST_READ_OR_WRITE, aging_offset_amount: 2, aging_offset_unit: Metronome::AgingOffsetUnit::YEAR})})
        puts "Created policy successfully: #{response}"
    rescue Metronome::ApiError => e
    puts "Exception when calling PolicyManagementApi->put_policy: #{e}"
    end
end

def modify_policy_example(client)
    begin
        response = client.put_policy("user-account-access", {create_or_modify_policy_request: Metronome::CreateOrModifyPolicyRequest.new({aging_strategy: Metronome::AgingStrategy::LAST_READ_OR_WRITE, aging_offset_amount: 3, aging_offset_unit: Metronome::AgingOffsetUnit::MONTH})})
        puts "Modified policy successfully: #{response}"
    rescue Metronome::ApiError => e
    puts "Exception when calling PolicyManagementApi->put_policy: #{e}"
    end
end

def get_policy_example(client)
    begin
        policy = client.get_policy("user-account-access")
        puts "Policy ID is #{policy.policy_id} created at #{policy.create_date} with aging strategy #{policy.aging_strategy} which ages by #{policy.aging_offset_amount} units of #{policy.aging_offset_unit}"
    rescue Metronome::ApiError => e
    puts "Exception when calling PolicyManagementApi->get_policy: #{e}"
    end
end

def get_many_policies_example(client)
    begin
        response = client.get_many_policies
        puts "There are #{response.result.length} policies which are #{response.result}"
    rescue Metronome::ApiError => e
    puts "Exception when calling PolicyManagementApi->get_many_policies: #{e}"
    end
end

def get_many_policy_definitions_no_filter_example(client)
    begin
        response = client.get_many_policies({include_data: true})
        puts "There are #{response.result.length} policies."
        response.result.each do |policy|
            puts "Policy ID is #{policy.policy_id} created at #{policy.create_date} with aging strategy #{policy.aging_strategy} which ages by #{policy.aging_offset_amount} units of #{policy.aging_offset_unit}"
        end
    rescue Metronome::ApiError => e
    puts "Exception when calling PolicyManagementApi->get_many_policies: #{e}"
    end
end

def get_many_policy_definitions_with_filter_example(client)
    begin
        response = client.get_many_policies({prefix: "marketing-", offset: 10, limit: 20, include_data: true})
        puts "There are #{response.result.length} policies."
        response.result.each do |policy|
            puts "Policy ID is #{policy.policy_id} created at #{policy.create_date} with aging strategy #{policy.aging_strategy} which ages by #{policy.aging_offset_amount} units of #{policy.aging_offset_unit}"
        end
    rescue Metronome::ApiError => e
    puts "Exception when calling PolicyManagementApi->get_many_policies: #{e}"
    end
end

# Configure the client
Metronome.configure do |config|
    config.api_key['ApiKeyAuth'] = ENV["METRONOME_API_KEY"]
    config.customer_id = "pds-internal-code-examples"
    config.region = "eu-north-1"
    config.use_production_instance = false      # Use your dev instance
end

pm_api_client = Metronome::PolicyManagementApi.new

get_many_policy_definitions_no_filter_example(pm_api_client)
