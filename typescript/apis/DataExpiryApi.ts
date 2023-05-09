// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ExpiryResponse } from '../models/ExpiryResponse';
import { PermissionDeniedResponse } from '../models/PermissionDeniedResponse';
import { ValidationErrorResponseInner } from '../models/ValidationErrorResponseInner';

/**
 * no description
 */
export class DataExpiryApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Read items and sub-items that will or have already been expired on the given date
     * @param date The date to query
     */
    public async getExpiryNotices(date: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'date' is not null or undefined
        if (date === null || date === undefined) {
            throw new RequiredError("DataExpiryApi", "getExpiryNotices", "date");
        }


        // Path Params
        const localVarPath = '/v1/metronome/expiry-notices/{date}'
            .replace('{' + 'date' + '}', encodeURIComponent(String(date)));

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

}

export class DataExpiryApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExpiryNotices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExpiryNotices(response: ResponseContext): Promise<ExpiryResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExpiryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExpiryResponse", ""
            ) as ExpiryResponse;
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
            const body: ExpiryResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExpiryResponse", ""
            ) as ExpiryResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
