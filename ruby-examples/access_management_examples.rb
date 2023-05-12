require 'metronome'

def sign_up_example(client)
    begin
        response = client.sign_up({ signup_request: Metronome::SignupRequest.new({internal_contact: 'dpo-team@privatedataservices.com'}) })
        puts "Sign up successful: #{response}"
    rescue Metronome::ApiError => e
        puts "Exception when calling AccessManagementApi->sign_up: #{e}"
    end
end


def create_api_key_example(client)
    begin
        response = client.put_api_key("create", { put_api_key_request: Metronome::CreateApiKeyRequest.new({name: "dpo-team-policy-manager", description: "Data Protection Office policy management key", permissions: ["policy-read", "policy-write"]}) })
        puts "Create API Key successful: #{response}"
    rescue Metronome::ApiError => e
        puts "Exception when calling AccessManagementApi->put_api_key: #{e}"
    end
end

def modify_api_key_example(client)
    begin
        response = client.put_api_key("2xhkb2swll", { put_api_key_request: Metronome::ModifyApiKeyRequest.new({permissions: ["policy-read", "policy-write", "item-read"]}) })
        puts "Modify API key successful: #{response}"
    rescue Metronome::ApiError => e
        puts "Exception when calling AccessManagementApi->put_api_key: #{e}"
    end
end

def get_api_key_example(client)
    begin
        response = client.get_api_key("2xhkb2swll")
        puts "Get API key successful: #{response}"
    rescue Metronome::ApiError => e
        puts "Exception when calling AccessManagementApi->get_api_key: #{e}"
    end
end

def get_many_api_keys_without_definition_example(client)
    begin
        response = client.get_many_api_keys({})
        puts "Get many API keys successful: #{response.result}"
    rescue Metronome::ApiError => e
        puts "Exception when calling AccessManagementApi->get_many_api_keys: #{e}"
    end
end

def get_many_api_keys_without_definition_example(client)
    begin
        response = client.get_many_api_keys({})
        puts "Get many API keys successful: #{response.result}"
    rescue Metronome::ApiError => e
        puts "Exception when calling AccessManagementApi->get_many_api_keys: #{e}"
    end
end


def get_many_api_keys_with_definition_example(client)
    begin
        # Offset and limit provide paging.  Omit these values to receive all known keys.
        response = client.get_many_api_keys({offset: 1, limit: 20, include_data: true})
        puts "Get many API keys successful.  There are #{response.result.length} keys."
        response.result.each do |api_key|
            puts "Key ID: #{api_key.id}, Name: #{api_key.name}, Description: #{api_key.description}, Status: #{api_key.status}, Permissions: #{api_key.permissions}"
        end
    rescue Metronome::ApiError => e
        puts "Exception when calling AccessManagementApi->get_many_api_keys: #{e}"
    end
end

# Configure the client
Metronome.configure do |config|
    config.api_key['ApiKeyAuth'] = ENV["METRONOME_API_KEY"]    # Omit this setting for sign up.
    config.customer_id = "pds-internal-code-examples"
    config.region = "eu-north-1"
end

amApiClient = Metronome::AccessManagementApi.new

get_many_api_keys_with_definition_example(amApiClient)
