import { PolicyDataListResponse, PolicyListResponse, PolicyManagementApi, ServerConfiguration, createConfiguration } from "@privatedataservices/metronome";

const clientConfig = createConfiguration( {
    baseServer: new ServerConfiguration("pds-internal-code-examples", "eu-north-1", {}, true),
    authMethods: { ApiKeyAuth: process.env.METRONOME_API_KEY }
});
const pmApiClient = new PolicyManagementApi(clientConfig);

const createPolicyExample = async () => {
    try {
        const response = await pmApiClient.putPolicy("user-account-access", {"agingStrategy": "since-last-read-or-write", "agingOffsetAmount": 2, "agingOffsetUnit": "year"});
        console.log("Policy %s created successfully.  Fields updated were: %s", response.policyId, JSON.stringify(response.fieldsUpdated));
    } catch (err) {
        console.error("Failed to create new policy because: %s", JSON.stringify(err));
    }
}

const modifyPolicyExample = async () => {
    try {
        const response = await pmApiClient.putPolicy("user-account-access", {"agingStrategy": "since-last-read-or-write", "agingOffsetAmount": 3, "agingOffsetUnit": "month"});
        console.log("Policy %s modified successfully.  Fields updated were: %s", response.policyId, JSON.stringify(response.fieldsUpdated));
    } catch (err) {
        console.error("Failed to modify policy because: %s", JSON.stringify(err));
    }
}

const getPolicyExample = async () => {
    try {
        const response = await pmApiClient.getPolicy("user-account-access");
        console.log("Policy details are: %s", JSON.stringify(response));
    } catch (err) {
        console.error("Failed to query policy because: %s", JSON.stringify(err));
    }
}

const getManyPoliciesExample = async () => {
    try {
        const response = await pmApiClient.getManyPolicies() as PolicyListResponse;
        console.log("All known policies are: %s", JSON.stringify(response.result));
    } catch (err) {
        console.error("Failed to query policies because: %s", JSON.stringify(err));
    }
}

const getManyPolicyDefinitionsNoFilterExample = async () => {
    try {
        const response = await pmApiClient.getManyPolicies(undefined, undefined, undefined, true) as PolicyDataListResponse;
        // It is also possible to iterate through the policies and use their fields like response.result[0].agingOffsetUnit or response.result[0].policyId
        console.log("All known policy definitions are: %s", JSON.stringify(response.result));
    } catch (err) {
        console.error("Failed to query policy definitions because: %s", JSON.stringify(err));
    }
}

const getManyPolicyDefinitionsWithFilterExample = async () => {
    try {
        // Fetch 20 policy records where the policy ID starts "marketing-", skipping the first 10.  Include the policy definitions.
        const response = await pmApiClient.getManyPolicies("marketing-", 10, 20, true) as PolicyDataListResponse;
        // It is also possible to iterate through the policies and use their fields like response.result[0].agingOffsetUnit or response.result[0].policyId
        console.log("All known policy definitions are: %s", JSON.stringify(response.result));
    } catch (err) {
        console.error("Failed to query policy definitions because: %s", JSON.stringify(err));
    }
}
