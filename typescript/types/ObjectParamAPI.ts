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

import { ObservableAccessManagementApi } from "./ObservableAPI";
import { AccessManagementApiRequestFactory, AccessManagementApiResponseProcessor} from "../apis/AccessManagementApi";

export interface AccessManagementApiGetApiKeyRequest {
    /**
     * 
     * @type string
     * @memberof AccessManagementApigetApiKey
     */
    apiKey: string
}

export interface AccessManagementApiGetManyApiKeysRequest {
    /**
     * The number of keys to drop from the start
     * @type number
     * @memberof AccessManagementApigetManyApiKeys
     */
    offset?: number
    /**
     * The number of keys to include
     * @type number
     * @memberof AccessManagementApigetManyApiKeys
     */
    limit?: number
    /**
     * Whether to include permissions, status, description etc.
     * @type boolean
     * @memberof AccessManagementApigetManyApiKeys
     */
    includeData?: boolean
}

export interface AccessManagementApiPutApiKeyRequest {
    /**
     * The API key to be modified or &#39;create&#39; for a new key
     * @type string
     * @memberof AccessManagementApiputApiKey
     */
    apiKey: string
    /**
     * 
     * @type PutApiKeyRequest
     * @memberof AccessManagementApiputApiKey
     */
    putApiKeyRequest?: PutApiKeyRequest
}

export interface AccessManagementApiSignUpRequest {
    /**
     * 
     * @type SignupRequest
     * @memberof AccessManagementApisignUp
     */
    signupRequest?: SignupRequest
}

export class ObjectAccessManagementApi {
    private api: ObservableAccessManagementApi

    public constructor(configuration: Configuration, requestFactory?: AccessManagementApiRequestFactory, responseProcessor?: AccessManagementApiResponseProcessor) {
        this.api = new ObservableAccessManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read a specific API key
     * @param param the request object
     */
    public getApiKey(param: AccessManagementApiGetApiKeyRequest, options?: Configuration): Promise<ApiKeyData> {
        return this.api.getApiKey(param.apiKey,  options).toPromise();
    }

    /**
     * Read many API keys alphanumerically sorted
     * @param param the request object
     */
    public getManyApiKeys(param: AccessManagementApiGetManyApiKeysRequest = {}, options?: Configuration): Promise<GetManyApiKeys200Response> {
        return this.api.getManyApiKeys(param.offset, param.limit, param.includeData,  options).toPromise();
    }

    /**
     * Create or modify an API key
     * @param param the request object
     */
    public putApiKey(param: AccessManagementApiPutApiKeyRequest, options?: Configuration): Promise<CreateOrModifyApiKeyResponse> {
        return this.api.putApiKey(param.apiKey, param.putApiKeyRequest,  options).toPromise();
    }

    /**
     * Open end point for signing up new customers
     * @param param the request object
     */
    public signUp(param: AccessManagementApiSignUpRequest = {}, options?: Configuration): Promise<SignupResponse> {
        return this.api.signUp(param.signupRequest,  options).toPromise();
    }

}

import { ObservableDataExpiryApi } from "./ObservableAPI";
import { DataExpiryApiRequestFactory, DataExpiryApiResponseProcessor} from "../apis/DataExpiryApi";

export interface DataExpiryApiGetExpiryNoticesRequest {
    /**
     * The date to query
     * @type string
     * @memberof DataExpiryApigetExpiryNotices
     */
    date: string
}

export class ObjectDataExpiryApi {
    private api: ObservableDataExpiryApi

