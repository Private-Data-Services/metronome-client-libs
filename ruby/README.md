# metronome

Metronome - the Ruby gem for the Metronome API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build metronome.gemspec
```

Then either install the gem locally:

```shell
gem install ./metronome-1.0.0.gem
```

(for development, run `gem install --dev ./metronome-1.0.0.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'metronome', '~> 1.0.0'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/Private-Data-Services/metronome-client-libs, then add the following in the Gemfile:

    gem 'metronome', :git => 'https://github.com/Private-Data-Services/metronome-client-libs.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:

```ruby
# Load the gem
require 'metronome'

# Setup authorization
Metronome.configure do |config|
  config.api_key['ApiKeyAuth'] = 'YOUR API KEY'
  config.customer_id = "YOUR-CUSTOMER-ID"  # Only characters [a-z0-9\-] allowed.  You invent this value to identify your organisation.
  config.region = "eu-north-1"  # Select from one of our available regions.  Mail info@privatedataservices.com to request a new region.
end

api_instance = Metronome::AccessManagementApi.new
api_key = 'api_key_example' # String | 

begin
  result = api_instance.get_api_key(api_key)
  p result
rescue Metronome::ApiError => e
  puts "Exception when calling AccessManagementApi->get_api_key: #{e}"
end

```

## Documentation for API Endpoints

