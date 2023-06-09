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

# Unit tests for Metronome::TelemetryApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'TelemetryApi' do
  before do
    # run before each test
    @api_instance = Metronome::TelemetryApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of TelemetryApi' do
    it 'should create an instance of TelemetryApi' do
      expect(@api_instance).to be_instance_of(Metronome::TelemetryApi)
    end
  end

  # unit tests for post_telemetry
  # Read items and sub-items that will or have already been expired on the given date
  # @param [Hash] opts the optional parameters
  # @option opts [TelemetryRequest] :telemetry_request 
  # @return [nil]
  describe 'post_telemetry test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
