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

import { AgingOffsetUnit } from '../models/AgingOffsetUnit';
import { AgingStrategy } from '../models/AgingStrategy';
import { HttpFile } from '../http/http';

export class CreateOrModifyPolicyRequest {
    'agingStrategy': AgingStrategy;
    'agingOffsetAmount': number;
    'agingOffsetUnit': AgingOffsetUnit;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "agingStrategy",
            "baseName": "aging-strategy",
            "type": "AgingStrategy",
            "format": ""
        },
        {
            "name": "agingOffsetAmount",
            "baseName": "aging-offset-amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "agingOffsetUnit",
            "baseName": "aging-offset-unit",
            "type": "AgingOffsetUnit",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateOrModifyPolicyRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



