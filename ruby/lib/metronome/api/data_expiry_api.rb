=begin
#Metronome API

#No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 1.0.0
Contact: info@privatedataservices.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 6.4.0

=end

require 'cgi'

module Metronome
  class DataExpiryApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Read items and sub-items that will or have already been expired on the given date
    # @param date [Date] The date to query
    # @param [Hash] opts the optional parameters
    # @return [ExpiryResponse]
    def get_expiry_notices(date, opts = {})
      data, _status_code, _headers = get_expiry_notices_with_http_info(date, opts)
      data
    end

    # Read items and sub-items that will or have already been expired on the given date
    # @param date [Date] The date to query
    # @param [Hash] opts the optional parameters
    # @return [Array<(ExpiryResponse, Integer, Hash)>] ExpiryResponse data, response status code and response headers
    def get_expiry_notices_with_http_info(date, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DataExpiryApi.get_expiry_notices ...'
      end
      # verify the required parameter 'date' is set
      if @api_client.config.client_side_validation && date.nil?
        fail ArgumentError, "Missing the required parameter 'date' when calling DataExpiryApi.get_expiry_notices"
      end

      # PDS patch: if this is already converted to a date object, just use the date.
      date_string = nil
      if date.is_a?(Date)
        date_string = date.strftime("%Y%m%d")
      else
        if @api_client.config.client_side_validation && date.to_s.length > 8
          fail ArgumentError, 'invalid value for "date" when calling DataExpiryApi.get_expiry_notices, the character length must be smaller than or equal to 8.'
        end

        if @api_client.config.client_side_validation && date.to_s.length < 8
          fail ArgumentError, 'invalid value for "date" when calling DataExpiryApi.get_expiry_notices, the character length must be great than or equal to 8.'
        end

        pattern = Regexp.new(/^\d{4}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/)
        if @api_client.config.client_side_validation && date !~ pattern
          fail ArgumentError, "invalid value for 'date' when calling DataExpiryApi.get_expiry_notices, must conform to the pattern #{pattern}."
        end

        date_string = date
      end

      # resource path
      local_var_path = '/v1/metronome/expiry-notices/{date}'.sub('{' + 'date' + '}', CGI.escape(date_string))  # PDS patch

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'ExpiryResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['ApiKeyAuth']

      new_options = opts.merge(
        :operation => :"DataExpiryApi.get_expiry_notices",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DataExpiryApi#get_expiry_notices\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
