#!/bin/bash

av=("$@")
i=0

if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
fi
while [ $i -lt "$#" ];
do
	mkdir "ex${av[i]}"
	i=$((i + 1))
done
