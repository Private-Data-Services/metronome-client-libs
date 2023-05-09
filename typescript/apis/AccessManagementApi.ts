// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ApiKeyData } from '../models/ApiKeyData';
import { CreateOrModifyApiKeyResponse } from '../models/CreateOrModifyApiKeyResponse';
import { GetManyApiKeys200Response } from '../models/GetManyApiKeys200Response';
import { PermissionDeniedResponse } from '../models/PermissionDeniedResponse';
import { PutApiKeyRequest } from '../models/PutApiKeyRequest';
import { SignupRequest } from '../models/SignupRequest';
import { SignupResponse } from '../models/SignupResponse';
import { ValidationErrorResponseInner } from '../models/ValidationErrorResponseInner';

/**
 * no description
 */
export class AccessManagementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Read a specific API key
     * @param apiKey 
     */
    public async getApiKey(apiKey: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("AccessManagementApi", "getApiKey", "apiKey");
        }


        // Path Params
        const localVarPath = '/v1/metronome/api-keys/{api-key}'
            .replace('{' + 'api-key' + '}', encodeURIComponent(String(apiKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Read many API keys alphanumerically sorted
     * @param offset The number of keys to drop from the start
     * @param limit The number of keys to include
     * @param includeData Whether to include permissions, status, description etc.
     */
    public async getManyApiKeys(offset?: number, limit?: number, includeData?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/v1/metronome/api-keys';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (offset !== undefined) {
            requestContext.setQueryParam("offset", ObjectSerializer.serialize(offset, "number", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (includeData !== undefined) {
            requestContext.setQueryParam("include-data", ObjectSerializer.serialize(includeData, "boolean", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create or modify an API key
     * @param apiKey The API key to be modified or &#39;create&#39; for a new key
     * @param putApiKeyRequest 
     */
    public async putApiKey(apiKey: string, putApiKeyRequest?: PutApiKeyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError("AccessManagementApi", "putApiKey", "apiKey");
        }



        // Path Params
        const localVarPath = '/v1/metronome/api-keys/{api-key}'
            .replace('{' + 'api-key' + '}', encodeURIComponent(String(apiKey)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(putApiKeyRequest, "PutApiKeyRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Open end point for signing up new customers
     * @param signupRequest 
     */
    public async signUp(signupRequest?: SignupRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/v1/metronome/sign-up';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(signupRequest, "SignupRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AccessManagementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiKey(response: ResponseContext): Promise<ApiKeyData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiKeyData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyData", ""
            ) as ApiKeyData;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Array<ValidationErrorResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ValidationErrorResponseInner>", ""
            ) as Array<ValidationErrorResponseInner>;
            throw new ApiException<Array<ValidationErrorResponseInner>>(response.httpStatusCode, "Input data validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: PermissionDeniedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PermissionDeniedResponse", ""
            ) as PermissionDeniedResponse;
            throw new ApiException<PermissionDeniedResponse>(response.httpStatusCode, "Permission denied", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiKeyData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyData", ""
            ) as ApiKeyData;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getManyApiKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getManyApiKeys(response: ResponseContext): Promise<GetManyApiKeys200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetManyApiKeys200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetManyApiKeys200Response", ""
            ) as GetManyApiKeys200Response;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Array<ValidationErrorResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ValidationErrorResponseInner>", ""
            ) as Array<ValidationErrorResponseInner>;
            throw new ApiException<Array<ValidationErrorResponseInner>>(response.httpStatusCode, "Input data validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: PermissionDeniedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PermissionDeniedResponse", ""
            ) as PermissionDeniedResponse;
            throw new ApiException<PermissionDeniedResponse>(response.httpStatusCode, "Permission denied", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetManyApiKeys200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetManyApiKeys200Response", ""
            ) as GetManyApiKeys200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putApiKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putApiKey(response: ResponseContext): Promise<CreateOrModifyApiKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateOrModifyApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateOrModifyApiKeyResponse", ""
            ) as CreateOrModifyApiKeyResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Array<ValidationErrorResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ValidationErrorResponseInner>", ""
            ) as Array<ValidationErrorResponseInner>;
            throw new ApiException<Array<ValidationErrorResponseInner>>(response.httpStatusCode, "Input data validation error", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: PermissionDeniedResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PermissionDeniedResponse", ""
            ) as PermissionDeniedResponse;
            throw new ApiException<PermissionDeniedResponse>(response.httpStatusCode, "Permission denied", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateOrModifyApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateOrModifyApiKeyResponse", ""
            ) as CreateOrModifyApiKeyResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to signUp
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async signUp(response: ResponseContext): Promise<SignupResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SignupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignupResponse", ""
            ) as SignupResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: Array<ValidationErrorResponseInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ValidationErrorResponseInner>", ""
            ) as Array<ValidationErrorResponseInner>;
            throw new ApiException<Array<ValidationErrorResponseInner>>(response.httpStatusCode, "Input data validation error", body, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "The requested customer ID is not available", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SignupResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SignupResponse", ""
            ) as SignupResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
