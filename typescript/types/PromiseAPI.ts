import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AccessType } from '../models/AccessType';
import { AgingOffsetUnit } from '../models/AgingOffsetUnit';
import { AgingStrategy } from '../models/AgingStrategy';
import { ApiKeyData } from '../models/ApiKeyData';
import { ApiKeyDataListResponse } from '../models/ApiKeyDataListResponse';
import { ApiKeyListResponse } from '../models/ApiKeyListResponse';
import { CreateApiKeyRequest } from '../models/CreateApiKeyRequest';
import { CreateOrModifyApiKeyResponse } from '../models/CreateOrModifyApiKeyResponse';
import { CreateOrModifyPolicyRequest } from '../models/CreateOrModifyPolicyRequest';
import { CreateOrModifyPolicyResponse } from '../models/CreateOrModifyPolicyResponse';
import { ExpireItemResponse } from '../models/ExpireItemResponse';
import { ExpireSubItemResponse } from '../models/ExpireSubItemResponse';
import { ExpiryResponse } from '../models/ExpiryResponse';
import { ExpiryResponsePendingInner } from '../models/ExpiryResponsePendingInner';
import { GetManyApiKeys200Response } from '../models/GetManyApiKeys200Response';
import { GetManyPolicies200Response } from '../models/GetManyPolicies200Response';
import { ItemExpiry } from '../models/ItemExpiry';
import { ItemMetadataResponse } from '../models/ItemMetadataResponse';
import { ItemOrSubItemAccessLog } from '../models/ItemOrSubItemAccessLog';
import { ItemOrSubItemPolicyResponse } from '../models/ItemOrSubItemPolicyResponse';
import { ModifyApiKeyRequest } from '../models/ModifyApiKeyRequest';
import { Permission } from '../models/Permission';
import { PermissionDeniedResponse } from '../models/PermissionDeniedResponse';
import { PolicyData } from '../models/PolicyData';
import { PolicyDataListResponse } from '../models/PolicyDataListResponse';
import { PolicyListResponse } from '../models/PolicyListResponse';
import { PutApiKeyRequest } from '../models/PutApiKeyRequest';
import { SignupRequest } from '../models/SignupRequest';
import { SignupResponse } from '../models/SignupResponse';
import { SubItemMetadataResponse } from '../models/SubItemMetadataResponse';
import { SubItemsExpiry } from '../models/SubItemsExpiry';
import { TelemetryObservation } from '../models/TelemetryObservation';
import { TelemetryRequest } from '../models/TelemetryRequest';
import { ValidationErrorResponseInner } from '../models/ValidationErrorResponseInner';
import { ValidationProblem } from '../models/ValidationProblem';
import { ObservableAccessManagementApi } from './ObservableAPI';

import { AccessManagementApiRequestFactory, AccessManagementApiResponseProcessor} from "../apis/AccessManagementApi";
export class PromiseAccessManagementApi {
    private api: ObservableAccessManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccessManagementApiRequestFactory,
        responseProcessor?: AccessManagementApiResponseProcessor
    ) {
        this.api = new ObservableAccessManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read a specific API key
     * @param apiKey 
     */
    public getApiKey(apiKey: string, _options?: Configuration): Promise<ApiKeyData> {
        const result = this.api.getApiKey(apiKey, _options);
        return result.toPromise();
    }

    /**
     * Read many API keys alphanumerically sorted
     * @param offset The number of keys to drop from the start
     * @param limit The number of keys to include
     * @param includeData Whether to include permissions, status, description etc.
     */
    public getManyApiKeys(offset?: number, limit?: number, includeData?: boolean, _options?: Configuration): Promise<GetManyApiKeys200Response> {
        const result = this.api.getManyApiKeys(offset, limit, includeData, _options);
        return result.toPromise();
    }

    /**
     * Create or modify an API key
     * @param apiKey The API key to be modified or &#39;create&#39; for a new key
     * @param putApiKeyRequest 
     */
    public putApiKey(apiKey: string, putApiKeyRequest?: PutApiKeyRequest, _options?: Configuration): Promise<CreateOrModifyApiKeyResponse> {
        const result = this.api.putApiKey(apiKey, putApiKeyRequest, _options);
        return result.toPromise();
    }

    /**
     * Open end point for signing up new customers
     * @param signupRequest 
     */
    public signUp(signupRequest?: SignupRequest, _options?: Configuration): Promise<SignupResponse> {
        const result = this.api.signUp(signupRequest, _options);
        return result.toPromise();
    }


}



