#!/bin/bash

import_translation_from_lokalise () {
    project_id=$1
    type_name=$2
    settings=$3

    if [ ! -z $type_name ] && [ ${#settings[@]} -gt 0 ]
    then
        mkdir -p ${settings[translation_files_path]}
        if [ ! -f "${settings[translation_files_path]}/.gitignore" ]
        then
            touch ${settings[translation_files_path]}/.gitignore
            echo -e "*\n!.gitignore" >> ${settings[translation_files_path]}/.gitignore
        fi
    else
        echo "type_name and/or settings arguments are missing"
        exit 1
    fi

    if [ ! -z $project_id ]
    then
        lokalise2 \
            --token ${settings[api_token]} \
            --project-id ${project_id} \
            file download \
            --original-filenames=false \
            --dest /tmp \
            --bundle-structure %LANG_ISO%.${settings[translation_files_extension]} \
            --format ${settings[translation_files_format]} \
            --unzip-to ${settings[translation_files_path]}/${network};
    fi
}