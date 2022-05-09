#!/bin/bash

DIR=$(dirname $0)
source "${DIR}/src/parse_ini_file.sh"
source "${DIR}/src/import_translation.sh"
convert_ini_file_section_to_array "${DIR}/config/config.ini"

for type_key in "${!translation_types[@]}"
do
    type_name=${translation_types[${type_key}]}
    declare -n type=${type_name}
    for network in "${!type[@]}"
    do
        project_id=${type[${network}]}
        import_translation_from_lokalise ${project_id} ${type_name} ${settings}
    done
done