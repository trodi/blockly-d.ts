#!/bin/bash

#get latest blockly code
mkdir tmp
cd tmp
git clone https://github.com/google/blockly.git

# move to blockly core directory
cd blockly/core

# generate input string for definition generator
ls *.js | sed 's:\([a-z]*[-*_*[a-z]*]*\).js:blockly/core/\1.js \1.d.ts :' | tr -d '\n' > ../../out.txt

# go back to root
cd ../..

# generate d.ts - run from project root
node ../node_modules/typescript-closure-tools/definition-generator/src/main.js --include_private true `< out.txt`

# create output dir and move files into it
mkdir output
mv *.d.ts output/

# combine output files into one master file
cat output/*.d.ts > blockly-core.d.ts.tmp

# remove reference paths since they are all in one file
sed -i '.bak' '/reference path/d' blockly-core.d.ts.tmp

# add required definition header
cat ../header.txt > blockly-core.d.ts
cat blockly-core.d.ts.tmp >> blockly-core.d.ts

# move to dist directory
mkdir ../dist/
mv blockly-core.d.ts ../dist/

mkdir ../dist/blockly/
mv blockly/blockly_compressed.js ../dist/blockly/
mv blockly/blocks_compressed.js ../dist/blockly/
mv blockly/msg/js/en.js ../dist/blockly/

# remove build artifacts
cd ..
rm -rf tmp/
