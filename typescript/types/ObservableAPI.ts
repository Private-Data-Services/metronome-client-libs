import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccessManagementApiRequestFactory, AccessManagementApiResponseProcessor} from "../apis/AccessManagementApi";
export class ObservableAccessManagementApi {
    private requestFactory: AccessManagementApiRequestFactory;
    private responseProcessor: AccessManagementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccessManagementApiRequestFactory,
        responseProcessor?: AccessManagementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccessManagementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccessManagementApiResponseProcessor();
    }

    /**
     * Read a specific API key
     * @param apiKey 
     */
    public getApiKey(apiKey: string, _options?: Configuration): Observable<ApiKeyData> {
        const requestContextPromise = this.requestFactory.getApiKey(apiKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiKey(rsp)));
            }));
    }

    /**
     * Read many API keys alphanumerically sorted
     * @param offset The number of keys to drop from the start
     * @param limit The number of keys to include
     * @param includeData Whether to include permissions, status, description etc.
     */
    public getManyApiKeys(offset?: number, limit?: number, includeData?: boolean, _options?: Configuration): Observable<GetManyApiKeys200Response> {
        const requestContextPromise = this.requestFactory.getManyApiKeys(offset, limit, includeData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getManyApiKeys(rsp)));
            }));
    }

    /**
     * Create or modify an API key
     * @param apiKey The API key to be modified or &#39;create&#39; for a new key
     * @param putApiKeyRequest 
     */
    public putApiKey(apiKey: string, putApiKeyRequest?: PutApiKeyRequest, _options?: Configuration): Observable<CreateOrModifyApiKeyResponse> {
        const requestContextPromise = this.requestFactory.putApiKey(apiKey, putApiKeyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putApiKey(rsp)));
            }));
    }

    /**
     * Open end point for signing up new customers
     * @param signupRequest 
     */
    public signUp(signupRequest?: SignupRequest, _options?: Configuration): Observable<SignupResponse> {
        const requestContextPromise = this.requestFactory.signUp(signupRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.signUp(rsp)));
            }));
    }

}

import { DataExpiryApiRequestFactory, DataExpiryApiResponseProcessor} from "../apis/DataExpiryApi";
export class ObservableDataExpiryApi {
    private requestFactory: DataExpiryApiRequestFactory;
    private responseProcessor: DataExpiryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataExpiryApiRequestFactory,
        responseProcessor?: DataExpiryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataExpiryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataExpiryApiResponseProcessor();
    }

    /**
     * Read items and sub-items that will or have already been expired on the given date
     * @param date The date to query
     */
    public getExpiryNotices(date: string, _options?: Configuration): Observable<ExpiryResponse> {
        const requestContextPromise = this.requestFactory.getExpiryNotices(date, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpiryNotices(rsp)));
            }));
    }

}

import { ItemAccessApiRequestFactory, ItemAccessApiResponseProcessor} from "../apis/ItemAccessApi";
export class ObservableItemAccessApi {
    private requestFactory: ItemAccessApiRequestFactory;
    private responseProcessor: ItemAccessApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ItemAccessApiRequestFactory,
        responseProcessor?: ItemAccessApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ItemAccessApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ItemAccessApiResponseProcessor();
    }

    /**
     * Expire an item and its sub-items immediately
     * @param itemId The ID of the item being expired
     */
    public expireItem(itemId: string, _options?: Configuration): Observable<ExpireItemResponse> {
        const requestContextPromise = this.requestFactory.expireItem(itemId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.expireItem(rsp)));
            }));
    }

    /**
     * Expire a sub-item immediately
     * @param itemId The parent item ID of the sub-item being expired
     * @param subItemId The sub-item ID being expired
     */
    public expireSubItem(itemId: string, subItemId: string, _options?: Configuration): Observable<ExpireSubItemResponse> {
        const requestContextPromise = this.requestFactory.expireSubItem(itemId, subItemId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.expireSubItem(rsp)));
            }));
    }

    /**
     * Read a specific item's access log
     * @param itemId The ID of the item to be read
     * @param startDate Mutually exclusive with specifying the specific sub-items to read.
     * @param endDate 
     */
    public getItemLog(itemId: string, startDate?: boolean, endDate?: boolean, _options?: Configuration): Observable<ItemOrSubItemAccessLog> {
        const requestContextPromise = this.requestFactory.getItemLog(itemId, startDate, endDate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getItemLog(rsp)));
            }));
    }

    /**
     * Read a specific item's metadata with or without any sub-items.
     * @param itemId The ID of the item to be read
     * @param allSubItems Mutually exclusive with specifying the specific sub-items to read.
     * @param noItemContent 
     * @param subItem Mutually exclusive with all-sub-items&#x3D;true.  If you only wish to read a few specific sub-items with this item, include each sub-item name in multiple form parameters eg https://url/v1/metronome/items/customer-123?sub-item&#x3D;email&amp;sub-item&#x3D;mobile-phone&amp;sub-item&#x3D;address
     */
    public getItemMetadata(itemId: string, allSubItems?: boolean, noItemContent?: boolean, subItem?: Array<string>, _options?: Configuration): Observable<ItemMetadataResponse> {
        const requestContextPromise = this.requestFactory.getItemMetadata(itemId, allSubItems, noItemContent, subItem, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getItemMetadata(rsp)));
            }));
    }

    /**
     * Read which policies have been applied to a specific item
     * @param itemId The ID of the item to be read
     */
    public getItemPolicies(itemId: string, _options?: Configuration): Observable<ItemOrSubItemPolicyResponse> {
        const requestContextPromise = this.requestFactory.getItemPolicies(itemId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getItemPolicies(rsp)));
            }));
    }

    /**
     * Read a specific sub-item's access log
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public getSubItemLog(itemId: string, subItemId: string, _options?: Configuration): Observable<ItemOrSubItemAccessLog> {
        const requestContextPromise = this.requestFactory.getSubItemLog(itemId, subItemId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubItemLog(rsp)));
            }));
    }

    /**
     * Read a specific sub-item's metadata
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public getSubItemMetadata(itemId: string, subItemId: string, _options?: Configuration): Observable<SubItemMetadataResponse> {
        const requestContextPromise = this.requestFactory.getSubItemMetadata(itemId, subItemId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubItemMetadata(rsp)));
            }));
    }

    /**
     * Read which policies have been applied to a specific sub-item
     * @param itemId The parent item ID of the sub-item being read
     * @param subItemId The sub-item ID to be read
     */
    public getSubItemPolicies(itemId: string, subItemId: string, _options?: Configuration): Observable<ItemOrSubItemPolicyResponse> {
        const requestContextPromise = this.requestFactory.getSubItemPolicies(itemId, subItemId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSubItemPolicies(rsp)));
            }));
    }

}

