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

export class SubItemsExpiry {
    /**
    * Always the value \"SubItemsExpiry\"
    */
    'expiryType': string;
    'parentItemId': string;
    'subItems': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "expiryType",
            "baseName": "expiry-type",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentItemId",
            "baseName": "parent-item-id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subItems",
            "baseName": "sub-items",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubItemsExpiry.attributeTypeMap;
    }

    public constructor() {
    }
}