    public constructor(configuration: Configuration, requestFactory?: DataExpiryApiRequestFactory, responseProcessor?: DataExpiryApiResponseProcessor) {
        this.api = new ObservableDataExpiryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read items and sub-items that will or have already been expired on the given date
     * @param param the request object
     */
    public getExpiryNotices(param: DataExpiryApiGetExpiryNoticesRequest, options?: Configuration): Promise<ExpiryResponse> {
        return this.api.getExpiryNotices(param.date,  options).toPromise();
    }

}

import { ObservableItemAccessApi } from "./ObservableAPI";
import { ItemAccessApiRequestFactory, ItemAccessApiResponseProcessor} from "../apis/ItemAccessApi";

export interface ItemAccessApiExpireItemRequest {
    /**
     * The ID of the item being expired
     * @type string
     * @memberof ItemAccessApiexpireItem
     */
    itemId: string
}

export interface ItemAccessApiExpireSubItemRequest {
    /**
     * The parent item ID of the sub-item being expired
     * @type string
     * @memberof ItemAccessApiexpireSubItem
     */
    itemId: string
    /**
     * The sub-item ID being expired
     * @type string
     * @memberof ItemAccessApiexpireSubItem
     */
    subItemId: string
}

export interface ItemAccessApiGetItemLogRequest {
    /**
     * The ID of the item to be read
     * @type string
     * @memberof ItemAccessApigetItemLog
     */
    itemId: string
    /**
     * Mutually exclusive with specifying the specific sub-items to read.
     * @type boolean
     * @memberof ItemAccessApigetItemLog
     */
    startDate?: boolean
    /**
     * 
     * @type boolean
     * @memberof ItemAccessApigetItemLog
     */
    endDate?: boolean
}

export interface ItemAccessApiGetItemMetadataRequest {
    /**
     * The ID of the item to be read
     * @type string
     * @memberof ItemAccessApigetItemMetadata
     */
    itemId: string
    /**
     * Mutually exclusive with specifying the specific sub-items to read.
     * @type boolean
     * @memberof ItemAccessApigetItemMetadata
     */
    allSubItems?: boolean
    /**
     * 
     * @type boolean
     * @memberof ItemAccessApigetItemMetadata
     */
    noItemContent?: boolean
    /**
     * Mutually exclusive with all-sub-items&#x3D;true.  If you only wish to read a few specific sub-items with this item, include each sub-item name in multiple form parameters eg https://url/v1/metronome/items/customer-123?sub-item&#x3D;email&amp;sub-item&#x3D;mobile-phone&amp;sub-item&#x3D;address
     * @type Array&lt;string&gt;
     * @memberof ItemAccessApigetItemMetadata
     */
    subItem?: Array<string>
}

export interface ItemAccessApiGetItemPoliciesRequest {
    /**
     * The ID of the item to be read
     * @type string
     * @memberof ItemAccessApigetItemPolicies
     */
    itemId: string
}

export interface ItemAccessApiGetSubItemLogRequest {
    /**
     * The parent item ID of the sub-item being read
     * @type string
     * @memberof ItemAccessApigetSubItemLog
     */
    itemId: string
    /**
     * The sub-item ID to be read
     * @type string
     * @memberof ItemAccessApigetSubItemLog
     */
    subItemId: string
}

export interface ItemAccessApiGetSubItemMetadataRequest {
    /**
     * The parent item ID of the sub-item being read
     * @type string
     * @memberof ItemAccessApigetSubItemMetadata
     */
    itemId: string
    /**
     * The sub-item ID to be read
     * @type string
     * @memberof ItemAccessApigetSubItemMetadata
     */
    subItemId: string
}

export interface ItemAccessApiGetSubItemPoliciesRequest {
    /**
     * The parent item ID of the sub-item being read
     * @type string
     * @memberof ItemAccessApigetSubItemPolicies
     */
    itemId: string
    /**
     * The sub-item ID to be read
     * @type string
     * @memberof ItemAccessApigetSubItemPolicies
     */
    subItemId: string
}

export class ObjectItemAccessApi {
    private api: ObservableItemAccessApi

    public constructor(configuration: Configuration, requestFactory?: ItemAccessApiRequestFactory, responseProcessor?: ItemAccessApiResponseProcessor) {
        this.api = new ObservableItemAccessApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Expire an item and its sub-items immediately
     * @param param the request object
     */
    public expireItem(param: ItemAccessApiExpireItemRequest, options?: Configuration): Promise<ExpireItemResponse> {
        return this.api.expireItem(param.itemId,  options).toPromise();
    }

    /**
     * Expire a sub-item immediately
     * @param param the request object
     */
    public expireSubItem(param: ItemAccessApiExpireSubItemRequest, options?: Configuration): Promise<ExpireSubItemResponse> {
        return this.api.expireSubItem(param.itemId, param.subItemId,  options).toPromise();
    }

    /**
     * Read a specific item's access log
     * @param param the request object
     */
    public getItemLog(param: ItemAccessApiGetItemLogRequest, options?: Configuration): Promise<ItemOrSubItemAccessLog> {
        return this.api.getItemLog(param.itemId, param.startDate, param.endDate,  options).toPromise();
    }

    /**
     * Read a specific item's metadata with or without any sub-items.
     * @param param the request object
     */
    public getItemMetadata(param: ItemAccessApiGetItemMetadataRequest, options?: Configuration): Promise<ItemMetadataResponse> {
        return this.api.getItemMetadata(param.itemId, param.allSubItems, param.noItemContent, param.subItem,  options).toPromise();
    }

    /**
     * Read which policies have been applied to a specific item
     * @param param the request object
     */
    public getItemPolicies(param: ItemAccessApiGetItemPoliciesRequest, options?: Configuration): Promise<ItemOrSubItemPolicyResponse> {
        return this.api.getItemPolicies(param.itemId,  options).toPromise();
    }

    /**
     * Read a specific sub-item's access log
     * @param param the request object
     */
    public getSubItemLog(param: ItemAccessApiGetSubItemLogRequest, options?: Configuration): Promise<ItemOrSubItemAccessLog> {
        return this.api.getSubItemLog(param.itemId, param.subItemId,  options).toPromise();
    }

    /**
     * Read a specific sub-item's metadata
     * @param param the request object
     */
    public getSubItemMetadata(param: ItemAccessApiGetSubItemMetadataRequest, options?: Configuration): Promise<SubItemMetadataResponse> {
        return this.api.getSubItemMetadata(param.itemId, param.subItemId,  options).toPromise();
    }

    /**
     * Read which policies have been applied to a specific sub-item
     * @param param the request object
     */
    public getSubItemPolicies(param: ItemAccessApiGetSubItemPoliciesRequest, options?: Configuration): Promise<ItemOrSubItemPolicyResponse> {
        return this.api.getSubItemPolicies(param.itemId, param.subItemId,  options).toPromise();
    }

}

import { ObservablePolicyManagementApi } from "./ObservableAPI";
import { PolicyManagementApiRequestFactory, PolicyManagementApiResponseProcessor} from "../apis/PolicyManagementApi";

export interface PolicyManagementApiGetManyPoliciesRequest {
    /**
     * 
     * @type string
     * @memberof PolicyManagementApigetManyPolicies
     */
    prefix?: string
    /**
     * The number of policies to drop from the start
     * @type number
     * @memberof PolicyManagementApigetManyPolicies
     */
    offset?: number
    /**
     * The number of policies to include
     * @type number
     * @memberof PolicyManagementApigetManyPolicies
     */
    limit?: number
    /**
     * Whether to include aging-strategy, aging-offset-amount, aging-offset-unit etc.
     * @type boolean
     * @memberof PolicyManagementApigetManyPolicies
     */
    includeData?: boolean
}

export interface PolicyManagementApiGetPolicyRequest {
    /**
     * 
     * @type string
     * @memberof PolicyManagementApigetPolicy
     */
    policyId: string
}

export interface PolicyManagementApiGetPolicyLogRequest {
    /**
     * 
     * @type string
     * @memberof PolicyManagementApigetPolicyLog
     */
    policyId: string
}

export interface PolicyManagementApiGetPolicyMembersRequest {
    /**
     * 
     * @type string
     * @memberof PolicyManagementApigetPolicyMembers
     */
    policyId: string
}

export interface PolicyManagementApiPutPolicyRequest {
    /**
     * The name of the policy to be created
     * @type string
     * @memberof PolicyManagementApiputPolicy
     */
    policyId: string
    /**
     * 
     * @type CreateOrModifyPolicyRequest
     * @memberof PolicyManagementApiputPolicy
     */
    createOrModifyPolicyRequest?: CreateOrModifyPolicyRequest
}

export class ObjectPolicyManagementApi {
    private api: ObservablePolicyManagementApi

