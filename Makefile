
generate-typescript-client:
	openapi-generator-cli generate -g typescript -i metronome-external-api-OpenAPI.yaml -o typescript

generate-ruby-client:
	openapi-generator-cli generate -g ruby -i metronome-external-api-OpenAPI.yaml -c ruby-lang.yaml

