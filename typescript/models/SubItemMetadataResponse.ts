/**
 * Metronome API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@privatedataservices.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class SubItemMetadataResponse {
    /**
    * Present and true only when the item has expired
    */
    'expired'?: boolean;
    /**
    * The policy which currently governs how long this item will be retained
    */
    'policyId': string;
    /**
    * The date at which this item will expire if it is not used again
    */
    'expiryDate'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "expired",
            "baseName": "expired",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "policyId",
            "baseName": "policy-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiryDate",
            "baseName": "expiry-date",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubItemMetadataResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

