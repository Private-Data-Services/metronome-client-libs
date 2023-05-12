import { ServerConfiguration, TelemetryApi, TelemetryRequest, createConfiguration } from "@privatedataservices/metronome";

const clientConfig = createConfiguration( {
    baseServer: new ServerConfiguration("pds-internal-code-examples", "eu-north-1", {}, false),
    authMethods: { ApiKeyAuth: process.env.METRONOME_API_KEY }
});
const telemetryApiClient = new TelemetryApi(clientConfig);

const postTelemetryExample = async () => {
    try {
        const telemetryData: TelemetryRequest = {"observationTime": new Date(),
                                                 "policies": ["user-account-access"],
                                                 "observations": [  {"itemId": "customer-123", "subItemIds": ["email", "address"]},
                                                                    {"itemId": "customer-456", "subItemIds": ["email", "address"]}]};
        await telemetryApiClient.postTelemetry(telemetryData);
        console.log("Telementry data posted successfully.");
    } catch (err) {
        console.error("Failed to post telemetry data because: %s", JSON.stringify(err));
    }
}
