// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CreateOrModifyPolicyRequest } from '../models/CreateOrModifyPolicyRequest';
import { CreateOrModifyPolicyResponse } from '../models/CreateOrModifyPolicyResponse';
import { GetManyPolicies200Response } from '../models/GetManyPolicies200Response';
import { PermissionDeniedResponse } from '../models/PermissionDeniedResponse';
import { PolicyData } from '../models/PolicyData';
import { ValidationErrorResponseInner } from '../models/ValidationErrorResponseInner';

/**
 * no description
 */
export class PolicyManagementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Read many policies alphanumerically sorted
     * @param prefix 
     * @param offset The number of policies to drop from the start
     * @param limit The number of policies to include
     * @param includeData Whether to include aging-strategy, aging-offset-amount, aging-offset-unit etc.
     */
    public async getManyPolicies(prefix?: string, offset?: number, limit?: number, includeData?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/v1/metronome/policies';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (prefix !== undefined) {
            requestContext.setQueryParam("prefix", ObjectSerializer.serialize(prefix, "string", ""));
        }

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
     * Read a specific policy
     * @param policyId 
     */
    public async getPolicy(policyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'policyId' is not null or undefined
        if (policyId === null || policyId === undefined) {
            throw new RequiredError("PolicyManagementApi", "getPolicy", "policyId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/policies/{policy-id}'
            .replace('{' + 'policy-id' + '}', encodeURIComponent(String(policyId)));

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
     * Read a specific policy's access log
     * @param policyId 
     */
    public async getPolicyLog(policyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'policyId' is not null or undefined
        if (policyId === null || policyId === undefined) {
            throw new RequiredError("PolicyManagementApi", "getPolicyLog", "policyId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/policies/{policy-id}/log'
            .replace('{' + 'policy-id' + '}', encodeURIComponent(String(policyId)));

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
     * Read the items and sub-items that have been used for a specific policy
     * @param policyId 
     */
    public async getPolicyMembers(policyId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'policyId' is not null or undefined
        if (policyId === null || policyId === undefined) {
            throw new RequiredError("PolicyManagementApi", "getPolicyMembers", "policyId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/policies/{policy-id}/members'
            .replace('{' + 'policy-id' + '}', encodeURIComponent(String(policyId)));

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
     * Create or modify a policy
     * @param policyId The name of the policy to be created
     * @param createOrModifyPolicyRequest 
     */
    public async putPolicy(policyId: string, createOrModifyPolicyRequest?: CreateOrModifyPolicyRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'policyId' is not null or undefined
        if (policyId === null || policyId === undefined) {
            throw new RequiredError("PolicyManagementApi", "putPolicy", "policyId");
        }



        // Path Params
        const localVarPath = '/v1/metronome/policies/{policy-id}'
            .replace('{' + 'policy-id' + '}', encodeURIComponent(String(policyId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createOrModifyPolicyRequest, "CreateOrModifyPolicyRequest", ""),
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

}

export class PolicyManagementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getManyPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getManyPolicies(response: ResponseContext): Promise<GetManyPolicies200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetManyPolicies200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetManyPolicies200Response", ""
            ) as GetManyPolicies200Response;
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
            const body: GetManyPolicies200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetManyPolicies200Response", ""
            ) as GetManyPolicies200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPolicy(response: ResponseContext): Promise<PolicyData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyData", ""
            ) as PolicyData;
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
            const body: PolicyData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyData", ""
            ) as PolicyData;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicyLog
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPolicyLog(response: ResponseContext): Promise<PolicyData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyData", ""
            ) as PolicyData;
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
            const body: PolicyData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyData", ""
            ) as PolicyData;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPolicyMembers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPolicyMembers(response: ResponseContext): Promise<PolicyData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PolicyData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyData", ""
            ) as PolicyData;
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
            const body: PolicyData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PolicyData", ""
            ) as PolicyData;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to putPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async putPolicy(response: ResponseContext): Promise<CreateOrModifyPolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateOrModifyPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateOrModifyPolicyResponse", ""
            ) as CreateOrModifyPolicyResponse;
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
            const body: CreateOrModifyPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateOrModifyPolicyResponse", ""
            ) as CreateOrModifyPolicyResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