import { ObservableDataExpiryApi } from './ObservableAPI';

import { DataExpiryApiRequestFactory, DataExpiryApiResponseProcessor} from "../apis/DataExpiryApi";
export class PromiseDataExpiryApi {
    private api: ObservableDataExpiryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataExpiryApiRequestFactory,
        responseProcessor?: DataExpiryApiResponseProcessor
    ) {
        this.api = new ObservableDataExpiryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read items and sub-items that will or have already been expired on the given date
     * @param date The date to query
     */
    public getExpiryNotices(date: string, _options?: Configuration): Promise<ExpiryResponse> {
        const result = this.api.getExpiryNotices(date, _options);
        return result.toPromise();
    }


}



import { ObservableItemAccessApi } from './ObservableAPI';

import { ItemAccessApiRequestFactory, ItemAccessApiResponseProcessor} from "../apis/ItemAccessApi";
export class PromiseItemAccessApi {
    private api: ObservableItemAccessApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemAccessApiRequestFactory,
        responseProcessor?: ItemAccessApiResponseProcessor
    ) {
        this.api = new ObservableItemAccessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Expire an item and its sub-items immediately
     * @param itemId The ID of the item being expired
     */
    public expireItem(itemId: string, _options?: Configuration): Promise<ExpireItemResponse> {
        const result = this.api.expireItem(itemId, _options);
        return result.toPromise();
    }

    /**
     * Expire a sub-item immediately
     * @param itemId The parent item ID of the sub-item being expired
     * @param subItemId The sub-item ID being expired
     */
    public expireSubItem(itemId: string, subItemId: string, _options?: Configuration): Promise<ExpireSubItemResponse> {
        const result = this.api.expireSubItem(itemId, subItemId, _options);
        return result.toPromise();
    }

    /**
     * Read a specific item's access log
     * @param itemId The ID of the item to be read
     * @param startDate Mutually exclusive with specifying the specific sub-items to read.
     * @param endDate 
     */
    public getItemLog(itemId: string, startDate?: boolean, endDate?: boolean, _options?: Configuration): Promise<ItemOrSubItemAccessLog> {
        const result = this.api.getItemLog(itemId, startDate, endDate, _options);
        return result.toPromise();
    }

    /**
     * Read a specific item's metadata with or without any sub-items.
     * @param itemId The ID of the item to be read
     * @param allSubItems Mutually exclusive with specifying the specific sub-items to read.
     * @param noItemContent 
     * @param subItem Mutually exclusive with all-sub-items&#x3D;true.  If you only wish to read a few specific sub-items with this item, include each sub-item name in multiple form parameters eg https://url/v1/metronome/items/customer-123?sub-item&#x3D;email&amp;sub-item&#x3D;mobile-phone&amp;sub-item&#x3D;address
     */
    public getItemMetadata(itemId: string, allSubItems?: boolean, noItemContent?: boolean, subItem?: Array<string>, _options?: Configuration): Promise<ItemMetadataResponse> {
        const result = this.api.getItemMetadata(itemId, allSubItems, noItemContent, subItem, _options);
        return result.toPromise();
    }

    /**
     * Read which policies have been applied to a specific item
     * @param itemId The ID of the item to be read
     */
    public getItemPolicies(itemId: string, _options?: Configuration): Promise<ItemOrSubItemPolicyResponse> {
        const result = this.api.getItemPolicies(itemId, _options);
        return result.toPromise();
    }

    /**
     * Read a specific sub-item's access log
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public getSubItemLog(itemId: string, subItemId: string, _options?: Configuration): Promise<ItemOrSubItemAccessLog> {
        const result = this.api.getSubItemLog(itemId, subItemId, _options);
        return result.toPromise();
    }

    /**
     * Read a specific sub-item's metadata
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public getSubItemMetadata(itemId: string, subItemId: string, _options?: Configuration): Promise<SubItemMetadataResponse> {
        const result = this.api.getSubItemMetadata(itemId, subItemId, _options);
        return result.toPromise();
    }

    /**
     * Read which policies have been applied to a specific sub-item
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public getSubItemPolicies(itemId: string, subItemId: string, _options?: Configuration): Promise<ItemOrSubItemPolicyResponse> {
        const result = this.api.getSubItemPolicies(itemId, subItemId, _options);
        return result.toPromise();
    }


}



import { ObservablePolicyManagementApi } from './ObservableAPI';

import { PolicyManagementApiRequestFactory, PolicyManagementApiResponseProcessor} from "../apis/PolicyManagementApi";
export class PromisePolicyManagementApi {
    private api: ObservablePolicyManagementApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PolicyManagementApiRequestFactory,
        responseProcessor?: PolicyManagementApiResponseProcessor
    ) {
        this.api = new ObservablePolicyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read many policies alphanumerically sorted
     * @param prefix 
     * @param offset The number of policies to drop from the start
     * @param limit The number of policies to include
     * @param includeData Whether to include aging-strategy, aging-offset-amount, aging-offset-unit etc.
     */
    public getManyPolicies(prefix?: string, offset?: number, limit?: number, includeData?: boolean, _options?: Configuration): Promise<GetManyPolicies200Response> {
        const result = this.api.getManyPolicies(prefix, offset, limit, includeData, _options);
        return result.toPromise();
    }

    /**
     * Read a specific policy
     * @param policyId 
     */
    public getPolicy(policyId: string, _options?: Configuration): Promise<PolicyData> {
        const result = this.api.getPolicy(policyId, _options);
        return result.toPromise();
    }

    /**
     * Read a specific policy's access log
     * @param policyId 
     */
    public getPolicyLog(policyId: string, _options?: Configuration): Promise<PolicyData> {
        const result = this.api.getPolicyLog(policyId, _options);
        return result.toPromise();
    }

    /**
     * Read the items and sub-items that have been used for a specific policy
     * @param policyId 
     */
    public getPolicyMembers(policyId: string, _options?: Configuration): Promise<PolicyData> {
        const result = this.api.getPolicyMembers(policyId, _options);
        return result.toPromise();
    }

    /**
     * Create or modify a policy
     * @param policyId The name of the policy to be created
     * @param createOrModifyPolicyRequest 
     */
    public putPolicy(policyId: string, createOrModifyPolicyRequest?: CreateOrModifyPolicyRequest, _options?: Configuration): Promise<CreateOrModifyPolicyResponse> {
        const result = this.api.putPolicy(policyId, createOrModifyPolicyRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTelemetryApi } from './ObservableAPI';

import { TelemetryApiRequestFactory, TelemetryApiResponseProcessor} from "../apis/TelemetryApi";
export class PromiseTelemetryApi {
    private api: ObservableTelemetryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TelemetryApiRequestFactory,
        responseProcessor?: TelemetryApiResponseProcessor
    ) {
        this.api = new ObservableTelemetryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read items and sub-items that will or have already been expired on the given date
     * @param telemetryRequest 
     */
    public postTelemetry(telemetryRequest?: TelemetryRequest, _options?: Configuration): Promise<void> {
        const result = this.api.postTelemetry(telemetryRequest, _options);
        return result.toPromise();
    }


}



