import { AccessManagementApi, ServerConfiguration, createConfiguration, ApiKeyDataListResponse, ApiKeyListResponse } from "@privatedataservices/metronome";

const signUpExample = async () => {
    // No API key required for signing up.  Replace "pds-internal-code-examples" with a customer ID for your organisation that you invent.
    const signupConfiguration = createConfiguration({baseServer: new ServerConfiguration("pds-internal-code-examples", "eu-north-1", {}, true)});
    const signupClient = new AccessManagementApi(signupConfiguration);
    
    try {
        const response = await signupClient.signUp({internalContact: "dpo-team@privatedataservices.com"});
        console.log("Your dev master API key is %s and your production master API key is %s", response.devMasterApiKey, response.productionMasterApiKey);
    } catch(err) {
        console.error("Failed to sign up because: %s", JSON.stringify(err));
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const clientConfig = createConfiguration( {
    baseServer: new ServerConfiguration("pds-internal-code-examples", "eu-north-1", {}, false),
    authMethods: { ApiKeyAuth: process.env.METRONOME_API_KEY }
});
const amApiClient = new AccessManagementApi(clientConfig);

const createApiKeyExample = async () => {
    try {
        // Use the special API key ID of "create" for new keys.
        const response = await amApiClient.putApiKey("create", {name: "dpo-team-policy-manager", description: "Data Protection Office policy management key", permissions: ["policy-read", "policy-write"]});
        console.log("Created new API key successfully.  The ID for changing this key in the future is %s and the value to be used in API calls with the key is %s", response.id, response.value)
    } catch (err) {
        console.error("Failed to create new API key because: %s", JSON.stringify(err));
    }
}

const modifyApiKeyExample = async () => {
    try {
        const response = await amApiClient.putApiKey("k7obqszuu2", {permissions: ["item-read", "policy-read", "policy-write"]});
        console.log("API key modified successfully.  The ID for changing this key in the future is %s and the value to be used in API calls with the key is %s", response.id, response.value);
    } catch (err) {
        console.error("Failed to create new API key because: %s", JSON.stringify(err));
    }
}

const getApiKeyExample = async () => {
    try {
        const response = await amApiClient.getApiKey("k7obqszuu2");
        console.log("API key details are ID: %s, value: %s, permissions: %s", response.id, response.value, JSON.stringify(response.permissions));
    } catch (err) {
        console.error("Failed to query API key because: %s", JSON.stringify(err));
    }
}

const listApiKeyIDsExample = async () => {
    try {
        const response = await amApiClient.getManyApiKeys() as ApiKeyListResponse;
        console.log("Known API keys are: %s", JSON.stringify(response.result));
    } catch (err) {
        console.error("Failed to list API keys because: %s", JSON.stringify(err));
    }
}

const listApiKeyDataExample = async () => {
    try {
        const response = await amApiClient.getManyApiKeys(undefined, undefined, true) as ApiKeyDataListResponse;
        
        // It is also possible to iterate the keys and use API key fields like response.result[0].id or response.result[0].value
        console.log("Known API keys are: %s", JSON.stringify(response.result));
    } catch (err) {
        console.error("Failed to list API keys because: %s", JSON.stringify(err));
    }
}

