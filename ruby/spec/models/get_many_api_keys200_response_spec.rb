=begin
#Metronome API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0
Contact: info@privatedataservices.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.4.0

=end

require 'spec_helper'
require 'json'
require 'date'

# Unit tests for Metronome::GetManyApiKeys200Response
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe Metronome::GetManyApiKeys200Response do
  describe '.openapi_one_of' do
    it 'lists the items referenced in the oneOf array' do
      expect(described_class.openapi_one_of).to_not be_empty
    end
  end

  describe '.openapi_discriminator_name' do
    it 'returns the value of the "discriminator" property' do
      expect(described_class.openapi_discriminator_name).to_not be_empty
    end
  end

  describe '.openapi_discriminator_mapping' do
    it 'returns the key/values of the "mapping" property' do
      expect(described_class.openapi_discriminator_mapping.values.sort).to eq(described_class.openapi_one_of.sort)
    end
  end

  describe '.build' do
    it 'returns the correct model' do
    end
  end
end
