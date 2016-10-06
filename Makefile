PATH  := node_modules/.bin:$(PATH)
NODE_PATH := src:examples
SHELL := /bin/bash

.PHONY: clean watch server

SRC_JS = examples/Main.js
BUILD_JS = dist/Main.js

watch: 
	watchify $(SRC_JS) -o $(BUILD_JS) -v

server:
	http-server -p 4444

clean:
	rm -r dist

