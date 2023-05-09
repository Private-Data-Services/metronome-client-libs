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

/**
* Put request body when signing up a new customer
*/
export class SignupRequest {
    'internalContact': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "internalContact",
            "baseName": "internal-contact",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SignupRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