All URIs are relative to *https://YOUR-CUSTOMER-ID.api.eu-north-1.privatedataservices.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Metronome::AccessManagementApi* | [**get_api_key**](docs/AccessManagementApi.md#get_api_key) | **GET** /v1/metronome/api-keys/{api-key} | 
*Metronome::AccessManagementApi* | [**get_many_api_keys**](docs/AccessManagementApi.md#get_many_api_keys) | **GET** /v1/metronome/api-keys | 
*Metronome::AccessManagementApi* | [**put_api_key**](docs/AccessManagementApi.md#put_api_key) | **PUT** /v1/metronome/api-keys/{api-key} | 
*Metronome::AccessManagementApi* | [**sign_up**](docs/AccessManagementApi.md#sign_up) | **PUT** /v1/metronome/sign-up | 
*Metronome::DataExpiryApi* | [**get_expiry_notices**](docs/DataExpiryApi.md#get_expiry_notices) | **GET** /v1/metronome/expiry-notices/{date} | 
*Metronome::ItemAccessApi* | [**expire_item**](docs/ItemAccessApi.md#expire_item) | **DELETE** /v1/metronome/items/{item-id} | 
*Metronome::ItemAccessApi* | [**expire_sub_item**](docs/ItemAccessApi.md#expire_sub_item) | **DELETE** /v1/metronome/items/{item-id}/{sub-item-id} | 
*Metronome::ItemAccessApi* | [**get_item_log**](docs/ItemAccessApi.md#get_item_log) | **GET** /v1/metronome/items/{item-id}/log | 
*Metronome::ItemAccessApi* | [**get_item_metadata**](docs/ItemAccessApi.md#get_item_metadata) | **GET** /v1/metronome/items/{item-id} | 
*Metronome::ItemAccessApi* | [**get_item_policies**](docs/ItemAccessApi.md#get_item_policies) | **GET** /v1/metronome/items/{item-id}/policies | 
*Metronome::ItemAccessApi* | [**get_sub_item_log**](docs/ItemAccessApi.md#get_sub_item_log) | **GET** /v1/metronome/items/{item-id}/{sub-item-id}/log | 
*Metronome::ItemAccessApi* | [**get_sub_item_metadata**](docs/ItemAccessApi.md#get_sub_item_metadata) | **GET** /v1/metronome/items/{item-id}/{sub-item-id} | 
*Metronome::ItemAccessApi* | [**get_sub_item_policies**](docs/ItemAccessApi.md#get_sub_item_policies) | **GET** /v1/metronome/items/{item-id}/{sub-item-id}/policies | 
*Metronome::PolicyManagementApi* | [**get_many_policies**](docs/PolicyManagementApi.md#get_many_policies) | **GET** /v1/metronome/policies | 
*Metronome::PolicyManagementApi* | [**get_policy**](docs/PolicyManagementApi.md#get_policy) | **GET** /v1/metronome/policies/{policy-id} | 
*Metronome::PolicyManagementApi* | [**get_policy_log**](docs/PolicyManagementApi.md#get_policy_log) | **GET** /v1/metronome/policies/{policy-id}/log | 
*Metronome::PolicyManagementApi* | [**get_policy_members**](docs/PolicyManagementApi.md#get_policy_members) | **GET** /v1/metronome/policies/{policy-id}/members | 
*Metronome::PolicyManagementApi* | [**put_policy**](docs/PolicyManagementApi.md#put_policy) | **PUT** /v1/metronome/policies/{policy-id} | 
*Metronome::TelemetryApi* | [**post_telemetry**](docs/TelemetryApi.md#post_telemetry) | **POST** /v1/metronome/telemetry | 


## Documentation for Models

 - [Metronome::AccessType](docs/AccessType.md)
 - [Metronome::AgingOffsetUnit](docs/AgingOffsetUnit.md)
 - [Metronome::AgingStrategy](docs/AgingStrategy.md)
 - [Metronome::ApiKeyData](docs/ApiKeyData.md)
 - [Metronome::ApiKeyDataListResponse](docs/ApiKeyDataListResponse.md)
 - [Metronome::ApiKeyListResponse](docs/ApiKeyListResponse.md)
 - [Metronome::CreateApiKeyRequest](docs/CreateApiKeyRequest.md)
 - [Metronome::CreateOrModifyApiKeyResponse](docs/CreateOrModifyApiKeyResponse.md)
 - [Metronome::CreateOrModifyPolicyRequest](docs/CreateOrModifyPolicyRequest.md)
 - [Metronome::CreateOrModifyPolicyResponse](docs/CreateOrModifyPolicyResponse.md)
 - [Metronome::ExpireItemResponse](docs/ExpireItemResponse.md)
 - [Metronome::ExpireSubItemResponse](docs/ExpireSubItemResponse.md)
 - [Metronome::ExpiryResponse](docs/ExpiryResponse.md)
 - [Metronome::ExpiryResponsePendingInner](docs/ExpiryResponsePendingInner.md)
 - [Metronome::GetManyApiKeys200Response](docs/GetManyApiKeys200Response.md)
 - [Metronome::GetManyPolicies200Response](docs/GetManyPolicies200Response.md)
 - [Metronome::ItemExpiry](docs/ItemExpiry.md)
 - [Metronome::ItemMetadataResponse](docs/ItemMetadataResponse.md)
 - [Metronome::ItemOrSubItemAccessLog](docs/ItemOrSubItemAccessLog.md)
 - [Metronome::ItemOrSubItemPolicyResponse](docs/ItemOrSubItemPolicyResponse.md)
 - [Metronome::ModifyApiKeyRequest](docs/ModifyApiKeyRequest.md)
 - [Metronome::Permission](docs/Permission.md)
 - [Metronome::PermissionDeniedResponse](docs/PermissionDeniedResponse.md)
 - [Metronome::PolicyData](docs/PolicyData.md)
 - [Metronome::PolicyDataListResponse](docs/PolicyDataListResponse.md)
 - [Metronome::PolicyListResponse](docs/PolicyListResponse.md)
 - [Metronome::PutApiKeyRequest](docs/PutApiKeyRequest.md)
 - [Metronome::SignupRequest](docs/SignupRequest.md)
 - [Metronome::SignupResponse](docs/SignupResponse.md)
 - [Metronome::SubItemMetadataResponse](docs/SubItemMetadataResponse.md)
 - [Metronome::SubItemsExpiry](docs/SubItemsExpiry.md)
 - [Metronome::TelemetryObservation](docs/TelemetryObservation.md)
 - [Metronome::TelemetryRequest](docs/TelemetryRequest.md)
 - [Metronome::ValidationErrorResponseInner](docs/ValidationErrorResponseInner.md)
 - [Metronome::ValidationProblem](docs/ValidationProblem.md)


## Documentation for Authorization


### ApiKeyAuth


- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header
