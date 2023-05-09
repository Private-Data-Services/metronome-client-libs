
generate-typescript-client:
	openapi-generator-cli generate -g typescript -i ../tantalus-cljs/doc/metronome-external-api-swagger.yaml -o typescript