    public constructor(configuration: Configuration, requestFactory?: PolicyManagementApiRequestFactory, responseProcessor?: PolicyManagementApiResponseProcessor) {
        this.api = new ObservablePolicyManagementApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read many policies alphanumerically sorted
     * @param param the request object
     */
    public getManyPolicies(param: PolicyManagementApiGetManyPoliciesRequest = {}, options?: Configuration): Promise<GetManyPolicies200Response> {
        return this.api.getManyPolicies(param.prefix, param.offset, param.limit, param.includeData,  options).toPromise();
    }

    /**
     * Read a specific policy
     * @param param the request object
     */
    public getPolicy(param: PolicyManagementApiGetPolicyRequest, options?: Configuration): Promise<PolicyData> {
        return this.api.getPolicy(param.policyId,  options).toPromise();
    }

    /**
     * Read a specific policy's access log
     * @param param the request object
     */
    public getPolicyLog(param: PolicyManagementApiGetPolicyLogRequest, options?: Configuration): Promise<PolicyData> {
        return this.api.getPolicyLog(param.policyId,  options).toPromise();
    }

    /**
     * Read the items and sub-items that have been used for a specific policy
     * @param param the request object
     */
    public getPolicyMembers(param: PolicyManagementApiGetPolicyMembersRequest, options?: Configuration): Promise<PolicyData> {
        return this.api.getPolicyMembers(param.policyId,  options).toPromise();
    }

    /**
     * Create or modify a policy
     * @param param the request object
     */
    public putPolicy(param: PolicyManagementApiPutPolicyRequest, options?: Configuration): Promise<CreateOrModifyPolicyResponse> {
        return this.api.putPolicy(param.policyId, param.createOrModifyPolicyRequest,  options).toPromise();
    }

}

import { ObservableTelemetryApi } from "./ObservableAPI";
import { TelemetryApiRequestFactory, TelemetryApiResponseProcessor} from "../apis/TelemetryApi";

export interface TelemetryApiPostTelemetryRequest {
    /**
     * 
     * @type TelemetryRequest
     * @memberof TelemetryApipostTelemetry
     */
    telemetryRequest?: TelemetryRequest
}

export class ObjectTelemetryApi {
    private api: ObservableTelemetryApi

    public constructor(configuration: Configuration, requestFactory?: TelemetryApiRequestFactory, responseProcessor?: TelemetryApiResponseProcessor) {
        this.api = new ObservableTelemetryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read items and sub-items that will or have already been expired on the given date
     * @param param the request object
     */
    public postTelemetry(param: TelemetryApiPostTelemetryRequest = {}, options?: Configuration): Promise<void> {
        return this.api.postTelemetry(param.telemetryRequest,  options).toPromise();
    }

}
