
generate-typescript-client:
	openapi-generator-cli generate -g typescript -i metronome-external-api-OpenAPI.yaml -o typescript

