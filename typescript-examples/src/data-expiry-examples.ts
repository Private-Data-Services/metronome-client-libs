import { DataExpiryApi, ServerConfiguration, createConfiguration } from "@privatedataservices/metronome";

const clientConfig = createConfiguration( {
    baseServer: new ServerConfiguration("pds-internal-code-examples", "eu-north-1", {}, true),
    authMethods: { ApiKeyAuth: process.env.METRONOME_API_KEY }
});
const expiryApiClient = new DataExpiryApi(clientConfig);

const queryExpiriesExample = async () => {
    try {
        const response = await expiryApiClient.getExpiryNotices("20230809");
        
        response.complete.forEach( (notice) => {
            if(notice.itemId) {
                console.log("Item %s expires on %s", notice.itemId, response.expiryDate);
            } else {
                console.log("Item %s has sub-items %s expirying on %s", notice.parentItemId, JSON.stringify(notice.subItems), response.expiryDate);
            }
        });
    } catch (err) {
        console.error("Failed to expiry notices because: %s", JSON.stringify(err));
    }
}
