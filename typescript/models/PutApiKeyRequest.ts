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

import { CreateApiKeyRequest } from '../models/CreateApiKeyRequest';
import { ModifyApiKeyRequest } from '../models/ModifyApiKeyRequest';
import { Permission } from '../models/Permission';
import { HttpFile } from '../http/http';

export class PutApiKeyRequest {
    'name'?: string;
    'description'?: string;
    'permissions'?: Array<Permission>;
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "permissions",
            "baseName": "permissions",
            "type": "Array<Permission>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PutApiKeyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

