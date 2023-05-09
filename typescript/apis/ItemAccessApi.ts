// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { ExpireItemResponse } from '../models/ExpireItemResponse';
import { ExpireSubItemResponse } from '../models/ExpireSubItemResponse';
import { ItemMetadataResponse } from '../models/ItemMetadataResponse';
import { ItemOrSubItemAccessLog } from '../models/ItemOrSubItemAccessLog';
import { ItemOrSubItemPolicyResponse } from '../models/ItemOrSubItemPolicyResponse';
import { PermissionDeniedResponse } from '../models/PermissionDeniedResponse';
import { SubItemMetadataResponse } from '../models/SubItemMetadataResponse';
import { ValidationErrorResponseInner } from '../models/ValidationErrorResponseInner';

/**
 * no description
 */
export class ItemAccessApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Expire an item and its sub-items immediately
     * @param itemId The ID of the item being expired
     */
    public async expireItem(itemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("ItemAccessApi", "expireItem", "itemId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/items/{item-id}'
            .replace('{' + 'item-id' + '}', encodeURIComponent(String(itemId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Expire a sub-item immediately
     * @param itemId The parent item ID of the sub-item being expired
     * @param subItemId The sub-item ID being expired
     */
    public async expireSubItem(itemId: string, subItemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("ItemAccessApi", "expireSubItem", "itemId");
        }


        // verify required parameter 'subItemId' is not null or undefined
        if (subItemId === null || subItemId === undefined) {
            throw new RequiredError("ItemAccessApi", "expireSubItem", "subItemId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/items/{item-id}/{sub-item-id}'
            .replace('{' + 'item-id' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'sub-item-id' + '}', encodeURIComponent(String(subItemId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Read a specific item's access log
     * @param itemId The ID of the item to be read
     * @param startDate Mutually exclusive with specifying the specific sub-items to read.
     * @param endDate 
     */
    public async getItemLog(itemId: string, startDate?: boolean, endDate?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getItemLog", "itemId");
        }




        // Path Params
        const localVarPath = '/v1/metronome/items/{item-id}/log'
            .replace('{' + 'item-id' + '}', encodeURIComponent(String(itemId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("start-date", ObjectSerializer.serialize(startDate, "boolean", ""));
        }

        // Query Params
        if (endDate !== undefined) {
            requestContext.setQueryParam("end-date", ObjectSerializer.serialize(endDate, "boolean", ""));
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
     * Read a specific item's metadata with or without any sub-items.
     * @param itemId The ID of the item to be read
     * @param allSubItems Mutually exclusive with specifying the specific sub-items to read.
     * @param noItemContent 
     * @param subItem Mutually exclusive with all-sub-items&#x3D;true.  If you only wish to read a few specific sub-items with this item, include each sub-item name in multiple form parameters eg https://url/v1/metronome/items/customer-123?sub-item&#x3D;email&amp;sub-item&#x3D;mobile-phone&amp;sub-item&#x3D;address
     */
    public async getItemMetadata(itemId: string, allSubItems?: boolean, noItemContent?: boolean, subItem?: Array<string>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getItemMetadata", "itemId");
        }





        // Path Params
        const localVarPath = '/v1/metronome/items/{item-id}'
            .replace('{' + 'item-id' + '}', encodeURIComponent(String(itemId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (allSubItems !== undefined) {
            requestContext.setQueryParam("all-sub-items", ObjectSerializer.serialize(allSubItems, "boolean", ""));
        }

        // Query Params
        if (noItemContent !== undefined) {
            requestContext.setQueryParam("no-item-content", ObjectSerializer.serialize(noItemContent, "boolean", ""));
        }

        // Query Params
        if (subItem !== undefined) {
            requestContext.setQueryParam("sub-item", ObjectSerializer.serialize(subItem, "Array<string>", ""));
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
     * Read which policies have been applied to a specific item
     * @param itemId The ID of the item to be read
     */
    public async getItemPolicies(itemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getItemPolicies", "itemId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/items/{item-id}/policies'
            .replace('{' + 'item-id' + '}', encodeURIComponent(String(itemId)));

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
     * Read a specific sub-item's access log
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public async getSubItemLog(itemId: string, subItemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getSubItemLog", "itemId");
        }


        // verify required parameter 'subItemId' is not null or undefined
        if (subItemId === null || subItemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getSubItemLog", "subItemId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/items/{item-id}/{sub-item-id}/log'
            .replace('{' + 'item-id' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'sub-item-id' + '}', encodeURIComponent(String(subItemId)));

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
     * Read a specific sub-item's metadata
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public async getSubItemMetadata(itemId: string, subItemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getSubItemMetadata", "itemId");
        }


        // verify required parameter 'subItemId' is not null or undefined
        if (subItemId === null || subItemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getSubItemMetadata", "subItemId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/items/{item-id}/{sub-item-id}'
            .replace('{' + 'item-id' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'sub-item-id' + '}', encodeURIComponent(String(subItemId)));

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
     * Read which policies have been applied to a specific sub-item
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public async getSubItemPolicies(itemId: string, subItemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getSubItemPolicies", "itemId");
        }


        // verify required parameter 'subItemId' is not null or undefined
        if (subItemId === null || subItemId === undefined) {
            throw new RequiredError("ItemAccessApi", "getSubItemPolicies", "subItemId");
        }


        // Path Params
        const localVarPath = '/v1/metronome/items/{item-id}/{sub-item-id}/policies'
            .replace('{' + 'item-id' + '}', encodeURIComponent(String(itemId)))
            .replace('{' + 'sub-item-id' + '}', encodeURIComponent(String(subItemId)));

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

export class ItemAccessApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expireItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expireItem(response: ResponseContext): Promise<ExpireItemResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExpireItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExpireItemResponse", ""
            ) as ExpireItemResponse;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item does not exist or has already expired", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExpireItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExpireItemResponse", ""
            ) as ExpireItemResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expireSubItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expireSubItem(response: ResponseContext): Promise<ExpireSubItemResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExpireSubItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExpireSubItemResponse", ""
            ) as ExpireSubItemResponse;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Sub-item does not exist or has already expired", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExpireSubItemResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExpireSubItemResponse", ""
            ) as ExpireSubItemResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getItemLog
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getItemLog(response: ResponseContext): Promise<ItemOrSubItemAccessLog > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ItemOrSubItemAccessLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemOrSubItemAccessLog", ""
            ) as ItemOrSubItemAccessLog;
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
            const body: ItemOrSubItemAccessLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemOrSubItemAccessLog", ""
            ) as ItemOrSubItemAccessLog;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getItemMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getItemMetadata(response: ResponseContext): Promise<ItemMetadataResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemMetadataResponse", ""
            ) as ItemMetadataResponse;
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
            const body: ItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemMetadataResponse", ""
            ) as ItemMetadataResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getItemPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getItemPolicies(response: ResponseContext): Promise<ItemOrSubItemPolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ItemOrSubItemPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemOrSubItemPolicyResponse", ""
            ) as ItemOrSubItemPolicyResponse;
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
            const body: ItemOrSubItemPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemOrSubItemPolicyResponse", ""
            ) as ItemOrSubItemPolicyResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubItemLog
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubItemLog(response: ResponseContext): Promise<ItemOrSubItemAccessLog > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ItemOrSubItemAccessLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemOrSubItemAccessLog", ""
            ) as ItemOrSubItemAccessLog;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item does not exist or has already expired", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ItemOrSubItemAccessLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemOrSubItemAccessLog", ""
            ) as ItemOrSubItemAccessLog;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubItemMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubItemMetadata(response: ResponseContext): Promise<SubItemMetadataResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubItemMetadataResponse", ""
            ) as SubItemMetadataResponse;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item does not exist or has already expired", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SubItemMetadataResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubItemMetadataResponse", ""
            ) as SubItemMetadataResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubItemPolicies
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubItemPolicies(response: ResponseContext): Promise<ItemOrSubItemPolicyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ItemOrSubItemPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemOrSubItemPolicyResponse", ""
            ) as ItemOrSubItemPolicyResponse;
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
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Item does not exist or has already expired", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ItemOrSubItemPolicyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ItemOrSubItemPolicyResponse", ""
            ) as ItemOrSubItemPolicyResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
