PATH  := node_modules/.bin:$(PATH)
NODE_PATH := src:examples
SHELL := /bin/bash

.PHONY: clean watch all server

SRC_JS = $(shell find src -name '*.js')
EXAMPLES_JS = $(shell find examples -name '*.js')
BUILD_JS = dist/Main.js

$(BUILD_JS): $(SRC_JS) $(EXAMPLES_JS)
	@mkdir -p $(dir $@)
	browserify examples/Main.js --debug -o $@
	@echo '...done';

all: $(BUILD_JS)

watch: 
	onchange 'src/**/*.*' 'examples/**/*.*' -i -- make all

server:
	http-server -p 4444

clean:
	rm -r dist

