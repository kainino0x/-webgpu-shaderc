#!/bin/sh
set -e

pushd shaderc
./utils/git-sync-deps
mkdir -p build
cd build
emcmake cmake -GNinja \
    -DCMAKE_BUILD_TYPE=Release \
    -DENABLE_AMD_EXTENSIONS=OFF \
    -DENABLE_NV_EXTENSIONS=OFF \
    -DENABLE_HLSL=OFF \
    -DENABLE_OPT=OFF \
    -DENABLE_EMSCRIPTEN_SINGLE_FILE=ON \
    -DSHADERC_SKIP_TESTS=ON \
    -DSPIRV_SKIP_EXECUTABLES=ON \
    ..
ninja shaderc.js
popd

mkdir -p dist
cat index.1.js > dist/index.js
cat shaderc/build/libshaderc/shaderc.js >> dist/index.js
cat index.2.js >> dist/index.js
