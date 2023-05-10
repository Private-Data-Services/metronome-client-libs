
clean:
	rm -f *.tgz
	rm -rf dist/*

package: clean
	npm run build
	npm pack

publish:
	npm publish --access public

