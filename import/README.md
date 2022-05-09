# Import translations from Lokalise

## Prerequisites

### Bash 5

For the script to work correctly it is necessary to have version 5 of Bash installed on your computer.

To check your bash version, you can execute this command: 
```
bash --version
```

#### The case of MacOS
Bash version 3 is installed on MacOS. Here is a tutorial which was useful for me to install version 5 of bash on MacOS : 
[https://scriptingosx.com/2019/02/install-bash-5-on-macos/](https://scriptingosx.com/2019/02/install-bash-5-on-macos/).

#### The case of Linux
If you don't have bash 5 installed on your Linux distribution, you can follow this tutorial to help you upgrade it :
[https://www.ramoonus.nl/2019/01/08/bash-5-0-installation-for-linux/](https://www.ramoonus.nl/2019/01/08/bash-5-0-installation-for-linux/)


## Lokalise

### Installation 

To install the command line interface provided by Lokalise, you can follow this tutorial:
[https://github.com/lokalise/lokalise-cli-2-go](https://github.com/lokalise/lokalise-cli-2-go).


## Now, import the translations in the back-office

### Import the translations

To import the translations in the back-office, you can execute this command :
```
bash [path-to-import-directory]/script.sh
```