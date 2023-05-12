=begin
#Metronome API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0
Contact: info@privatedataservices.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.4.0

=end

require 'date'
require 'time'

module Metronome
  class AgingStrategy
    FIRST_READ_OR_WRITE = "since-first-read-or-write".freeze
    LAST_READ_OR_WRITE = "since-last-read-or-write".freeze

    def self.all_vars
      @all_vars ||= [FIRST_READ_OR_WRITE, LAST_READ_OR_WRITE].freeze
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def self.build_from_hash(value)
      new.build_from_hash(value)
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def build_from_hash(value)
      return value if AgingStrategy.all_vars.include?(value)
      raise "Invalid ENUM value #{value} for class #AgingStrategy"
    end
  end
end