import { PolicyManagementApiRequestFactory, PolicyManagementApiResponseProcessor} from "../apis/PolicyManagementApi";
export class ObservablePolicyManagementApi {
    private requestFactory: PolicyManagementApiRequestFactory;
    private responseProcessor: PolicyManagementApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PolicyManagementApiRequestFactory,
        responseProcessor?: PolicyManagementApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PolicyManagementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PolicyManagementApiResponseProcessor();
    }

    /**
     * Read many policies alphanumerically sorted
     * @param prefix 
     * @param offset The number of policies to drop from the start
     * @param limit The number of policies to include
     * @param includeData Whether to include aging-strategy, aging-offset-amount, aging-offset-unit etc.
     */
    public getManyPolicies(prefix?: string, offset?: number, limit?: number, includeData?: boolean, _options?: Configuration): Observable<GetManyPolicies200Response> {
        const requestContextPromise = this.requestFactory.getManyPolicies(prefix, offset, limit, includeData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getManyPolicies(rsp)));
            }));
    }

    /**
     * Read a specific policy
     * @param policyId 
     */
    public getPolicy(policyId: string, _options?: Configuration): Observable<PolicyData> {
        const requestContextPromise = this.requestFactory.getPolicy(policyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicy(rsp)));
            }));
    }

    /**
     * Read a specific policy's access log
     * @param policyId 
     */
    public getPolicyLog(policyId: string, _options?: Configuration): Observable<PolicyData> {
        const requestContextPromise = this.requestFactory.getPolicyLog(policyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicyLog(rsp)));
            }));
    }

    /**
     * Read the items and sub-items that have been used for a specific policy
     * @param policyId 
     */
    public getPolicyMembers(policyId: string, _options?: Configuration): Observable<PolicyData> {
        const requestContextPromise = this.requestFactory.getPolicyMembers(policyId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPolicyMembers(rsp)));
            }));
    }

    /**
     * Create or modify a policy
     * @param policyId The name of the policy to be created
     * @param createOrModifyPolicyRequest 
     */
    public putPolicy(policyId: string, createOrModifyPolicyRequest?: CreateOrModifyPolicyRequest, _options?: Configuration): Observable<CreateOrModifyPolicyResponse> {
        const requestContextPromise = this.requestFactory.putPolicy(policyId, createOrModifyPolicyRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.putPolicy(rsp)));
            }));
    }

}

import { TelemetryApiRequestFactory, TelemetryApiResponseProcessor} from "../apis/TelemetryApi";
export class ObservableTelemetryApi {
    private requestFactory: TelemetryApiRequestFactory;
    private responseProcessor: TelemetryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TelemetryApiRequestFactory,
        responseProcessor?: TelemetryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TelemetryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TelemetryApiResponseProcessor();
    }

    /**
     * Read items and sub-items that will or have already been expired on the given date
     * @param telemetryRequest 
     */
    public postTelemetry(telemetryRequest?: TelemetryRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.postTelemetry(telemetryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postTelemetry(rsp)));
            }));
    }

}
