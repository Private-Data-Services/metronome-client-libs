## @

This generator creates TypeScript/JavaScript client that utilizes fetch-api.

## Patches
Code has been manually patched in models/ObjectSerializer.ts, models/GetManyApiKeys200Response.ts and models/GetManyPolicies200Response.ts
to work around generator bugs that exist as of May 2023.

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

Navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @ --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Usage

Below code snippet shows exemplary usage of the configuration and the API based 
on the typical `PetStore` example used for OpenAPI. 

```
import { AccessManagementApi, ServerConfiguration, createConfiguration } from "metronome-ts-client";

// Configure an API client.
const clientConfig = createConfiguration( {
    baseServer: new ServerConfiguration("YOUR-CUSTOMER-ID", "eu-north-1", {}, true),
    authMethods: { ApiKeyAuth: "YOUR_API_KEY" }
});
const amApiClient = new AccessManagementApi(clientConfig);

// Use the access management client
const response = await amApiClient.putApiKey("create", {name: "DPO Team Policy Manager", description: "Data Protection Office policy management key", permissions: ["policy-read", "policy-write"]});
```
