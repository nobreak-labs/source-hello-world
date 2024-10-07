#!/bin/sh
mkdir -p lib/x86_64-linux-gnu/
mkdir lib64/
cp /lib/x86_64-linux-gnu/libc.so.6 lib/x86_64-linux-gnu/
cp /lib64/ld-linux-x86-64.so.2 lib64/
echo Copied...
