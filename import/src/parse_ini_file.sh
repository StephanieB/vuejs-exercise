#!/bin/bash

convert_ini_file_section_to_array () {
    OLDIFS=$IFS
    ini=$(cat $1 | sed -E 's/[[:blank:]]{1,}=[[:blank:]]{1,}/=/g')  # read the file given as a parameter and remove anything with a space or tab around =
    IFS=$'\n'                                                       # defines the end of line character
    ini=( $ini )                                                    # convert to array
    ini=( ${ini[*]//;*/} )                                          # remove comments with ;

    for val in ${ini[*]}
    do
        if [[ $val == \[*] ]]; then
            array="${val//[}"                                       # escape [
            array="${array//]}"                                     # escape ]
            declare -gA ${array}                                    # declares a global associative array
        elif [[ ! -z $val ]]; then
            IFS=$'='
            values=( $val )
            eval "$array[${values[0]}]=${values[1]}"                # adds items to the array declared previously
        fi
    done
    IFS=$OLDIFS
}